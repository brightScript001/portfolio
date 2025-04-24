import { NextResponse } from "next/server"
import { featuredProjects, selectedProjects } from "@/config/portfolio-config"

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME

    // Determine which repositories to fetch
    let repos = []

    if (selectedProjects.length > 0) {
      // If specific repositories are selected, fetch them individually
      const repoPromises = selectedProjects.map((repoName) =>
        fetch(`https://api.github.com/repos/${username}/${repoName}`, {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }).then((res) => (res.ok ? res.json() : null)),
      )

      const repoResults = await Promise.all(repoPromises)
      repos = repoResults.filter(Boolean) // Remove any null results (repos that weren't found)
    } else {
      // Otherwise, fetch recent repositories
      const response = await fetch(`https://api.github.com/user/repos?sort=updated&per_page=10`, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      })

      if (!response.ok) {
        throw new Error(`GitHub API responded with status: ${response.status}`)
      }

      repos = await response.json()
    }

    // Process and filter the repositories
    const projects = repos
      .filter((repo) => !repo.fork && repo.visibility === "public")
      .map((repo) => {
        // Find any custom configuration for this repository
        const customConfig = featuredProjects.find((p) => p.repoName === repo.name)

        return {
          id: repo.id,
          name: repo.name,
          description: customConfig?.customDescription || repo.description || "No description provided",
          html_url: repo.html_url,
          homepage: customConfig?.demoUrl || repo.homepage || "",
          topics: repo.topics || [],
          updated_at: repo.updated_at,
          language: repo.language || "Not specified",
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          featured: customConfig?.featured || false,
          order: customConfig?.order || 999,
          // Use custom preview image if provided, otherwise use placeholder
          preview_url: customConfig?.previewImage || `/placeholder.svg?height=400&width=600`,
        }
      })
      // Sort by custom order if specified, then by featured status, then by update date
      .sort((a, b) => {
        if (a.order !== b.order) return a.order - b.order
        if (a.featured !== b.featured) return a.featured ? -1 : 1
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      })

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error fetching GitHub projects:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub projects" }, { status: 500 })
  }
}

import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Replace 'username' with your GitHub username or use environment variable
    const username = process.env.GITHUB_USERNAME || "johndoe"

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    })

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json({
      login: data.login,
      avatar_url: data.avatar_url,
      html_url: data.html_url,
      name: data.name || data.login,
      bio: data.bio || "No bio available",
      location: data.location,
      followers: data.followers,
      public_repos: data.public_repos,
    })
  } catch (error) {
    console.error("Error fetching GitHub profile:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub profile" }, { status: 500 })
  }
}

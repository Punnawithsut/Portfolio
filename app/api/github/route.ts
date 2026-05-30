import { NextResponse } from "next/server";

const TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = process.env.GITHUB_USERNAME;

async function fetchCalendar() {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }`,
      variables: { username: USERNAME },
    }),
    next: { revalidate: 3600 },
  });
  const { data } = await res.json();
  return data.user.contributionsCollection.contributionCalendar;
}

async function fetchRepos() {
  const res = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?sort=pushed&direction=desc&per_page=6`,
    {
      headers: { "Authorization": `Bearer ${TOKEN}` },
      next: { revalidate: 3600 },
    }
  );
  return res.json();
}

export async function GET() {
  try {
    const [calendar, repos] = await Promise.all([
      fetchCalendar(),
      fetchRepos(),
    ]);
    return NextResponse.json({ calendar, repos });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
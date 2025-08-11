import { NextResponse } from "next/server";

export async function GET() {
  const today = new Date();
  const days18Ago = new Date(today);
  days18Ago.setDate(today.getDate() - 56);

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }`;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        username: "Himanshi305",
        from: days18Ago.toISOString(),
        to: today.toISOString(),
      },
    }),
  });

  const data = await response.json();
  const contributions = data.data.user.contributionsCollection.contributionCalendar.weeks
    .flatMap(week => week.contributionDays)
    .map(day => ({
      date: day.date,
      count: day.contributionCount,
    }));

  return NextResponse.json(contributions);
}

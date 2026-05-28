"use client";

import { useGitHub } from "@/hooks/useGitHub";

export function GitHubContributionCalendar() {
    const { calendar, repos, loading } = useGitHub();
    if(loading || !calendar || !repos) return <p style={{ color: "var(--color-text-secondary)", fontSize: 14 }}>Loading...</p>;
    const weeks = calendar.weeks;
}
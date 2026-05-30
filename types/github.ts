export type ContributionDay = {
    date: string;
    contributionCount: number;
    color: string;
};

export type ContributionWeek = {
    contributionDays: ContributionDay[];
};

export type ContributionCalendar = {
    totalContributions: number;
    weeks: ContributionWeek[];
};

export type Repo = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    pushed_at: string;
};
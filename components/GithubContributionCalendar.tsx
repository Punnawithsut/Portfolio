"use client";

import { useGitHub } from "@/hooks/useGitHub";
import { CONTRIBUTION_COLORS, LEGEND_LEVELS, MONTHS, getContributionLevel } from "@/lib/github.config";
import { ContributionDay } from "@/types/github";
import React from "react";

export function GitHubContributionCalendar() {
    const { calendar, repos, loading } = useGitHub();
    if (loading || !calendar || !repos) return <p className="text-sm text-muted-foreground">Loading...</p>;
    const weeks = calendar.weeks;

    return (
        <div className="w-full h-full">
            <div className="flex flex-wrap gap-3 mb-5">
                <div className="bg-secondary rounded-lg px-4 py-2.5">
                    <div className="text-2xl font-medium">
                        {calendar.totalContributions.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">Contributions this year</div>
                </div>
            </div>

            <div className="flex mt-4">
                <div className="flex flex-col gap-[4px] mr-1 text-[10px] text-muted-foreground mt-4">
                    {["", "Mon", "", "Wed", "", "Fri", ""].map((day, index) => (
                        <span key={index} className="h-[11px] leading-[11px] block">{day}</span>
                    ))}
                </div>

                <div className="flex gap-[4px]">
                    {weeks.map((week, weekIndex) => {
                        const isNewMonth =
                            weekIndex > 0 &&
                            week.contributionDays[0] &&
                            weeks[weekIndex - 1].contributionDays[0] &&
                            new Date(week.contributionDays[0].date).getMonth() !==
                            new Date(weeks[weekIndex - 1].contributionDays[0].date).getMonth();

                        const monthLabel = isNewMonth || weekIndex === 0
                            ? MONTHS[new Date(week.contributionDays[0]?.date).getMonth()]
                            : "";

                        return (
                            <div key={weekIndex} className={`flex flex-col relative ${isNewMonth ? "ml-2" : ""}`}>
    							<div className="absolute -top-4 left-0 text-[11px] text-muted-foreground whitespace-nowrap">
    							    {monthLabel}
    							</div>

                                <div className="flex flex-col gap-[4px]">
                                    {week.contributionDays[0] &&
    									Array.from({
    									    length: new Date(week.contributionDays[0].date).getDay(),
    									}).map((_, i) => (
    									    <div
    									        key={`top-pad-${i}`}
    									        className="w-[13px] h-[13px] rounded-[2px]"
    									        style={{ background: CONTRIBUTION_COLORS[0] }}
    									    />
    									))}

                                    {week.contributionDays.map((day: ContributionDay) => {
                                        const level = getContributionLevel(day.contributionCount);
                                        const label = new Date(day.date).toLocaleDateString("en-US", {
                                            month: "short", day: "numeric", year: "numeric",
                                        });
                                        const isLastDay =
                                            weekIndex === weeks.length - 1 &&
                                            day === week.contributionDays[week.contributionDays.length - 1];

                                        return (
                                            <React.Fragment key={day.date}>
                                                <div
                                                    title={
                                                        day.contributionCount === 0
                                                            ? `No contributions on ${label}`
                                                            : `${day.contributionCount} contributions on ${label}`
                                                    }
                                                    className="w-[13px] h-[13px] rounded-[2px] cursor-default"
                                                    style={{ background: CONTRIBUTION_COLORS[level] }}
                                                />
                                                {isLastDay &&
                                                    Array.from({
                                                        length: 6 - new Date(day.date).getDay(),
                                                    }).map((_, i) => (
                                                        <div
                                                            key={`end-pad-${i}`}
                                                            className="w-[13px] h-[13px] rounded-[2px]"
                                                            style={{ background: CONTRIBUTION_COLORS[0] }}
                                                        />
                                                    ))
                                                }
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex items-center gap-1.5 mt-2 justify-end text-[11px] text-muted-foreground">
                <span>Less</span>
                {LEGEND_LEVELS.map(l => (
                    <div
                        key={l}
                        className="w-[13px] h-[13px] rounded-[2px]"
                        style={{ background: CONTRIBUTION_COLORS[l] }}
                    />
                ))}
                <span>More</span>
            </div>

            <div className="mt-8 ml-8 mr-8 mb-10">
                <h3 className="text-[15px] font-medium mb-3">Recently pushed</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {repos.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="no-underline bg-background border border-border rounded-xl p-4 block hover:border-border/80 transition-colors"
                        >
                            <div className="text-[13px] font-medium text-blue-500 mb-1">
                                {repo.name}
                            </div>
                            <div className="text-xs text-muted-foreground mb-2.5 leading-relaxed min-h-9">
                                {repo.description || "No description"}
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                                {repo.language && (
                                    <>
                                        <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                                        <span>{repo.language}</span>
                                    </>
                                )}
                                <span className="ml-auto">
                                    {new Date(repo.pushed_at).toLocaleDateString("en-US", {
                                        month: "short", day: "numeric",
                                    })}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
}
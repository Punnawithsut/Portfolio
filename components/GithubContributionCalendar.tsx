"use client";

import { useGitHub } from "@/hooks/useGitHub";
import { CONTRIBUTION_COLORS, MONTHS, getContributionLevel } from "@/lib/github.config";
import { ContributionDay } from "@/types/github";
import React from "react";

export function GitHubContributionCalendar() {
    const { calendar, repos, loading } = useGitHub();
    if(loading || !calendar || !repos) return <p style={{ color: "var(--color-text-secondary)", fontSize: 14 }}>Loading...</p>;
    const weeks = calendar.weeks;
    console.log(calendar, repos)
    return (
        <div>
            <div className="flex flex-wrap gap-3 mb-5">
                <div className="bg-secondary rounded-lg px-4 py-2.5">
                    <div className="text-2xl font-medium">
                        {calendar.totalContributions}
                    </div>
                    <div className="text-xs text-muted-foreground">Contributions this year</div>
                </div>
            </div>

            <div className="flex gap-[3px] mb-1 pl-7 text-[11px] text-muted-foreground">
                {weeks.map((week, weekIndex) => {
                    const firstDay = week.contributionDays.find(d => new Date(d.date).getDate() === 1);
                    return (
                        <span key = {weekIndex} className="w-[14px] inline-block">
                            {firstDay? MONTHS[new Date(firstDay.date).getMonth()] : ""}
                        </span>
                    );
                })}
            </div>

            <div className="flex">
                <div className="flex flex-col gap-[3px] mr-1 text-[10px] text-muted-foreground">
                    {["", "Mon", "", "Wed", "", "Fri", ""].map((day, index) => (
                        <span key={index} className="h-[11px] leading-[11px] block">{day}</span>
                    ))}
                </div>

                <div className="flex gap-[3px]">
                    {weeks.map((week, weekIndex) => {
                        const isNewMonth = weekIndex > 0 && week.contributionDays[0] && weeks[weekIndex - 1].contributionDays[0] && new Date(week.contributionDays[0].date).getMonth() !== new Date(weeks[weekIndex - 1].contributionDays[0].date).getMonth(); //if month between day is not equal
                        return (
                            <div key={weekIndex} className={`flex flex-col gap-[3px] ${isNewMonth ? "ml-2" : ""}`}>
                                {weekIndex === 0 &&
                                    Array.from({
                                        length: week.contributionDays[0]
                                            ? new Date(week.contributionDays[0].date).getDay()
                                            : 0,
                                    }).map((_, i) => (
                                        <div key={`start-pad-${i}`} className="w-[11px] h-[11px]" />
                                    ))
                                }
                                {week.contributionDays.map((day: ContributionDay) => {
                                    const level = getContributionLevel(day.contributionCount);
                                    const label = new Date(day.date).toLocaleDateString("en-US", {
                                        month: "short", day: "numeric", year: "numeric",
                                    });
                                    const isLastDay = weekIndex === weeks.length - 1 && day === week.contributionDays[week.contributionDays.length - 1];
                                    return (
                                        <React.Fragment key={day.date}>
                                            <div
                                                key={day.date}
                                                title={
                                                    day.contributionCount === 0 ? `No contributions on ${label}` : `${day.contributionCount} contributions on ${label}`
                                                }
                                                className="w-[11px] h-[11px] rounded-[2px] cursor-default"
                                                style={{ background: CONTRIBUTION_COLORS[level] }}
                                            />
                                            {isLastDay &&
                                                (
                                                    Array.from({
                                                        length: 6 - new Date(day.date).getDay(),
                                                    }).map((_, i) => (
                                                        <div key={`end-pad-${i}`} className="w-[11px] h-[11px] rounded-[2px]" style={{ background: CONTRIBUTION_COLORS[0] }} />
                                                    ))
                                                )
                                            }
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
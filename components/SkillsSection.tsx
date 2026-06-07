"use client";
import { SKILL_GROUPS } from "@/lib/skills.config";

export function SkillsSection() {
    return (
        <div className="w-full py-16 flex flex-col items-center">
            <div className="text-2xl font-bold text-center mb-10">Skills</div>
            <div className="flex flex-col gap-8 w-full max-w-3xl">
                {SKILL_GROUPS.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        <div className="text-xl font-medium text-muted-foreground mb-3">
                            {group.label}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {group.skills.map((skill, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 rounded-xl border border-border bg-secondary px-6 py-3 text-base font-medium"
                                >
                                    <span className="text-2xl">{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
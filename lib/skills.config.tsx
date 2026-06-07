import { SiReact, SiNextdotjs, SiTypescript, SiVuedotjs, SiCplusplus, SiExpress, SiTailwindcss, SiPostgresql, SiDocker, SiMongodb, SiBun, SiDrizzle, SiPython } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export type SkillGroup = {
    label: string;
    skills: { name: string; icon: React.ReactNode }[];
};

export const SKILL_GROUPS: SkillGroup[] = [
    {
        label: "Frontend",
        skills: [
            { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
            { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
            { name: "Vue", icon: <SiVuedotjs className="text-[#42B883]" /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "React Native", icon: <TbBrandReactNative className="text-[#61DAFB]" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        ],
    },
    {
        label: "Backend",
        skills: [
            { name: "Express.js", icon: <SiExpress /> },
            { name: "Bun", icon: <SiBun /> },
            { name: "Elysia", icon: <span className="text-xs font-bold">El</span> },
            { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        ],
    },
    {
        label: "Database",
        skills: [
            { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
            { name: "Drizzle", icon: <SiDrizzle /> },
        ],
    },
    {
        label: "Other Languages",
        skills: [
            { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
            { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        ],
    },
];
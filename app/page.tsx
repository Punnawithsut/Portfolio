import { GitHubContributionCalendar } from "@/components/GitHubContributionCalendar";
import { HeroSection } from "@/components/Hero";
import { HighlightedProjects } from "@/components/HighligthedProject";
import { NavigationBar } from "@/components/Navbar";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
    return (
        <div className="min-h-screen w-full items-center justify-center">
            <NavigationBar />
            <HeroSection />
            {/*BIO SEC*/}
            <SkillsSection />
            <GitHubContributionCalendar />
            <HighlightedProjects />
        </div>
    );
}
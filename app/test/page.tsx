    import { GitHubContributionCalendar } from "@/components/GitHubContributionCalendar";
import { HeroSection } from "@/components/Hero";
import { HighlightedProjects } from "@/components/HighligthedProject";

export default function Test() {
    return (
        <div className="min-h-screen w-full items-center justify-center">
            <HeroSection></HeroSection>
            <GitHubContributionCalendar></GitHubContributionCalendar>
            <HighlightedProjects />
        </div>
    );
}
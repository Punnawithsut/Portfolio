import { CardBlock } from "@/components/Card";
import { GitHubContributionCalendar } from "@/components/GitHubContributionCalendar";
import { HeroSection } from "@/components/Hero";
import { NavigationBar } from "@/components/Navbar";

export default function Test() {
    return (
        <div className="min-h-screen w-full items-center justify-center">
            <HeroSection></HeroSection>
            <GitHubContributionCalendar></GitHubContributionCalendar>
        </div>
    );
}
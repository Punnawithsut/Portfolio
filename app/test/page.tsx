import { CardBlock } from "@/components/Card";
import { NavigationBar } from "@/components/Navbar";

export default function Test() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <NavigationBar />
            <CardBlock
                imgUrl={null}
                cardTitle="loren"
                cardDescription="loren ipsum loren ipsum"
                badgeText="feature"
            />
        </div>
    );
}
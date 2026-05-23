import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Hello, I'm Pun!</h1>
      <Button>View My Projects</Button>
    </main>
  );
}
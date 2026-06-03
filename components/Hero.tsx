"use client";

import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <div className="relative w-full h-125 flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">
        <div className="space-y-2">
          <h2 className="text-xl font-medium text-primary">
            Hi, I'm Punnawith Sutisukon
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Full-Stack Developer <br />
            with a Growth Mindset.
          </h1>
        </div>

        <div className="mt-8 text-lg text-muted-foreground max-w-lg">
          <p>
            I build robust, end-to-end web experiences. <br />
            Always curious, constantly shipping, and ready to evolve.
          </p>
        </div>

        <div className="flex flex-row justify-between gap-3 mt-6">
          <Button size={"default"}>View My Projects</Button>
          <a
            href={`/files/Template_Resume.pdf`}
            download="Template_Resume.pdf"
          >
            <Button variant={"secondary"} size={"default"}>
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

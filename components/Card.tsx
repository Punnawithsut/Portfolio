"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CardBlockProps {
  imgUrl: string | null;
  cardTitle: string;
  cardDescription: string;
  badgeText: string;
  badgeVariant?:
    | "link"
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | null
    | undefined;
  linkHref?: string;
}

export function CardBlock({
  imgUrl,
  cardTitle,
  cardDescription,
  badgeText,
  badgeVariant = "secondary",
  linkHref,
}: CardBlockProps) {
  return (
    <Card className="w-full overflow-hidden">
      <div className="relative aspect-video w-full bg-muted flex items-center justify-center">
        {imgUrl ? (
          <>
            <Image src={imgUrl} alt={cardTitle} fill className="object-cover" />
          </>
        ) : (
          <span className="text-muted-foreground text-sm font-medium">
            No Image
          </span>
        )}
      </div>

      <CardHeader>
        <div className="flex flex-row justify-between items-center w-full">
          <CardTitle className="text-2xl font-bold">{cardTitle}</CardTitle>
          <div className="flex flex-col h-full items-center justify-center">
            <Badge
              className="justify-center items-center text-sm"
              variant={badgeVariant ? `${badgeVariant}` : "secondary"}
            >
              {badgeText}
            </Badge>
          </div>
        </div>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full cursor-pointer" variant={"secondary"} asChild>
          <Link className="flex justify-center items-center w-full" href={`${linkHref}`}>View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

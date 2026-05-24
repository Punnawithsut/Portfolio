"use client"

import Link from "next/link";
import { 
    NavigationMenu, 
    NavigationMenuContent, 
    NavigationMenuItem, 
    NavigationMenuLink, 
    NavigationMenuList, 
    NavigationMenuTrigger 
} from "./ui/navigation-menu";

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link 
            href={href}
            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground"
        >
          <div className="flex flex-col gap-1 text-sm transition hover:bg-grey">
            <div className="leading-none font-extrabold mb-1">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export function NavigationBar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full mt-4 px-6">
            <div className="flex items-center justify-between mx-auto max-w-5xl">
                <div className="text-xl font-bold">
                    Pun.dev
                </div>
                <NavigationMenu delayDuration={0}>
                    <NavigationMenuList className="gap-10">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-66">
                                    <ListItem href="/" title="Introduction">
                                        placeholder
                                    </ListItem>
                                    <ListItem href="/skills" title="My Skills">
                                        placeholder
                                    </ListItem>
                                    <ListItem href="/contribution" title="My Contribution">
                                        placeholder
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="my-projects">Projects</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="my-projects">Contacts</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}
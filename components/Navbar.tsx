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
            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground cursor-pointer"
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
            <div className="flex w-full items-center justify-between">  
                <div className="text-2xl font-bold ml-10">
                    Pun.dev
                </div>

                <div className="flex items-center gap-4 mr-10">
                    <NavigationMenu delayDuration={0}>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-0.75xl">Home</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-66 p-1">
                                        <ListItem href="/" title="Introduction">placeholder</ListItem>
                                        <ListItem href="/skills" title="My Skills">placeholder</ListItem>
                                        <ListItem href="/contribution" title="My Contribution">placeholder</ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    
                    <Link href="/my-projects" className="text-0.75xl font-medium transition-colors hover:bg-secondary px-4 py-2 rounded-lg">
                        Projects & Experiences
                    </Link>
                    <Link href="/contacts" className="text-0.75xl font-medium transition-colors hover:bg-secondary px-4 py-2 rounded-lg">
                        Contacts
                    </Link>
                </div>
            </div>
        </header>
    );
}
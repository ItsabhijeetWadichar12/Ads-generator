import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Settings2Icon, Videotape, WalletCards, Video, PlusCircle, Home } from 'lucide-react';
import { clsx } from 'clsx';

// Assuming you have these components from your UI library (like shadcn/ui)
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarGroup,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Define constants outside the component for better performance and readability
const SIDEBAR_MENU_ITEMS = [
    {
        title: 'Home',
        icon: Home,
        path: '/home'
    },
    {
        title: 'Dashboard',
        icon: LayoutDashboard,
        path: '/workspace'
    },
    {
        title: 'Create Ad',
        icon: Video,
        path: '/workspace/create-ad'
    },
    {
        title: 'My Videos',
        icon: Videotape,
        path: '/workspace/my-videos'
    },
    {
        title: 'Billing',
        icon: WalletCards,
        path: '/workspace/billing'
    },
];

const SETTINGS_MENU_ITEM = {
    title: 'Settings',
    icon: Settings2Icon,
    path: '/workspace/settings'
};

export function AppSidebar() {
    const pathname = usePathname();

    // Corrected for JavaScript: Removed the `: string` type annotation
    const isActive = (path) => {
        // The dashboard link is only active on the exact path.
        // Other links are active if the current path starts with their path.
        return path === '/workspace'
            ? pathname === path
            : pathname.startsWith(path);
    }

    return (
        <Sidebar className="flex flex-col h-screen border-r border-slate-700/30 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            </div>

            <SidebarHeader className="relative p-6">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 animate-gradient" />
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={40}
                            height={40}
                            className="relative z-10 p-2 backdrop-blur-sm bg-black/20"
                        />
                    </div>
                    <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        AI ADS
                    </span>
                </Link>
            </SidebarHeader>

            <Separator className="bg-white/[0.08]" />

            <SidebarContent className="flex-1 overflow-y-auto p-4 space-y-8 relative">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-70 blur group-hover:opacity-100 transition duration-500" />
                    <Button
                        asChild
                        size="lg"
                        className="relative w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 hover:opacity-90 backdrop-blur-sm"
                    >
                        <Link href="/workspace/create-ad" className="flex items-center justify-center gap-2">
                            <PlusCircle className="h-5 w-5" />
                            Create New Ad
                        </Link>
                    </Button>
                </div>

                <SidebarGroup>
                    <nav className="flex flex-col gap-2">
                        {SIDEBAR_MENU_ITEMS.map((menu) => (
                            <li key={menu.title} className="list-none">
                                <Link
                                    href={menu.path}
                                    className={clsx(
                                        "flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300",
                                        "hover:bg-white/[0.08] hover:backdrop-blur-sm",
                                        {
                                            "bg-white/[0.08] backdrop-blur-sm border border-white/[0.08] shadow-lg": isActive(menu.path),
                                            "text-slate-300 hover:text-white": !isActive(menu.path),
                                            "text-blue-400 font-medium": isActive(menu.path),
                                        }
                                    )}
                                >
                                    <menu.icon className={clsx(
                                        "h-5 w-5 transition-colors",
                                        isActive(menu.path) ? "text-blue-400" : "text-slate-400"
                                    )} />
                                    <span className="font-medium">{menu.title}</span>
                                </Link>
                            </li>
                        ))}
                    </nav>
                </SidebarGroup>
            </SidebarContent>

            <Separator className="bg-white/[0.08]" />

            <SidebarFooter className="p-4">
                <Link
                    href={SETTINGS_MENU_ITEM.path}
                    className={clsx(
                        "flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300",
                        "hover:bg-white/[0.08] hover:backdrop-blur-sm",
                        {
                            "bg-white/[0.08] backdrop-blur-sm border border-white/[0.08]": isActive(SETTINGS_MENU_ITEM.path),
                            "text-slate-300 hover:text-white": !isActive(SETTINGS_MENU_ITEM.path),
                            "text-blue-400 font-medium": isActive(SETTINGS_MENU_ITEM.path),
                        }
                    )}
                >
                    <SETTINGS_MENU_ITEM.icon className={clsx(
                        "h-5 w-5 transition-colors",
                        isActive(SETTINGS_MENU_ITEM.path) ? "text-blue-400" : "text-slate-400"
                    )} />
                    <span className="font-medium">{SETTINGS_MENU_ITEM.title}</span>
                </Link>
            </SidebarFooter>
        </Sidebar>
    );
}
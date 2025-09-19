"use client"
import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
    LayoutDashboard,
    Settings2Icon,
    Video,
    Videotape,
    WalletCards,
    PlusCircle,
    Home
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

// Define menu items as constants for better readability
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

function AppSidebar() {
    const pathname = usePathname();

    const isActive = (path) => {
        // Ensure the check is robust for nested paths
        if (path === '/workspace' && pathname !== '/workspace') {
            return false;
        }
        return pathname.startsWith(path);
    }

    return (
        <Sidebar className="bg-gradient-to-b from-purple-300 via-purple-400 to-purple-300 animate-gradient mr-2">
            <SidebarHeader className="p-4">
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/logo2.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className="object-cover rounded-lg"
                    />
                    <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-sm">
                        PromoBOT
                    </span>
                </Link>
            </SidebarHeader>

            <Separator className="bg-white/[0.1]" />

            <SidebarContent className="flex-1 overflow-y-auto p-4 space-y-8">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-60 blur group-hover:opacity-80 transition duration-300" />
                    <Button
                        asChild
                        size="lg"
                        className="relative w-full bg-gradient-to-r from-blue-500/90 to-purple-600/90 text-white border-0 hover:opacity-95 backdrop-blur-sm"
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
                                        "flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 group",
                                        "hover:bg-black/20 ", // Subtle hover for all items
                                        {
                                            "bg-slate-900/70 shadow-inner": isActive(menu.path), // Darker, inset background for active item
                                            "text-slate-300 hover:text-white": !isActive(menu.path), // Default text color
                                            "text-purple-300 font-semibold ": isActive(menu.path), // Active text color
                                        }
                                    )}
                                >
                                    <menu.icon className={clsx(
                                        "h-5 w-5 transition-colors",
                                        isActive(menu.path) ? "text-purple-300" : "text-slate-400 group-hover:text-slate-200" // Active icon color
                                    )} />
                                    <span className="font-medium">{menu.title}</span>
                                </Link>
                            </li>
                        ))}
                    </nav>
                </SidebarGroup>
            </SidebarContent>

            <Separator className="bg-white/[0.1]" />

            <SidebarFooter className="p-4">
                <Link
                    href={SETTINGS_MENU_ITEM.path}
                    className={clsx(
                        "flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 group",
                        "hover:bg-black/10",
                        {
                            "bg-slate-900/50 shadow-inner": isActive(SETTINGS_MENU_ITEM.path),
                            "text-slate-300 hover:text-white": !isActive(SETTINGS_MENU_ITEM.path),
                            "text-purple-300 font-semibold": isActive(SETTINGS_MENU_ITEM.path),
                        }
                    )}
                >
                    <div className="flex items-center justify-center h-8 w-8 bg-slate-800 rounded-full text-white font-bold text-sm">
                        N
                    </div>
                    <span className="font-medium">{SETTINGS_MENU_ITEM.title}</span>
                </Link>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar
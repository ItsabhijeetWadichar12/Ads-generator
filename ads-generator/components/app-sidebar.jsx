"use client"

import React from 'react'

import {
  Sidebar, 
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import Image from 'next/image'
import Link from 'next/link'
// import { Button } from  '@components/ui/button'
import { LayoutDashboard, Settings2Icon, Videotape, WalletCards, Video } from 'lucide-react'
import { useParams, usePathname, useRouter } from 'next/navigation';

const MenuOPtions = [
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
  {
    title: 'Settings',
    icon: Settings2Icon,
    path: '/workspace/settings'
  }
];

function AppSidebar() {
  const path = usePathname();
  const router = useRouter();
  const handleDashboardClick = (e) => {
    e.preventDefault();
    router.push('/workspace');
  };
  return (
    <Sidebar>
      <SidebarHeader className = " flex items-center my-5" />
      <hr />
  <Image src={'/logo.svg'} alt="logo" width={180} height={120} style={{ marginBottom: '1.5rem' }} />
      <SidebarContent>
        <SidebarGroup />
        <button style={{ background: '#0d1bb7ff', color: '#fff', borderRadius: '999px', padding: '0.75rem 1.5rem', border: 'none', fontWeight: 'bold', marginBottom: '1rem', cursor: 'pointer' }}>
          + Create New Ad Video
        </button>
        <SidebarGroup />
        <SidebarGroup >
            <SidebarGroupLabel>
                Application 
            </SidebarGroupLabel>
            <SidebarGroupContent >
<SidebarMenu>
                {MenuOPtions.map((menu, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', borderRadius: '0.75rem', marginBottom: '1rem', background: index === 1 ? '#e0e7ff' : '#f3f4f6', color: '#222', fontWeight: '500', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                      onClick={menu.title === 'Dashboard' ? handleDashboardClick : undefined}
                    >
                      <Link href={menu.path} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit', width: '100%' }}>
                        <menu.icon className="mr-2" size={28} style={{ color: index === 1 ? '#2563eb' : '#6366f1' }} />
                        <span style={{ fontSize: '1.1rem' }}>{menu.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
</SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
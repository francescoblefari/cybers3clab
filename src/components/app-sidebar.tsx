'use client'
import { ShieldCheck, LayoutDashboard, ChartNoAxesGantt } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/learning/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Software Engineer",
    url: "/learning/software-engineer",
    icon: ChartNoAxesGantt,
  },
  {
    title: "Software Security",
    url: "/learning/software-security",
    icon: ShieldCheck,
  }
]

interface SidebarProps {
  className: string;
}

export function AppSidebar({className}: SidebarProps) {
  return (
    <Sidebar className={className}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

'use client'
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Atom,
  Bot,
  Braces,
  Cpu,
  FileCode2,
  Layout,
  Database,
  Users, 
  Cloud, 
  GitBranch,
  Code,
  Layers,
  Lock
} from "lucide-react"

type NavItem = {
  title: string
  icon: LucideIcon
  badge?: string
  href?: string
}

function SidebarNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const Icon = item.icon
  const isActive = item.href ? pathname === item.href || pathname.startsWith(item.href + "/") : false
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={isActive}
        render={item.href ? <Link href={item.href} /> : undefined}
        tooltip={{ side: "left", children: item.title }}
        className="relative"
      >

        <Icon />
        <span>{item.title}</span>
        {item.badge && (
          <SidebarMenuBadge className="rounded-md bg-sidebar-primary/10 px-1.5 text-sidebar-accent-foreground">
            {item.badge}
          </SidebarMenuBadge>
        )}
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}



export const channelNav: NavItem[] = [
  { title: "جاوااسکریپت", icon: Braces, badge: "۱,۰۲۴", href: "/category/javascript" },
  { title: "پایتون", icon: FileCode2, badge: "۸۶۰", href: "/category/python" },
  { title: "هوش مصنوعی", icon: Bot, badge: "۹۴۲", href: "/category/ai" },
  { title: "ری‌اکت", icon: Atom, badge: "۳۱۱", href: "/category/react" },
  { title: "راست", icon: Cpu, badge: "۱۲۰", href: "/category/rust" },
  { title: "فرانت‌اند", icon: Layout, badge: "۴۵۶", href: "/category/frontend" },
  { title: "پی‌اچ‌پی", icon: Code, badge: "۳۲۹", href: "/category/php" },
  { title: "لاراول", icon: Layers, badge: "۲۸۴", href: "/category/laravel" },
  { title: "پایگاه داده", icon: Database, badge: "۱۹۷", href: "/category/database" },
  { title: "امنیت", icon: Lock, badge: "۱۵۶", href: "/category/security" },
  { title: "مهارت‌های نرم", icon: Users, badge: "۲۳۴", href: "/category/soft-skills" },
  { title: "دواپس", icon: Cloud, badge: "۱۸۹", href: "/category/devops" },
  { title: "زیرساخت", icon: GitBranch, badge: "۱۴۷", href: "/category/infrastructure" },
]

export default function SidebarItem() {
  const pathname = usePathname()

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>دسته بندی</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {channelNav.map((item) => (
              <SidebarNavItem key={item.title} item={item} pathname={pathname} />
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}
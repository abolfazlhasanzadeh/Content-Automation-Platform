import type { LucideIcon } from "lucide-react"
import Link from "next/link"
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
  History,
  Inbox,
  LayoutDashboard,
  Newspaper,
  Server,
} from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  title: string
  icon: LucideIcon
  badge?: string
  active?: boolean
  href?: string
}

function SidebarNavItem({ item }: { item: NavItem }) {
  const Icon = item.icon
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={item.active}
        render={item.href ? <Link href={item.href} /> : undefined}
        tooltip={{ side: "left", children: item.title }}
        className="relative"
      >
        <span
          aria-hidden
          className={cn(
            "absolute top-1/2 start-0 size-1.5 -translate-y-1/2 bg-sidebar-primary opacity-0 transition-opacity duration-200 group-data-[collapsible=icon]:hidden",
            item.active && "opacity-100"
          )}
        />
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

const mainNav: NavItem[] = [
  { title: "داشبورد", icon: LayoutDashboard },
  { title: "اخبار منتخب", icon: Newspaper, active: true },
  { title: "پیش‌نویس‌ها", icon: Inbox, badge: "۱۲" },
  { title: "تاریخچه انتشار", icon: History },
]

const channelNav: NavItem[] = [
  { title: "جاوااسکریپت", icon: Braces, badge: "۱,۰۲۴", href: "/category/javascript" },
  { title: "پایتون", icon: FileCode2, badge: "۸۶۰", href: "/category/python" },
  { title: "هوش مصنوعی", icon: Bot, badge: "۹۴۲", href: "/category/ai" },
  { title: "ری‌اکت", icon: Atom, badge: "۳۱۱", href: "/category/react" },
  { title: "راست", icon: Cpu, badge: "۱۲۰", href: "/category/rust" },
  { title: "نود.جی‌اس", icon: Server, badge: "۲۱۸", href: "/category/node" },
]

export default function SidebarItem() {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>پیشخوان</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {mainNav.map((item) => (
              <SidebarNavItem key={item.title} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>دسته بندی</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {channelNav.map((item) => (
              <SidebarNavItem key={item.title} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}
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
import { fallbackIcon, iconBySlug } from "@/lib/category-icons"
import { getCategoryCounts } from "@/lib/articles"
import { cn } from "@/lib/utils"

type NavItem = {
  slug: string
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

type ChannelBaseItem = Omit<NavItem, "icon" | "badge">

const channelNav: ChannelBaseItem[] = [
  { slug: "javascript", title: "جاوااسکریپت", href: "/category/javascript" },
  { slug: "python", title: "پایتون", href: "/category/python" },
  { slug: "ai", title: "هوش مصنوعی", href: "/category/ai" },
  { slug: "react", title: "ری‌اکت", href: "/category/react" },
  { slug: "rust", title: "راست", href: "/category/rust" },
  { slug: "frontend", title: "فرانت‌اند", href: "/category/frontend" },
  { slug: "php", title: "پی‌اچ‌پی", href: "/category/php" },
  { slug: "laravel", title: "لاراول", href: "/category/laravel" },
  { slug: "database", title: "پایگاه داده", href: "/category/database" },
  { slug: "security", title: "امنیت", href: "/category/security" },
  { slug: "soft-skills", title: "مهارت‌های نرم", href: "/category/soft-skills" },
  { slug: "devops", title: "دواپس", href: "/category/devops" },
  { slug: "infrastructure", title: "زیرساخت", href: "/category/infrastructure" },
]

export default async function SidebarItem() {
  const counts = await getCategoryCounts()
  const countBySlug = new Map(counts.map((c) => [c.categorySlug, c.count]))

  const items = channelNav.map((item) => ({
    ...item,
    icon: iconBySlug[item.slug] ?? fallbackIcon,
    badge: countBySlug.has(item.slug)
      ? countBySlug.get(item.slug)!.toLocaleString("fa-IR")
      : undefined,
  }))

  return (
    <SidebarGroup>
      <SidebarGroupLabel>دسته بندی</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarNavItem key={item.slug} item={item} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

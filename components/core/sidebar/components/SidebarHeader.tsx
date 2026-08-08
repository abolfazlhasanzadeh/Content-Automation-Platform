"use client"

import { SidebarHeader as _SidebarHeader, useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ChevronsLeft, ChevronsRight } from "lucide-react"

export default function SidebarHeader() {
  const { state, toggleSidebar } = useSidebar()
  const collapsed = state === "collapsed"

  return (
    <_SidebarHeader className="p-3 group-data-[collapsible=icon]:justify-center">
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2.5 group-data-[collapsible=icon]:hidden">
          <span aria-hidden className="size-2.5 shrink-0 bg-sidebar-primary" />
          <div className="min-w-0">
            <p className="truncate text-sm leading-none font-extrabold">اتوماسیون محتوا</p>
            <p className="mt-1.5 truncate text-[11px] text-sidebar-foreground/60">
              اخبار برنامه‌نویسی · خودکار
            </p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon-sm"
          onClick={toggleSidebar}
          aria-label={collapsed ? "باز کردن نوار کناری" : "بستن نوار کناری"}
          aria-expanded={!collapsed}
          title={collapsed ? "باز کردن نوار کناری" : "بستن نوار کناری"}
          className="text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          {collapsed ? <ChevronsLeft /> : <ChevronsRight />}
        </Button>
      </div>
    </_SidebarHeader>
  )
}

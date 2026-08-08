import {
  SidebarFooter as _SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { User2 } from "lucide-react"
import SettingsMenu from "@/components/core/header/SettingsMenu"

export default function SidebarFooter() {
  return (
    <_SidebarFooter className="border-t border-sidebar-border p-2">
      <SidebarMenu>
        <SidebarMenuItem>
          <SettingsMenu
            placement="top"
            trigger={
              <div className="flex w-full items-center gap-2 rounded-xl px-3 py-2 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-sidebar-accent text-sidebar-accent-foreground">
                  <User2 className="size-4" />
                </span>
                <div className="flex min-w-0 flex-1 flex-col items-start text-start group-data-[collapsible=icon]:hidden">
                  <span className="text-sm font-medium">مهمان</span>
                  <span className="truncate text-xs text-sidebar-foreground/60">
                    وارد نشده
                  </span>
                </div>
              </div>
            }
          />
        </SidebarMenuItem>
      </SidebarMenu>
    </_SidebarFooter>
  )
}
import {
  Sidebar,
  SidebarContent,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import SidebarHeader from "./components/SidebarHeader"
import SidebarFooter from "./components/SidebarFooter"
import SidebarItem from "./components/SidebarItem"

export function AppSidebar() {
  return (
    <Sidebar dir="rtl" side="right" collapsible="icon">
      <SidebarHeader />
      <SidebarSeparator />
      <SidebarContent>
        <SidebarItem />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter />
    </Sidebar>
  )
}
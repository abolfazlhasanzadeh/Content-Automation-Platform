import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import SidebarHeader from "./components/SidebarHeader"
import SidebarFooter from "./components/SidebarFooter"
import SidebarItem from "./components/SidebarItem"

export function AppSidebar() {
  return (
    <Sidebar dir="rtl" side="right">
      <SidebarHeader />
      <SidebarContent>
        <SidebarItem />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
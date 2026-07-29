import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import {  Projector } from 'lucide-react'

export default function SidebarItem() {
  return (
<SidebarMenu>
    <SidebarMenuItem >
      <SidebarMenuButton >
          <div className="flex justify-between w-full">
            <div className="flex gap-2">
            <Projector />
          <span>جاوااسکریپت</span>
          </div>

          <span>1,000</span>
          </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
</SidebarMenu>
  )
}

import { SidebarFooter as _SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { User2 } from 'lucide-react'

export default function SidebarFooter() {
  return (
    
  <_SidebarFooter>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <User2 /> یوزرنیم
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </_SidebarFooter>
  )
}

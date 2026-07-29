import { SidebarHeader as _SidebarHeader, SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar'
import React from 'react'

export default function SidebarHeader() {
  return (
      <_SidebarHeader >
    <SidebarMenu>
      <SidebarMenuItem>
           <h2 className='rtl'>
             اخبار برنامه نویسی 
           </h2>
      </SidebarMenuItem>
    </SidebarMenu>
  </_SidebarHeader>
  )
}

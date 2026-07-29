import { AppSidebar } from "@/components/core/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className="">
      <SidebarProvider>

        <AppSidebar />

      </SidebarProvider>
    </div>
  );
}

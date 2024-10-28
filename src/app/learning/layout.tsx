import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"


export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="flex flex-row">
        <SidebarProvider>
            <AppSidebar className="mt-20 rounded-md"/> 
        </SidebarProvider>
        <div className="text-white">
            {children}
        </div>
        
      </section>
    )
  }
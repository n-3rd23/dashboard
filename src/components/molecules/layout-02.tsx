import { AppSidebar } from "@/components/molecules/sidebar-02/sidebar-02";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import TopNav from "./sidebar-02/top-nav-02";

interface LayoutProps {
  children: ReactNode;
}

export default function Page({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNav />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

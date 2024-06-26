import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { ClerkProvider } from "@clerk/nextjs";

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    //<ClerkProvider>
      <div className="h-full">
        <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
          <Navbar />
        </div>
        <div className="fixed inset-y-0 z-50 flex-col hidden w-56 h-full md:flex">
          <Sidebar />
        </div>
        <main className="md:pl-56 pt-[80px] h-full">
          {children}
        </main>
      </div>
    //</ClerkProvider>
   );
}
 
export default DashboardLayout;
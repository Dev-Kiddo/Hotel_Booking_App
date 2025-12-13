import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SHeader from "../components/SHeader";

function Layout() {
  return (
    <main className="flex flex-col mx-auto justify-between min-h-screen">
      <div className="bg-primary py-16 relative">
        <SHeader />
      </div>

      <div className="py-5">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}

export default Layout;

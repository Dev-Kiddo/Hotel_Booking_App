import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Layout() {
  return (
    <main className="flex flex-col mx-auto justify-between min-h-screen">
      <Hero />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;

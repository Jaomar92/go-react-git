import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <hr />
      <Outlet />
      <Footer />
    </>
  ),
});

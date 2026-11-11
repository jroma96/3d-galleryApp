import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text-primary">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 md:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;

import { Outlet } from "react-router";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text-primary">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 md:px-8">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

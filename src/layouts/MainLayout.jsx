import { Outlet } from "react-router-dom";
import { Navbar, Footer, BackgroundDecor } from "../components";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-slate-900">
      <BackgroundDecor />

      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

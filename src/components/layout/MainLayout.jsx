import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "../ui/WhatsAppFloat";

export function MainLayout() {
  const { pathname } = useLocation();

  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <div key={pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
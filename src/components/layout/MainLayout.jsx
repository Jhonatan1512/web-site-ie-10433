import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "../ui/WhatsAppFloat";

export function MainLayout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
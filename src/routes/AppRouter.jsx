import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { FacultyPage } from "../pages/FacultyPage";
import { GalleryPage } from "../pages/GalleryPage";
import { FaqPage } from "../pages/FaqPage";
import { ContactPage } from "../pages/ContactPage";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/plana-docente" element={<FacultyPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/preguntas" element={<FaqPage />} />
          <Route path="/contactos" element={<ContactPage />} />
          {/* Cualquier ruta desconocida redirige a la portada */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
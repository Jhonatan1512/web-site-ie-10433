import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { SchoolProfilePage } from "../pages/SchoolProfilePage";
import { AboutPage } from "../pages/AboutPage";
import { MissionVisionPage } from "../pages/MissionVisionPage";
import { FacultyPage } from "../pages/FacultyPage";
import { GalleryPage } from "../pages/GalleryPage";
import { FaqPage } from "../pages/FaqPage";
import { ContactPage } from "../pages/ContactPage";
import { EnrollmentPage } from "../pages/EnrollmentPage";

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/nuestra-escuela" element={<SchoolProfilePage />} />
          <Route path="/quienes-somos" element={<AboutPage />} />
          <Route path="/mision-vision" element={<MissionVisionPage />} />
          <Route path="/plana-docente" element={<FacultyPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/preguntas" element={<FaqPage />} />
          <Route path="/contactos" element={<ContactPage />} />
          <Route path="/matriculas" element={<EnrollmentPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
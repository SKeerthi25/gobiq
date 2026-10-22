import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CookieBanner } from "../components/CookieBanner";
import { Preloader } from "../components/Preloader";

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
};

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      <Preloader />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

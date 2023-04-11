import React from "react";
import NavbarPage from "./pages/Navbar";
import FooterSec from "./pages/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <NavbarPage />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterSec />
      </footer>
    </div>
  );
}

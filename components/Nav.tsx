"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label="Navegación principal">
        <a href="#inicio" onClick={() => setOpen(false)}><Logo compact /></a>
        <button className="nav__toggle" aria-label="Abrir menú" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        <div className={`nav__links ${open ? "is-open" : ""}`}>
          <a href="#experiencia" onClick={() => setOpen(false)}>La experiencia</a>
          <a href="#cabana" onClick={() => setOpen(false)}>La cabaña</a>
          <a href="#galeria" onClick={() => setOpen(false)}>Galería</a>
          <a className="button button--small" href="https://wa.me/59800000000" target="_blank" rel="noreferrer">Consultar fechas</a>
        </div>
      </nav>
    </header>
  );
}

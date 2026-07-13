import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sol del Catedral — Cabañas de campo",
  description: "Una pausa entre sierras, campo abierto y atardeceres largos."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

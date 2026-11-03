import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CUPTEA | Esteh Tian Group",
  description: "CUPTEA by Esteh Tian Group — kesegaran sederhana, pengalaman masa depan. Jelajahi menu, promo, dan peluang kemitraan.",
  openGraph: {
    title: "CUPTEA | Esteh Tian Group",
    description: "A fresh taste. A future-forward experience.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}

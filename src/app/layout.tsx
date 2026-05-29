import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LS9 - Built For Progression",
  description: "LS9: Heavyweight essentials engineered for movement, discipline, and modern identity.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

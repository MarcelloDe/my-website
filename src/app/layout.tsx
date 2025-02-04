import type { Metadata } from "next";

import "./styles/globals.css"; // Import the global CSS file
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "My Website",
  description: "A personal website for projects and notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

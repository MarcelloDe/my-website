import type { Metadata } from "next";

import "./styles/globals.css"; // Import the global CSS file
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Marcello De Filippis | Software Developer",
  description: "Portfolio of Marcello De Filippis - Software Developer with experience in front-end and back-end development, including Javascript, .NET, Java, PHP, and SQL. Former Data Analyst at Geotab, Loblaw, and McMaster University.",
  keywords: ["Marcello De Filippis", "Software Developer", "Data Analyst", "Hamilton Ontario", "Web Development", "Software Engineering"],
  authors: [{ name: "Marcello De Filippis" }],
  creator: "Marcello De Filippis",
  openGraph: {
    title: "Marcello De Filippis | Software Developer",
    description: "Software Developer with experience in front-end and back-end development, including Javascript, .NET, Java, PHP, and SQL.",
    url: "https://marcellode.github.io/my-website/",
    siteName: "Marcello De Filippis Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcello De Filippis | Software Developer",
    description: "Software Developer with experience in front-end and back-end development.",
  },
  robots: {
    index: true,
    follow: true,
  },
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

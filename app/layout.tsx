import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduSphere - Learning Management System",
  description: "Build skills with expert-led courses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of unstyled content */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `
        }} />
      </head>
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-200`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
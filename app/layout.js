import "./globals.css";
import Navbar from "../components/NavBar";
import Providers from "./providers";

export const metadata = {
  title: "Anvay Paralikar | Software Engineer",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative  min-h-screen bg-background text-foreground antialiased">
        <Providers>
          {/* theme-aware background */}
          <div
          className="
            pointer-events-none fixed inset-0 -z-10
            bg-background
            dark:bg-gradient-to-b
            dark:from-[#020617] dark:via-[#020617] dark:to-black
          " />

          <Navbar />

          <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

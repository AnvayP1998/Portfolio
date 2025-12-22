import "./globals.css";
import Navbar from "../components/NavBar";

export const metadata = {
  title: "Anvay Paralikar | Software Engineer",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#020617] via-[#020617] to-black" />

        <Navbar />

        <main className="mx-auto max-w-5xl px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}

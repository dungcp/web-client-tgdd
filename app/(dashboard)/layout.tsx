"use client";

import Footer from "@/components/ui/footer/Footer";
import NavBar from "@/components/ui/navbar/NavBar";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (typeof window !== "undefined") {
    window.onload = () => {
      document.getElementById("holderStyle")!.remove();
    };
  }
  return (
    <div className="h-screen">
      <style
        id="holderStyle"
        dangerouslySetInnerHTML={{
          __html: `
                    *, *::before, *::after {
                        transition: none!important;
                    }
                    `,
        }}
      />
      <div style={{ visibility: !mounted ? "hidden" : "visible" }}>
        <NavBar />
        <div className="bg-slate-100 min-h-screen">
          <main className="w-[1200px] h-full m-auto">{children}</main>
        </div>
        <div className="bg-slate-100 h-[35px]"></div>
        <Footer />
      </div>
    </div>
  );
}

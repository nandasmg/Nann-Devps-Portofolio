"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import SkillsSection from "@/sections/SkillsSection";

export default function Home() {
  const [active, setActive] = useState("home");

  
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    window.scrollTo(0, 0);
  }, []);

  
  useEffect(() => {
    function handleScroll() {
      const posisiScroll = window.scrollY + 150;
      const daftarSection = ["home", "about", "projects", "skills"];

      for (let i = 0; i < daftarSection.length; i++) {
        const idSection = daftarSection[i];
        const element = document.getElementById(idSection);

        if (!element) continue;

        const batasAtas = element.offsetTop;
        const batasBawah = batasAtas + element.offsetHeight;

        if (posisiScroll >= batasAtas && posisiScroll < batasBawah) {
          setActive(idSection);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header active={active} />

      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
      </main>
    </>
  );
}
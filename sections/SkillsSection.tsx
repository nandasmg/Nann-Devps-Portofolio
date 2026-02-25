"use client";

import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";


const imageLogos1 = [
  { src: "/assets/logos/html.png", alt: "html" },
  { src: "/assets/logos/css.png", alt: "css" },
  { src: "/assets/logos/mysql.png", alt: "mysql" },
  { src: "/assets/logos/python.png", alt: "python" },
  { src: "/assets/logos/arduino.png", alt: "arduino" },
  { src: "/assets/logos/visualstudio.png", alt: "visual studio" },
];

const imageLogos2 = [
  { src: "/assets/logos/canva.png", alt: "canva" },
  { src: "/assets/logos/figma.jpg", alt: "figma" },
  { src: "/assets/logos/msword.png", alt: "msword" },
];



export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        min-h-screen
        bg-grey-50
        text-white
        flex items-center justify-center
      "
    >
      <div className="max-w-5xl w-full px-6 text-center space-y-6">
        
        {/* Title */}
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "red",
            transform: "translateY(-100px)",
          }}
        >
          Skills
        </h2>

        {/* Subtitle */}
        <h3
          style={{
            color: "#323232",
            fontSize: "1.5rem",
            transform: "translateY(-100px)",
            fontFamily: "calibri",
          }}
        >
          Technologies I Work With
        </h3>

        {/* Logo Loop Area */}
        <div
          style={{
            height: "200px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            transform: "translateY(-40px)",
          }}
        >
          <div className="flex flex-col gap-10">
            
            <LogoLoop
              logos={imageLogos1}
              speed={100}
              direction="left"
              logoHeight={65}
              gap={75}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff00"
              ariaLabel="Technology partners"
            />

            <LogoLoop
              logos={imageLogos2}
              speed={100}
              direction="right"
              logoHeight={65}
              gap={75}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff00"
              ariaLabel="Technology partners"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
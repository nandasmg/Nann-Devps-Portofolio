"use client";

import {
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoTiktok,
} from "react-icons/bi";

import Lanyard from "@/components/lanyard";
import BlurText from "@/components/BlurText";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        bg-gray-50
        flex items-start md:items-center
        justify-center
        pt-16 md:pt-0
      "
    >
      <div
        className="
          max-w-6xl w-full
          px-6
          grid md:grid-cols-2
          gap-10
          items-center
        "
      >
       
        <div
          className="
            flex justify-center
            md:order-1
            md:-translate-x-25
            transition
          "
        >
          <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
        </div>

        
        <div
          className="
            space-y-6
            text-center md:text-left
            md:order-2
            md:translate-x-14
            -translate-y-14 md:translate-y-0
            transition
          "
        >
          <h2 className="text-3xl font-bold text-red-600">
            About Me
          </h2>

          <BlurText
            text="Saya adalah mahasiswa Informatika yang berfokus pada
            pengembangan perangkat lunak dan teknologi digital. Tertarik
            pada sistem, struktur data, dan arsitektur aplikasi modern."
            delay={200}
            animateBy="words"
            direction="top"
            className="text-gray-700 text-lg width[200px] md:width[400px] ml-3 md:ml-[-3]"
          />

         
          <div className="flex justify-center md:justify-start gap-5 pt-4">
            <a
              href="https://www.facebook.com/share/1AesykPgZc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoFacebookSquare className="text-4xl text-[#1877F2] hover:scale-110 transition" />
            </a>

            <a
              href="https://www.tiktok.com/@nandasangmusisi"
              rel="noopener noreferrer"
            >
              <BiLogoTiktok className="text-4xl text-black hover:scale-110 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/ananda-putra-simangunsong-250105307?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedinSquare className="text-4xl text-[#0A66C2] hover:scale-110 transition" />
            </a>

            <a
              href="https://www.instagram.com/hephaestus0806?igsh=MXM5NTdscnFkYTczYg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoInstagram className="text-4xl text-[#E4405F] hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import RotatingText from "@/components/RotatingText";
import SplitText from "@/components/SplitText";
import TrueFocus from "@/components/TrueFocus";
import BlurText from "@/components/BlurText";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex items-center
        bg-white
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl mx-auto w-full
          px-6 py-20
          grid md:grid-cols-2
          gap-12
          items-center
        "
      >
        
        <div className="space-y-6">
          
         
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-medium text-black">
              I'm Ready For Job as
            </h1>

            <div className="overflow-hidden h-[30px] flex items-center">
              <RotatingText
                texts={[
                  "Web Developer",
                  "Machine Learning",
                  "Arduino",
                  "UI Design",
                ]}
                mainClassName="px-4 py-1 bg-[#FF0000] text-white rounded-md font-semibold"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                staggerDuration={0.025}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>

         
          <SplitText
            text="I'm Ananda Putra"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF0000]"
            delay={40}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
          />

         
          <div style={{ transform: "translateX(-50px)" }}>
            <TrueFocus
              sentence="Software Engineer"
              blurAmount={5}
              borderColor="#FF0000"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>

         
          <BlurText
            text="Junior Software Engineer dengan pengalaman dalam pengembangan web, Python, dan machine learning. Fokus pada solusi yang efisien dan scalable."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-gray-600 text-lg max-w-xl"
          />

          
          <div className="flex gap-4 pt-4">
            <button
              className="
                px-6 py-3
                bg-[#FF0000]
                text-white
                font-semibold
                rounded-md
                hover:bg-[#cc0000]
                transition duration-300
                shadow-md
              "
            >
              <a
                href="/assets/MyCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>

            <button
              className="
                px-6 py-3
                border border-gray-400
                text-gray-700
                font-semibold
                rounded-md
                hover:bg-gray-100
                transition duration-300
              "
            >
             <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl">
              Contact Me
            </a>
            </button>
          </div>
        </div>

       
        <div className="hidden md:flex justify-center items-center relative">
          <div
            className="
              w-100 h-100
              rounded-full
              bg-gradient-to-tr
              from-[#FF0000] to-[#3a8c6e]
              opacity-20
              blur-3xl
              translate-x-15 translate-y-10
              absolute
            "
          />

          <img
            src="/assets/images/Me.png"
            alt="Me"
            className="w-[500] h-[500] object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
// import certificate from "@/assets/images/resume.pdf";
import {
  Github,
  LucideLinkedin,
  MailIcon,
  ChevronDown,
} from "lucide-react";

// Grid Background - Replacing the HexagonBackground
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#04081A]/50 to-[#04081A] h-full"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const [visitorCount, setVisitorCount] = useState(null);
  let hasFetched = false;
  const words = [
    "Frontend Developer & UI/UX Enthusiast",
    "Angular, React & Vue.js Developer",
    "Next.js Explorer",
    "Modern Web Technologies Lover",
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/burakbektass",
      label: "GitHub"
    },
    {
      icon: <LucideLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/burak-bektas-790539195/",
      label: "LinkedIn"
    },
    {
      icon: <MailIcon className="w-6 h-6" />,
      href: "mailto:burak.bektas.work@gmail.com",
      label: "Email"
    }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [code] = useState(`
  const profile = {
    name: 'Burak Bektaş',
    title: 'Frontend Developer | UI/UX Enthusiast | Creative Coder',
    skills: [
        'Angular', 'React', 'Vue.js', 'Next.js',
        'TypeScript', 'JavaScript', 'Tailwind CSS', 'Figma',
        'Git', 'REST APIs', 'Responsive Design', 'UI/UX'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    totalExperience: 2.5,
    companiesWorkedFor:['Huawei', 'Netcad','World17 Group'],
    numberOfProjectInvolved: 10+, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.numberOfProject >= 10 &&
            this.totalExperience >= 2.5
        );
    }
  };
  `);

  useEffect(() => {
    Prism.highlightAll();

    // Add CSS animation for grid and dots
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Apply extra padding for 1366x768 resolution
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");
    const hasVisited = localStorage.getItem("hasVisitedCounter");

    if (storedCount) {
      setVisitorCount(parseInt(storedCount));
    }

    async function fetchVisitorCount() {
      if (hasVisited || hasFetched) return;
      hasFetched = true;

      const API_URL =
        import.meta.env.MODE === "development"
          ? "/api/counter"
          : "https://juai68gp12.execute-api.us-east-1.amazonaws.com/prod/counter";

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });

        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.count);
          localStorage.setItem("visitorCount", data.count); // Sayacı sakla
          localStorage.setItem("hasVisitedCounter", "true"); // Tekrar arttırmayı engelle
        } else {
          console.error("Visitor count API failed.");
        }
      } catch (err) {
        console.error("Error fetching visitor count:", err);
      }
    }

    fetchVisitorCount();

    const faviconLink = document.querySelector("link[rel*='icon']");
    if (faviconLink) {
      faviconLink.href = "/path/to/empty/favicon.ico";
    }
  }, []);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <section
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <div className="absolute inset-0"></div>

          {/* Choose one of these background options */}
          <GridBackground />

          {/* Or keep the original backgrounds if you prefer */}
          {/* <HexagonBackground /> */}
          {/* <AnimatedGrid /> */}
          {/* <DotBackground /> */}

          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Main content container */}
          <div
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-12 md:pt-28 xl:pt-28 mt-10 md:mt-0"
            style={{
              paddingTop:
                window.innerWidth >= 1360 &&
                window.innerWidth <= 1370 &&
                window.innerHeight >= 760 &&
                window.innerHeight <= 775
                  ? "12rem"
                  : "",
            }}
          >
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
              {/* Decorative blurs */}
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

              {/* Welcome badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-12 sm:mb-16 animate__animated animate__fadeInDown animate__delay-1s -mt-20">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-xs sm:text-sm font-medium">
                  Crafting Digital Experiences ✨
                </span>
              </div>

              {/* Name section */}
              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <SparklesText
                    text={`Hello, Visitor ${visitorCount ?? "..."}`}
                  />

                  <span className="relative inline-block">
                    I&apos;m
                    <span className=" gradient-text "> Burak Bektaş</span>
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              </div>

              {/* Role badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
                <span>
                  <FlipWords
                    className={"text-lg sm:text-xl text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <div className="relative mb-8 sm:mb-12 max-w-xl">
                <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                  Frontend Focused ✨ | Angular & React Developer ✨ | Creating
                  Beautiful Web Experiences
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
                {/* View Projects Button */}
                <a
                  // href={certificate}
                  target="_blank"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      <span>Get Resume</span>
                      <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                    </span>
                  </span>
                </a>
                <div className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]">
                  <div className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <div className="relative flex items-center justify-center gap-6 text-white font-medium ">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-colors duration-300"
                          aria-label={link.label}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="hidden lg:block absolute left-[5.5rem] top-[3.3rem] animate-float-slow">
                <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                  <i className="fas fa-wand-magic-sparkles"></i>
                  &nbsp;&nbsp;Pixel Perfectionist
                </div>
              </div>
              <div className="hidden lg:block absolute right-6 top-16 animate-float">
                <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                  <i className="fas fa-code"></i>&nbsp;&nbsp;Modern Web Dev
                </div>
              </div>
              <div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
                <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                  <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Creative Coder
                </div>
              </div>
              <div className="hidden lg:block absolute top-[19rem] left-[-20%] transform -translate-x-1/2 animate-float">
                <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                  <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;Tech
                  Explorer
                </div>
              </div>
            </div>

            {/* Right column - Code window */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code"></i>
                      developer.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator - Artık section'ın içinde, kod bloğunun altında */}
        <div className="flex justify-center mt-0 flex-col items-center gap-2">
          <button 
            onClick={scrollToAbout}
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
          >
            <i className="fas fa-mouse text-blue-400"></i>
            <span className="text-sm">About me</span>
            <ChevronDown className="w-4 h-4 text-blue-400 animate-bounce-slow hover:scale-110 transition-transform duration-300" />
          </button>
          <button 
            onClick={scrollToAbout}
            className="text-blue-400 text-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <PortfolioPage />
      </main>
    </>
  );
}

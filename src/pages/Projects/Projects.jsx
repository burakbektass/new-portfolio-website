import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";


const projects = [
  {
    title: "BudgetFlow - Personal Finance Tracker",
    description:
      "Comprehensive personal finance application built with Next.js 14, featuring multi-currency support, interactive data visualization, and category-based budgeting. Includes dark/light theme, multi-language support (EN/TR), and responsive design for optimal user experience.",
    src1: "", // You will add the image later
    src2: "", // You will add the image later
    color: "#e57373",
    githubLink: "https://github.com/burakbektass/expense-tracker",
    liveLink: "https://expense-tracker-phi-amber.vercel.app/dashboard",
    tags: ["Next.js 14", "TypeScript", "TailwindCSS", "Recharts", "Context API"],
  },
  {
    title: "Clickable Covid-19-statistic Map",
    description:
      "Interactive world map visualization showcasing real-time COVID-19 statistics with detailed country-specific data, built with modern web technologies for optimal performance and user experience.",
    src1: "", // You will add the image later
    src2: "", // You will add the image later
    color: "#e57373",
    githubLink: "https://github.com/burakbektass/covid-19-statistic",
    liveLink: "https://covid-19-statistic-aofrrq47g-burakbektass-projects.vercel.app/",
    tags: ["React", "TypeScript", "REST API"],
  },
  {
    title: "Modern Weather App",
    description:
      "A sleek and responsive weather application featuring real-time weather data, hourly forecasts, and dynamic UI that adapts to current weather conditions. Built with Next.js 14 and includes features like temperature unit conversion, wind speed units, and smart error handling.",
    src1: "", // You will add the image later
    src2: "", // You will add the image later
    color: "#e57373",
    githubLink: "https://github.com/burakbektass/weather-app",
    liveLink: "https://weather-app-murex-omega-71.vercel.app/",
    tags: ["Next.js 14", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS"],
  },
  {
    title: "PawTime – Veterinary Appointment System",
    description:
      "Modern veterinary appointment scheduling system built with React and Tailwind CSS, featuring responsive design, easy appointment booking, and medical history tracking. A user-friendly interface for pet owners to manage their veterinary visits.",
    src1: "", // You will add the image later
    src2: "", // You will add the image later
    color: "#e57373",
    githubLink: "https://github.com/burakbektass/PawTime",
    liveLink: "https://paw-time.vercel.app/",
    tags: ["React", "Tailwind CSS", "React Icons"],
  },
  {
    title: "React Budget App",
    description:
      "Personal finance tracker with expense categorization, budget planning, and visual spending analytics, built using React Router for seamless navigation.",
    src1: "", // You will add the image later
    src2: "", // You will add the image later
    color: "#e57373",
    githubLink: "https://github.com/burakbektass/Budget-application-with-React",
    liveLink: "https://budget-application-with-react.vercel.app/",
    tags: ["React", "React Router", "SASS"],
  },
  {
    title: "Three-card Monte game with VueJs",
    description:
      "Interactive card game built with Vue.js, featuring smooth animations, score tracking, and multiple difficulty levels. A modern take on the classic Three-card Monte game.",
    src1: "", // You will add the image later
    src2: "", // You will add the image later
    color: "#e57373",
    githubLink: "https://github.com/burakbektass/poker",
    liveLink: "https://poker-three-psi.vercel.app/",
    tags: ["Vue.js", "JavaScript", "CSS"],
  },
  {
    title: "React Movie App",
    description:
      "Feature-rich movie discovery platform integrating with TMDB API, offering advanced search, filtering, and personalized watchlists with responsive design and TypeScript type safety.",
    src1: "", // You will add the image later
    src2: "", // You will add the image later
    color: "#e57373",
    githubLink: "https://github.com/burakbektass/Movie-react-app",
    liveLink: "", // Add your live link if available
    tags: ["React", "TypeScript", "SCSS"],
  },
  {
    title: "Company Valuation Template",
    description:
      "Comprehensive financial analysis tool that calculates company valuations using multiple methods including DCF, Residual Income, and Enterprise Value, featuring interactive charts and detailed reporting.",
    src1: "", // You will add the image later
    src2: "", // You will add the image later
    color: "#e57373",
    githubLink: "https://github.com/burakbektass/Company-Valuation-Template-Project",
    liveLink: "", // Add your live link if available
    tags: ["React", "Node.js", "Financial APIs", "Chart.js"],
  },
  {
    title: "Diabetes Prediction",
    description:
      "Machine learning application that predicts diabetes risk using demographic and health metrics, achieving 85% accuracy through advanced data analysis and feature engineering techniques.",
    src1: "", // You will add the image later
    src2: "", // You will add the image later
    color: "#e57373",
    githubLink: "https://github.com/burakbektass/Diabetes-Prediction-Data-Science-Project-Project",
    liveLink: "", // No live link
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                src1={project.src1}
                src2={project.src2}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                tags={project.tags}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  src1,
  src2,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  tags = [],
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-10  project-container  "
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 50}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[75%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-blue-950 border-2 ">
          {/* Image section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] h-[250px] md:h-[400px] lg:h-[500px] relative overflow-hidden p-6">
            <motion.picture>
                <source media="(min-width: 768px)" srcSet={src1} />
                  <motion.img
                    src={src2}
                    alt={title}
                    className="w-full h-full object-contain"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
            </motion.picture>


            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

  
            
          </div>

          {/* Content section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-between text-justify">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
                {/* Project number */}
                <div className="absolute right-4 bg-gray-700 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-none max-w-md mb-4">
                {description}
              </p>
              {/* Technologies badges */}
              {tags && tags.length > 0 && (
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-400 mb-2">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-pink-200/20 text-pink-400 border border-pink-300/30 px-3 py-1 rounded-lg text-xs font-medium shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 ${!githubLink ? 'pointer-events-none opacity-50' : ''}`}
                  whileHover={githubLink ? { y: -3 } : {}}
                  transition={{ type: "spring", stiffness: 400 }}
                  tabIndex={!githubLink ? -1 : 0}
                  aria-disabled={!githubLink}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 ${!liveLink ? 'pointer-events-none opacity-50' : ''}`}
                  whileHover={liveLink ? { y: -3 } : {}}
                  transition={{ type: "spring", stiffness: 400 }}
                  tabIndex={!liveLink ? -1 : 0}
                  aria-disabled={!liveLink}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  tags: PropTypes.array,
};


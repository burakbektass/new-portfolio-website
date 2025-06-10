import { motion } from "framer-motion";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "BudgetFlow - Personal Finance Tracker",
    description:
      "Comprehensive personal finance application built with Next.js 14, featuring multi-currency support, interactive data visualization, and category-based budgeting. Includes dark/light theme, multi-language support (EN/TR), and responsive design for optimal user experience.",
    src1: "/src/assets/images/expense-tracker.png",
    src2: "/src/assets/images/expense-tracker.png",
    color: "#4f46e5", // Soft Indigo
    githubLink: "https://github.com/burakbektass/expense-tracker",
    liveLink: "https://expense-tracker-phi-amber.vercel.app/dashboard",
    tags: ["Next.js 14", "TypeScript", "TailwindCSS", "Recharts", "Context API"],
  },
  {
    title: "Modern Weather App",
    description:
      "A sleek and responsive weather application featuring real-time weather data, hourly forecasts, and dynamic UI that adapts to current weather conditions. Built with Next.js 14 and includes features like temperature unit conversion, wind speed units, and smart error handling.",
    src1: "/src/assets/images/weather-app.png",
    src2: "/src/assets/images/weather-app.png",
    color: "#0369a1", // Deep Sky Blue
    githubLink: "https://github.com/burakbektass/weather-app",
    liveLink: "https://weather-app-murex-omega-71.vercel.app/",
    tags: ["Next.js 14", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS"],
  },
  {
    title: "Clickable Covid-19-statistic Map",
    description:
      "Interactive world map visualization showcasing real-time COVID-19 statistics with detailed country-specific data, built with modern web technologies for optimal performance and user experience.",
    src1: "/src/assets/images/covid19-map.png",
    src2: "/src/assets/images/covid19-map.png",
    color: "#be185d", // Deep Rose
    githubLink: "https://github.com/burakbektass/covid-19-statistic",
    liveLink: "https://covid-19-statistic-aofrrq47g-burakbektass-projects.vercel.app/",
    tags: ["React", "TypeScript", "REST API"],
  },
  {
    title: "PawTime – Veterinary Appointment System",
    description:
      "Modern veterinary appointment scheduling system built with React and Tailwind CSS, featuring responsive design, easy appointment booking, and medical history tracking. A user-friendly interface for pet owners to manage their veterinary visits.",
    src1: "/src/assets/images/pawtime.png",
    src2: "/src/assets/images/pawtime.png",
    color: "#6d28d9", // Deep Purple
    githubLink: "https://github.com/burakbektass/PawTime",
    liveLink: "https://paw-time.vercel.app/",
    tags: ["React", "Tailwind CSS", "React Icons"],
  },
  {
    title: "React Budget App",
    description:
      "Personal finance tracker with expense categorization, budget planning, and visual spending analytics, built using React Router for seamless navigation.",
    src1: "/src/assets/images/budget-app.png",
    src2: "/src/assets/images/budget-app.png",
    color: "#047857", // Deep Emerald
    githubLink: "https://github.com/burakbektass/Budget-application-with-React",
    liveLink: "https://budget-application-with-react.vercel.app/",
    tags: ["React", "React Router", "SASS"],
  },
  {
    title: "Three-card Monte game with VueJs",
    description:
      "Interactive card game built with Vue.js, featuring smooth animations, score tracking, and multiple difficulty levels. A modern take on the classic Three-card Monte game.",
    src1: "/src/assets/images/3card-game.jpg",
    src2: "/src/assets/images/3card-game.jpg",
    color: "#b45309", // Deep Amber
    githubLink: "https://github.com/burakbektass/poker",
    liveLink: "https://poker-three-psi.vercel.app/",
    tags: ["Vue.js", "JavaScript", "CSS"],
  },
  {
    title: "React Movie App",
    description:
      "Feature-rich movie discovery platform integrating with TMDB API, offering advanced search, filtering, and personalized watchlists with responsive design and TypeScript type safety.",
    src1: "/src/assets/images/react-movie.jpg",
    src2: "/src/assets/images/react-movie.jpg",
    color: "#b91c1c", // Deep Red
    githubLink: "https://github.com/burakbektass/Movie-react-app",
    liveLink: "", // Add your live link if available
    tags: ["React", "TypeScript", "SCSS"],
  },
  {
    title: "Company Valuation Template",
    description:
      "Comprehensive financial analysis tool that calculates company valuations using multiple methods including DCF, Residual Income, and Enterprise Value, featuring interactive charts and detailed reporting.",
    src1: "/src/assets/images/company-valuation-project.jpg",
    src2: "/src/assets/images/company-valuation-project.jpg",
    color: "#0e7490", // Deep Cyan
    githubLink: "https://github.com/burakbektass/Company-Valuation-Template-Project",
    liveLink: "", // Add your live link if available
    tags: ["React", "Node.js", "Financial APIs", "Chart.js"],
  },
  {
    title: "Diabetes Prediction",
    description:
      "Machine learning application that predicts diabetes risk using demographic and health metrics, achieving 85% accuracy through advanced data analysis and feature engineering techniques.",
    src1: "/src/assets/images/diabetes-project.jpeg",
    src2: "/src/assets/images/diabetes-project.jpeg",
    color: "#0f766e", // Deep Teal
    githubLink: "https://github.com/burakbektass/Diabetes-Prediction-Data-Science-Project-Project",
    liveLink: "", // No live link
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
  },
];

export default function Projects() {
  const container = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  // Helper to handle which card is in view
  const handleInView = (idx) => {
    setActiveIndex(idx);
  };

  // Scroll to card by index
  const scrollToCard = (idx) => {
    if (cardRefs.current[idx]) {
      cardRefs.current[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <main className="bg-black" ref={container}>
      <section className="relative text-white w-full bg-slate-950 py-20 md:py-32 flex flex-row justify-center">
        {/* Project Cards */}
        <div className="flex-1">
          {projects.map((project, i) => {
            return (
              <div key={`p_${i}`} className="relative group" ref={el => cardRefs.current[i] = el}>
                <Card
                  i={i}
                  title={project.title}
                  description={project.description}
                  src1={project.src1}
                  src2={project.src2}
                  color={project.color}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                  tags={project.tags}
                  onInView={() => handleInView(i)}
                />
                {/* Subtle glow effect */}
                {i < projects.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-sm"></div>
                )}
              </div>
            );
          })}
        </div>
        {/* Vertical Scroll Indicator */}
        <div className="hidden md:flex flex-col items-center select-none fixed top-1/2 right-8 -translate-y-1/2 z-30">
          {projects.map((_, idx) => (
            <motion.div
              key={idx}
              animate={{
                width: activeIndex === idx ? 22 : 12,
                height: activeIndex === idx ? 22 : 12,
                backgroundColor: activeIndex === idx ? '#fff' : '#334155',
                borderRadius: 6,
                marginBottom: idx !== projects.length - 1 ? 14 : 0,
                boxShadow: activeIndex === idx ? '0 0 0 2px #64748b' : 'none',
                border: activeIndex === idx ? '2px solid #64748b' : '1px solid #334155',
                cursor: 'pointer',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              style={{
                display: 'block',
              }}
              onClick={() => scrollToCard(idx)}
              whileHover={{
                scale: 1.15,
                boxShadow: '0 0 0 4px #64748b55',
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function Card({
  i,
  title,
  description,
  src1,
  src2,
  color,
  githubLink,
  liveLink,
  tags = [],
  onInView = () => {},
}) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: i % 2 === 0 ? 200 : -200, 
        scale: 0.85,
        borderRadius: '1rem'
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        scale: 1,
        borderRadius: '1rem'
      }}
      exit={{ 
        opacity: 0,
        scale: 0.85,
        borderRadius: '1rem',
        transition: { duration: 0.6 }
      }}
      viewport={{ 
        amount: 0.5,
        margin: "0px 0px -200px 0px"
      }}
      transition={{ 
        duration: 1.2, 
        delay: i * 0.08, 
        type: "spring", 
        stiffness: 35,
        damping: 10
      }}
      className="w-full max-w-6xl mx-auto mb-14 overflow-hidden"
      whileHover={{ 
        scale: 1.025, 
        boxShadow: `0 8px 32px 0 ${color}33`,
        borderRadius: '1rem'
      }}
      onViewportEnter={onInView}
    >
      <div className="h-auto w-full origin-top project-card">
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-blue-950 border-2">
          {/* Image section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[50%] h-[300px] md:h-[450px] lg:h-[550px] relative overflow-hidden p-6 rounded-[3rem]">
            <picture>
              <source media="(min-width: 768px)" srcSet={src1} />
              <img
                src={src2}
                alt={title}
                className="w-full h-full object-contain rounded-[2.5rem]"
              />
            </picture>
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
                {/* Project number
                <div className="ml-auto bg-gray-700 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Project {i + 1}
                </div> */}
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
                        className="px-3 py-1 rounded-lg text-xs font-medium shadow-sm"
                        style={{
                          backgroundColor: `${color}15`,
                          color: color,
                          border: `1px solid ${color}30`
                        }}
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
                <a
                  href={githubLink || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 ${!githubLink ? 'pointer-events-none opacity-50' : ''}`}
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
                </a>

                {/* Live Link */}
                <a
                  href={liveLink || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 ${!liveLink ? 'pointer-events-none opacity-50' : ''}`}
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  tags: PropTypes.array,
  onInView: PropTypes.func,
};


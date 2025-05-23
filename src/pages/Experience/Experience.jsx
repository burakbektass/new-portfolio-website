import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
  // Scale,
} from "lucide-react";
import { motion } from "framer-motion";
import { SiAsana, SiCodecademy } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const ExperienceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experienceData = [
    {
      position: "Frontend Developer",
      company: "Huawei",
      year: "April 2023 – Present",
      skills: [
        "TypeScript",
        "JavaScript",
        "Vue.js",
        "Angular",
        "SCSS",
        "Figma",
        "Cloud & AI Projects",
        "HTML",
        "CSS",
        "Docker",
        "Postman",
        "Git"
      ],
      description: [
        "Participated in various cloud and AI projects, made developments, bug fixes and design using various technologies.",
        "XDM/Extreme Data Management Platform: Model-driven data platform for general data and service management.",
        "KooSearch: Fully managed enterprise search service with advanced features.",
        "LLM/Language Learning Modal: Large Language Model AI system for understanding and generating human language."
      ]
    },
    {
      position: "Frontend Developer",
      company: "Netcad Software Inc.",
      year: "September 2022 – January 2023",
      skills: [
        "React.js",
        "TypeScript",
        "Sass",
        "Bootstrap",
        "JavaScript",
        "HTML",
        "CSS",
        "Ant Design"
      ],
      description:
        "Worked on various projects including admin panel development and camera monitoring applications. Made developments, updates, and fixes for ongoing/newly developed projects and had an opportunity to refine my skills in various technologies."
    },
    {
      position: "Software Tester Intern",
      company: "World417 Group",
      year: "December 2021 – March 2022",
      skills: [
        "Unit Testing",
        "Manual Testing",
        "Test Reporting",
        "English"
      ],
      description:
        "Contributed to the company's mobile applications by performing tests, providing feedback, and assisting in the development of new features. Supported the team in ensuring the quality and functionality of the apps as an intern."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Professional Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Passionate about building scalable web applications and continuously improving my skills in modern frontend technologies. Always eager to take on new challenges and deliver impactful solutions as a software developer.
          </p>
          {/* İstatistikler */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-16">
            <div>
              <span className="text-4xl md:text-5xl font-extrabold text-teal-400">2.5+</span>
              <div className="text-gray-300 text-sm mt-1">Years<br />Experience</div>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-extrabold text-teal-400">10+</span>
              <div className="text-gray-300 text-sm mt-1">Projects<br />Contributed/Completed</div>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-extrabold text-teal-400">3</span>
              <div className="text-gray-300 text-sm mt-1">Companies<br />Worked</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {experienceData.map((ex, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    
                    <h3 className="text-2xl font-bold text-white">
                      {ex.position}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <FaLaptopCode className="w-5 h-5 text-teal-500" />
                    {ex.company}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {ex.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3 text-justify">
                  {Array.isArray(ex.description) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {ex.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    ex.description
                  )}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Skills Acquired
                  </h4>
                  
                </div>

                <div className="flex flex-wrap gap-2">
                  {ex.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

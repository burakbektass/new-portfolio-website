import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Cloud, FileJson, SquareMousePointer } from "lucide-react";
import { FaReact, FaPython, FaDocker, FaAngular } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiVercel, SiJavascript, SiGithub, SiHtml5, SiCss3, SiPostman, SiVuedotjs, SiBootstrap, SiMysql, SiAmazonwebservices, SiJsonwebtokens, SiGit } from "react-icons/si";
import { BsGrid1X2 } from "react-icons/bs";
import figma from "@/assets/images/figma.svg";
import "./Skills.css";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 h-[100%]">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-3 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

SkillCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
  color: PropTypes.string.isRequired,
};

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-4 h-4 text-[#FFCA28]" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-4 h-4 text-black dark:text-white" />,
        },
        {
          name: "Vue.js",
          icon: <SiVuedotjs className="w-4 h-4 text-[#42b883]" />,
        },
        {
          name: "Angular",
          icon: <FaAngular className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <SiHtml5 className="w-4 h-4 text-[#FF6D00]" />,
        },
        {
          name: "CSS3",
          icon: <SiCss3 className="w-4 h-4 text-[#264DE4]" />,
        },
        // { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
      ],
    },
    {
      icon: FileJson,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        // {
        //   name: "PHP",
        //   icon: <SiPhp className="w-4 h-4 text-[#777BB4]" />,
        // },
        // {
        //   name: "Swagger",
        //   icon: <SiSwagger className="w-4 h-4 text-[#00C853]" />,
        // },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "JWT",
          icon: <SiJsonwebtokens className="w-4 h-4  text-[#646CFF]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Database Technologies",
      color: "text-purple-400",
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#4479A1]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        {
          name: "AWS",
          icon: <SiAmazonwebservices className="w-4 h-4 text-[#FF9900]" />,
        },
        // {
        //   name: "API Gateway",
        //   icon: <SiAmazonapigateway className="w-4 h-4 text-[#00C853]" />,
        // },

        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },

        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
      ],
    },
    {
      icon: SquareMousePointer,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        { name: "Git", icon: <SiGit className="w-4 h-4 text-[#F05032]" /> },
        {
          name: "GitHub",
          icon: <SiGithub className="w-4 h-4 " />,
        },
        {
          name: "Figma",
          icon: <img src={figma} className="w-4 h-4 text-[#F24E1E]" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="w-4 h-4 text-[#7952B3]" />,
        },
      ],
    },
    // {
    //   icon: Recycle,
    //   title: "Development Life Cycle",
    //   color: "text-yellow-400",
    //   skills: [
    //     {
    //       name: "Jira",
    //       icon: <SiJira className="w-4 h-4 text-[#0052CC]" />,
    //     },
    //     {
    //       name: "Slack",
    //       icon: <img src={slack} className="w-4 h-4 text-[#4A154B]" />,
    //     },
    //     {
    //       name: "Agile Methodology",
    //       icon: <SiAsana className="w-4 h-4 text-[#F06A6A]" />,
    //     },
    //     {
    //       name: "Scrum",
    //       icon: <Goal className="w-4 h-4 text-[#47A248]" />,
    //     },
    //     {
    //       name: "OOP",
    //       icon: <FaRegObjectGroup className="w-4 h-4 text-[#FF4081]" />,
    //     },
    //     {
    //       name: "SOLID Principles",
    //       icon: <SiSolid className="w-4 h-4 text-[#2C4F7C]" />,
    //     },
    //     {
    //       name: "Unit Testing",
    //       icon: <LaptopMinimalCheck className="w-4 h-4 text-[#FFCA28]" />,
    //     },
    //   ],
    // },
  ];

  return (
    <section className="min-h-screen py-20 bg-[#04081A]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-4 mt-8 p-2">
            My Skills
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Technologies and tools I use to build modern, scalable web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-x-8 gap-y-8 mt-16 items-start">
          {/* 1. Satır */}
          <div className="max-w-xs md:max-w-sm lg:max-w-md mx-auto w-full min-h-[10rem] h-full">
            <SkillCard {...skillCategories[0]} />
          </div>
          <div className="flex justify-center items-start pt-0 max-w-xs md:max-w-sm lg:max-w-md mx-auto w-full min-h-[10rem] h-full">
            <div className="flex justify-center items-center md:w-[19rem] md:h-[17rem] mt-[-32px]">
              <IconCloudDemo />
            </div>
          </div>
          <div className="max-w-xs md:max-w-sm lg:max-w-md mx-auto w-full min-h-[10rem] h-full">
            <SkillCard {...skillCategories[4]} />
          </div>
          {/* 2. Satır */}
          <div className="max-w-xs md:max-w-sm lg:max-w-md mx-auto w-full min-h-[6rem] md:min-h-[3rem] h-[65%]">
            <SkillCard {...skillCategories[1]} />
          </div>
          <div className="max-w-xs md:max-w-sm lg:max-w-md mx-auto w-full min-h-[6rem] md:min-h-[7rem] h-[65%]">
            <SkillCard {...skillCategories[2]} />
          </div>
          <div className="max-w-xs md:max-w-sm lg:max-w-md mx-auto w-full min-h-[6rem] md:min-h-[7rem] h-[65%]">
            <SkillCard {...skillCategories[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

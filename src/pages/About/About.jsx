import React from "react";
import { Code2, Layout, Smartphone, Zap } from "lucide-react";
import profilePicture from '../../assets/images/profile-picture.jpg';

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
            Crafting Digital Experiences: Where Code Meets Creativity ✨
          </h2>
          
          <div className="relative">
            {/* Profile Picture */}
            <div className="float-left mr-8 mb-4">
              <div className="relative w-56 h-56 lg:w-72 lg:h-72">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30"></div>
                <img
                  src={profilePicture}
                  alt="Burak Bektaş"
                  className="relative w-full h-full object-cover object-[center_15%] rounded-full border-4 border-white/10"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-4 text-justify">
              <p className="text-white">
                Hi! I'm Burak Bektaş, a Software Engineering graduate from Bahçeşehir University with a deep passion for frontend development. With a solid academic background (GPA: 3.40/4.00), I focus on creating beautiful and performant web applications that deliver exceptional user experiences.
              </p>
              <p className="text-white">
                I specialize in modern frontend development, working extensively with React, Next.js, and TypeScript. My approach combines clean code practices with cutting-edge technologies, always pushing the boundaries of what's possible in web development. I'm particularly passionate about exploring new frontend frameworks and staying ahead of the curve in web development trends.
              </p>
              <p className="text-white">
                In the Projects section, you'll find examples of my work showcasing interactive web applications and modern designs. Each project represents my commitment to learning and implementing the latest frontend technologies, including this portfolio website itself.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I thrive on challenges and am constantly exploring new frontend technologies. My goal is to create web applications that not only look stunning but also provide seamless user experiences, while maintaining clean, maintainable code and following industry best practices.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

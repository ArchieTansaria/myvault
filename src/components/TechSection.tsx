"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  SiTypescript, SiJavascript, SiPython, SiCplusplus, SiReact, SiNextdotjs, SiRedux, SiThreedotjs,
  SiNodedotjs, SiExpress, SiSocketdotio, SiPrisma, SiMongodb, SiMysql, SiPostgresql,
  SiRedis, SiFirebase, SiDocker, SiGooglecloud, SiGithubactions,
  SiGithub, SiBun, SiNginx, SiLinux, SiGnubash, SiApachekafka, SiFigma
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { GiBull } from 'react-icons/gi';

export default function TechSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const techStack = [
    // Frontend & Languages
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "C++", Icon: SiCplusplus, color: "#00599C" },
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "Redux", Icon: SiRedux, color: "#764ABC" },
    
    // Backend & Frameworks
    { name: "Three.js", Icon: SiThreedotjs },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", Icon: SiExpress },
    { name: "Socket.IO", Icon: SiSocketdotio },
    { name: "Prisma", Icon: SiPrisma },
    
    // Databases & Containers
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    { name: "Redis", Icon: SiRedis, color: "#DC382D" },
    { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "BullMQ", Icon: GiBull },
    
    // Cloud & Servers
    { name: "Nginx", Icon: SiNginx, color: "#009639" },
    { name: "AWS (ECS, Lambda, EC2, EKS, S3)", Icon: FaAws, color: "#FF9900" },
    { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
    { name: "Bun", Icon: SiBun },
    
    // Tools & OS
    { name: "Kafka", Icon: SiApachekafka, color: "#231F20" },
    { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
    { name: "GitHub", Icon: SiGithub },
    { name: "Linux", Icon: SiLinux, color: "#FCC624" },
    { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
    { name: "Bash", Icon: SiGnubash, color: "#4EAA25" },
  ];

  return (
    <section className="flex flex-col gap-element-gap">
      <div className="flex items-center gap-4">
        <div className="w-8 h-[1px] bg-status-red shrink-0"></div>
        <h2 className="font-headline-lg text-headline-lg italic text-primary">
          Tech I Use
        </h2>
      </div>
      
      <div className="relative">
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 120 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap gap-3 pb-1">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="grow flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors duration-200 cursor-default"
              >
                <tech.Icon className="w-4 h-4" color={tech.color} />
                <span className="font-code-md text-code-md">
                  {tech.name}
                </span>
              </div>
            ))}
            {/* Invisible spacer to absorb some remaining space so the last row stretches slightly but not too much */}
            <div className="grow-[4]" aria-hidden="true"></div>
          </div>
        </motion.div>

        {/* Gradient Blur Overlay & Show All Button */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background via-background/80 to-transparent flex items-end justify-center pb-0 pointer-events-none">
            <button
              onClick={() => setIsExpanded(true)}
              className="pointer-events-auto text-on-surface-variant hover:text-primary font-code-md text-code-md transition-colors flex items-center gap-1.5 focus:outline-none bg-background px-4 py-1.5 rounded-full border border-border-subtle hover:bg-surface-container-lowest"
            >
              show all
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="self-center mt-2 text-on-surface-variant hover:text-primary font-code-md text-code-md transition-colors flex items-center gap-1.5 focus:outline-none px-4 py-1 rounded-full border border-border-subtle bg-surface-container-lowest"
        >
          show less
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      )}
    </section>
  );
}

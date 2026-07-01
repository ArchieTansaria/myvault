"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub, SiTypescript, SiNodedotjs, SiReact, SiRedis, SiCloudflare, SiPostgresql, SiDocker, SiSpringboot, SiHibernate, SiExpress, SiNpm } from "react-icons/si";
import { FaAws, FaJava, FaLayerGroup, FaCube, FaRobot } from "react-icons/fa";
import { VscTerminalBash } from "react-icons/vsc";
import { GiBull } from "react-icons/gi";

const projects = [
  {
    title: "Dependency Update Risk Analysis Engine",
    description: [
      "Architected a distributed GitHub App for real-time PR risk evaluation, featuring a cost-optimized, event-driven backend that triggers AWS ECS Fargate workers on-demand to reduce idle infrastructure costs.",
      "Built a resilient asynchronous job processing pipeline using BullMQ and Redis, paired with a custom risk-scoring engine optimized by parallel metadata fetching and caching."
    ],
    tags: [
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Redis (Elasticache)", Icon: SiRedis, color: "#DC382D" },
      { name: "CLI", Icon: VscTerminalBash },
      { name: "AWS (ECS, Lambda)", Icon: FaAws, color: "#FF9900" },
      { name: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },
      { name: "BullMQ", Icon: GiBull },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    ],
    githubUrl: "https://github.com/ArchieTansaria/dura",
    deployedUrl: "https://durakit.site/",
  },
  {
    title: "Mythos: A Headless Metadata Backup Service",
    description: [
      "Architected a highly-concurrent data migration pipeline using Spring Batch 5 and Java 17 to stream, validate, and archive multi-tenant enterprise metadata.",
      "Implemented fault-tolerant, parallel-scaled processing that intercepts validation failures and persists real-time audit trails to PostgreSQL without halting active batch executions."
    ],
    tags: [
      { name: "Java 17", Icon: FaJava, color: "#007396" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "Hibernate/JPA", Icon: SiHibernate, color: "#59666C" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "AWS (S3, SDK)", Icon: FaAws, color: "#FF9900" },
      { name: "LocalStack", Icon: FaLayerGroup, color: "#04A15A" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    ],
    githubUrl: "https://github.com/ArchieTansaria/mythos",
    deployedUrl: null,
  },
  {
    title: "DURA MCP Server & CLI",
    description: [
      "Developed a Model Context Protocol (MCP) server and robust Node.js CLI to seamlessly integrate the DURA risk-analysis engine with local development environments and AI agents.",
      "Packaged the core analysis logic into a standalone Apify Actor, enabling autonomous, scalable repository scanning and vulnerability reporting in the cloud."
    ],
    tags: [
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress, color: "#ffffff" },
      { name: "MCP SDK", Icon: FaCube, color: "#a8b1ff" },
      { name: "Commander.js", Icon: VscTerminalBash, color: "#e5e2e1" },
      { name: "Apify", Icon: FaRobot, color: "#00f07c" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "npm", Icon: SiNpm, color: "#CB3837" },
    ],
    githubUrl: "https://github.com/ArchieTansaria/dura/tree/main/mcp", // Assuming it's in the same monorepo or repo for now, or just leave it.
    deployedUrl: "https://www.npmjs.com/package/dura-kit",
  },
];

export default function ProjectsSection() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>(
    projects.map((_, index) => index)
  );

  const toggleProject = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="flex flex-col gap-element-gap" id="projects">
      <div className="flex items-center gap-4">
        <div className="w-8 h-[1px] bg-status-red shrink-0"></div>
        <h2 className="font-headline-lg text-headline-lg italic text-primary">
          Projects
        </h2>
      </div>
      <div className="flex flex-col">
        {projects.map((project, index) => {
          const isExpanded = expandedIndices.includes(index);
          return (
            <div
              key={index}
              className="group flex flex-col border-b border-border-subtle hover:bg-surface-container-lowest transition-colors duration-200"
            >
              {/* Header Row (Clickable) */}
              <button
                onClick={() => toggleProject(index)}
                className="w-full flex justify-between items-center py-3 text-left focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <h3 className="font-body-md text-body-md font-semibold text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div
                    className={`transition-all duration-200 p-0.5 mt-[0.4] rounded text-on-surface-variant flex items-center justify-center ${
                      isExpanded
                        ? "opacity-100 rotate-90 text-primary"
                        : "opacity-100 group-hover:text-primary hover:bg-surface-container-high"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>

                {/* Action Links (GitHub / Deployed) */}
                <div className="flex items-center gap-3">
                  {project.deployedUrl && (
                    <a
                      href={project.deployedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary transition-colors p-1"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${project.title} Live Deployment`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.5"
                        height="16.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary transition-colors p-1"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <SiGithub className="w-[18px] h-[18px]" />
                    </a>
                  )}
                </div>
              </button>

              {/* Expandable Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 pt-1 flex flex-col gap-5">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIdx) => (
                          <div
                            key={tagIdx}
                            className="group/pill flex items-center px-2 py-1.5 rounded-md border border-dashed border-border-dashed bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300 cursor-default"
                          >
                            <tag.Icon className="w-[14px] h-[14px] shrink-0" color={tag.color} />
                            <div className="grid grid-cols-[0fr] group-hover/pill:grid-cols-[1fr] ml-0 group-hover/pill:ml-1.5 transition-all duration-300 ease-out">
                              <span className="overflow-hidden whitespace-nowrap font-code-md text-code-md text-on-surface leading-none">
                                {tag.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <ul className="text-body-md font-body-md text-on-surface-variant pr-8 list-disc list-outside ml-4 flex flex-col gap-2">
                        {project.description.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

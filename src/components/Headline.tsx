"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WavyArrow from "./ui/wavy-arrow";

const SOCIAL_LINKS = [
  {
    id: "GitHub",
    href: "https://github.com/ArchieTansaria",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
      </svg>
    ),
  },
  {
    id: "X",
    href: "https://x.com/archietansaria",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
      </svg>
    ),
  },
  {
    id: "LinkedIn",
    href: "https://www.linkedin.com/in/archietansaria/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    id: "Email",
    href: "mailto:hi@archietans.xyz",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
  },
  {
    id: "Medium",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="12" r="5" />
        <ellipse cx="15.5" cy="12" rx="2.5" ry="5" />
        <ellipse cx="21" cy="12" rx="1" ry="5" />
      </svg>
    ),
  },
  {
    id: "Cal",
    href: "https://cal.com/archietans",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="17" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
  },
];

export default function Headline() {
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!isTooltipActive) {
      timeoutRef.current = setTimeout(() => {
        setHoveredIcon(id);
        setIsTooltipActive(true);
      }, 100);
    } else {
      setHoveredIcon(id);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredIcon(null);
    timeoutRef.current = setTimeout(() => {
      setIsTooltipActive(false);
    }, 150);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hi@archietans.xyz");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-row items-start gap-8"
      style={{ overflowAnchor: "none" }}
    >
      <div className="flex flex-col gap-6 w-full">
        {/* Top Row: Avatar + Name/Title */}
        <div className="flex flex-row items-center gap-6">
          <div className="w-22 h-22 rounded-full overflow-hidden shrink-0">
            <img
              alt="Archie Tansaria"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6CN5BDj7hHJo9aXNC-iazSdm7aJ3BqCYO8ax29rQxX2PDh5exE4XVssiqRxXVUWePxruGFpYol1jK1IoyPDfZkRRGAy0pkRQ4bCTnBNRuzENtc7YGmvS4HAurOjeGCm6vFMq6dU-B3ZlNBAGQ3yzQZ9AcnlEi0fdU77uwC4vuP6DK5a3-TNVFhKx-gVLdW6SdmON8f_ASmVtRGYTdgR7gI-221DfTS5BSP-CvFI75scEN87RAjSsXRJYGidCUc41R0R_1jvZbheTV1w"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-headline-xl text-headline-xl italic font-medium text-primary pl-1">
              Archie Tansaria
            </h1>
            <div className="flex items-center gap-4 font-label-sm text-label-sm text-on-surface-variant">
              <span>Engineer</span>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined !text-[16px]">
                  location_on
                </span>
                <span>Bengaluru</span>
              </div>
              <span className="opacity-30">|</span>
              <a
                className="text-primary hover:opacity-80 flex items-center gap-1 group"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsResumeHovered(true)}
                onMouseLeave={() => setIsResumeHovered(false)}
              >
                <span>resume</span>
                {/* <span className="material-symbols-outlined !text-[16px] text-[#ef4444] transition-all duration-200 group-hover:translate-x-1">
                  arrow_forward
                </span> */}
                <WavyArrow className="text-[#ef4444]" isHovered={isResumeHovered} />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Block: Bio + Status/Contact/Socials */}
        <div className="flex flex-col gap-4 w-full">
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Full-stack developer focused on cloud infrastructure, serverless engineering, and building resilient systems.
          </p>
          <div className="flex items-center gap-4">
            <div className="font-label-sm text-[10.8px] px-2 py-1 bg-surface-container-lowest border border-status-red/40 text-on-error-container rounded-full">
              open for work!
            </div>
            <button 
              onClick={handleCopyEmail}
              className="flex items-center gap-2 font-label-sm text-[11.4px] transition-colors cursor-pointer text-on-surface-variant hover:text-primary"
              aria-label="Copy email address"
            >
              <span>hi@archietans.xyz</span>
              <div className="relative w-[14px] h-[14px] flex items-center justify-center">
                <AnimatePresence mode="wait" initial={false}>
                  {isCopied ? (
                    <motion.span
                      key="check"
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                      transition={{ duration: 0.1 }}
                      className="material-symbols-outlined !text-[14px] absolute"
                    >
                      check
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                      transition={{ duration: 0.1 }}
                      className="material-symbols-outlined !text-[14px] absolute"
                    >
                      content_copy
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </button>
            <div className="flex items-center gap-3 ml-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  className="relative flex items-center justify-center text-on-surface-variant hover:text-primary font-bold transition-colors duration-200"
                  href={link.href}
                  aria-label={link.id}
                  onMouseEnter={() => handleMouseEnter(link.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.icon}
                  <AnimatePresence>
                    {hoveredIcon === link.id && (
                      <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[11px] font-label-sm bg-on-surface text-surface rounded-md pointer-events-none whitespace-nowrap shadow-md z-10"
                      >
                        {link.id}
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-on-surface"></span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

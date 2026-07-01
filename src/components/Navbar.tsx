"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useCommandMenu } from "@/src/context/CommandMenuContext";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { setOpen } = useCommandMenu();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-container-max rounded-full border border-border-subtle bg-surface/80 backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center gap-8 px-6 w-full py-1.5">
        <div className="md:flex space-x-6 flex justify-start items-center">
          <Link
            className="font-label-sm text-label-sm text-primary transition-all"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all duration-200"
            href="/#projects"
          >
            Projects
          </Link>
          <Link
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all duration-200"
            href="/#writing"
          >
            Writing
          </Link>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all duration-200"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-primary hover:opacity-80 transition-all flex items-center justify-center"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined !text-[20px]">
              {mounted && theme === "light" ? "dark_mode" : "light_mode"}
            </span>
          </button>
          <button 
            onClick={() => setOpen(true)}
            className="text-primary hover:opacity-80 transition-all flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-border-subtle"
          >
            <span className="material-symbols-outlined !text-[20px]">search</span>
            <div className="flex items-center gap-1">
              <span className="flex items-center justify-center w-5 h-5 rounded bg-surface-container-lowest text-[10px] font-code-md border border-border-subtle !text-[14px]">
                ⌘
              </span>
              <span className="flex items-center justify-center w-5 h-5 rounded bg-surface-container-lowest text-[10px] font-code-md border border-border-subtle">
                K
              </span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

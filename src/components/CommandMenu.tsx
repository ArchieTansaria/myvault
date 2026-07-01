"use client";

import { useEffect, useCallback } from "react";
import { Command } from "cmdk";
import { useCommandMenu } from "@/src/context/CommandMenuContext";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export function CommandMenu() {
  const { open, setOpen } = useCommandMenu();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  // Prevent page from scrolling when dialog opens
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.overflow = "hidden";
      // Restore scroll position on next frame (after browser focus-scroll)
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.scrollBehavior = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.scrollBehavior = "";
    };
  }, [open]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, [setOpen]);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      onKeyDown={(e) => {
        if (e.key === "ArrowUp" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          runCommand(() => window.scrollTo({ top: 0, behavior: "smooth" }));
          return;
        }
        
        if (!e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
          switch (e.key.toLowerCase()) {
            case 't':
              e.preventDefault();
              runCommand(() => setTheme(theme === "dark" ? "light" : "dark"));
              break;
            case 'e':
              e.preventDefault();
              runCommand(() => navigator.clipboard.writeText("hi@archietans.xyz"));
              break;
            case 's':
              e.preventDefault();
              runCommand(() => {
                if (navigator.share) {
                  navigator.share({ title: "Archie Tansaria", url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              });
              break;
            case 'h':
              e.preventDefault();
              runCommand(() => router.push("/"));
              break;
            case 'w':
              e.preventDefault();
              runCommand(() => router.push("/#projects"));
              break;
            case 'b':
              e.preventDefault();
              runCommand(() => router.push("/#writing"));
              break;
            case 'r':
              e.preventDefault();
              runCommand(() => window.open("/resume.pdf", "_blank"));
              break;
            case 'u':
              e.preventDefault();
              runCommand(() => router.push("/uses"));
              break;
          }
        }
      }}
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-full max-w-[500px] rounded-xl border border-border-subtle bg-surface-container shadow-2xl overflow-hidden focus:outline-none"
      overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99]"
    >
      <Command.Input 
        placeholder="Type a command or search..." 
        className="w-full border-b border-border-subtle bg-transparent px-4 py-4 text-[14px] text-primary placeholder-on-surface-variant focus:outline-none"
      />
      
      <Command.List className="max-h-[300px] overflow-y-auto p-2 overscroll-contain">
        <Command.Empty className="py-6 text-center text-[13px] text-on-surface-variant">
          No results found.
        </Command.Empty>

        <Command.Group heading="Features" className="text-[11px] font-label-sm text-on-surface-variant p-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:text-[12px] [&_[cmdk-group-heading]]:font-semibold">
          <Command.Item
            onSelect={() => {
              runCommand(() => setTheme(theme === "dark" ? "light" : "dark"));
            }}
            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[13px] text-on-surface hover:bg-surface-container-high aria-selected:bg-surface-container-high cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined !text-[16px]">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
            <div className="flex flex-col">
              <span className="text-primary font-medium">Toggle Theme</span>
              <span className="text-on-surface-variant text-[11px]">Switch between light and dark mode</span>
            </div>
            <kbd className="ml-auto rounded-md bg-surface border border-border-subtle px-1.5 py-0.5 text-[10px] font-code-md text-on-surface-variant">
              T
            </kbd>
          </Command.Item>

          <Command.Item
            onSelect={() => {
              runCommand(() => window.scrollTo({ top: 0, behavior: "smooth" }));
            }}
            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[13px] text-on-surface hover:bg-surface-container-high aria-selected:bg-surface-container-high cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined !text-[16px]">arrow_upward</span>
            <div className="flex flex-col">
              <span className="text-primary font-medium">Scroll to Top</span>
              <span className="text-on-surface-variant text-[11px]">Scroll to the top of the page</span>
            </div>
            <kbd className="ml-auto rounded-md bg-surface border border-border-subtle px-1.5 py-0.5 text-[10px] font-code-md text-on-surface-variant flex items-center gap-0.5">
              <span className="text-[12px]">⌘</span><span className="material-symbols-outlined !text-[12px]">arrow_upward</span>
            </kbd>
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Actions" className="text-[11px] font-label-sm text-on-surface-variant p-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:text-[12px] [&_[cmdk-group-heading]]:font-semibold">
          <Command.Item
            onSelect={() => {
              runCommand(() => navigator.clipboard.writeText("hi@archietans.xyz"));
            }}
            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[13px] text-on-surface hover:bg-surface-container-high aria-selected:bg-surface-container-high cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined !text-[16px]">mail</span>
            <div className="flex flex-col">
              <span className="text-primary font-medium">Copy Email</span>
              <span className="text-on-surface-variant text-[11px]">Copy email address to clipboard</span>
            </div>
            <kbd className="ml-auto rounded-md bg-surface border border-border-subtle px-1.5 py-0.5 text-[10px] font-code-md text-on-surface-variant">
              E
            </kbd>
          </Command.Item>

          <Command.Item
            onSelect={() => {
              runCommand(() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Archie Tansaria",
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              });
            }}
            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[13px] text-on-surface hover:bg-surface-container-high aria-selected:bg-surface-container-high cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined !text-[16px]">share</span>
            <div className="flex flex-col">
              <span className="text-primary font-medium">Share Page</span>
              <span className="text-on-surface-variant text-[11px]">Share the current page</span>
            </div>
            <kbd className="ml-auto rounded-md bg-surface border border-border-subtle px-1.5 py-0.5 text-[10px] font-code-md text-on-surface-variant">
              S
            </kbd>
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Navigation" className="text-[11px] font-label-sm text-on-surface-variant p-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:text-[12px] [&_[cmdk-group-heading]]:font-semibold">
          <Command.Item
            onSelect={() => runCommand(() => router.push("/"))}
            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[13px] text-on-surface hover:bg-surface-container-high aria-selected:bg-surface-container-high cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined !text-[16px]">home</span>
            <div className="flex flex-col">
              <span className="text-primary font-medium">Go to Home</span>
              <span className="text-on-surface-variant text-[11px]">Navigate to the homepage</span>
            </div>
            <kbd className="ml-auto rounded-md bg-surface border border-border-subtle px-1.5 py-0.5 text-[10px] font-code-md text-on-surface-variant">
              H
            </kbd>
          </Command.Item>

          <Command.Item
            onSelect={() => runCommand(() => router.push("/#projects"))}
            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[13px] text-on-surface hover:bg-surface-container-high aria-selected:bg-surface-container-high cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined !text-[16px]">work</span>
            <div className="flex flex-col">
              <span className="text-primary font-medium">Go to Work</span>
              <span className="text-on-surface-variant text-[11px]">View work experience</span>
            </div>
            <kbd className="ml-auto rounded-md bg-surface border border-border-subtle px-1.5 py-0.5 text-[10px] font-code-md text-on-surface-variant">
              W
            </kbd>
          </Command.Item>
          
          <Command.Item
            onSelect={() => runCommand(() => router.push("/#writing"))}
            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[13px] text-on-surface hover:bg-surface-container-high aria-selected:bg-surface-container-high cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined !text-[16px]">book</span>
            <div className="flex flex-col">
              <span className="text-primary font-medium">Go to Blog</span>
              <span className="text-on-surface-variant text-[11px]">Browse all blog posts</span>
            </div>
            <kbd className="ml-auto rounded-md bg-surface border border-border-subtle px-1.5 py-0.5 text-[10px] font-code-md text-on-surface-variant">
              B
            </kbd>
          </Command.Item>

          <Command.Item
            onSelect={() => runCommand(() => window.open("/resume.pdf", "_blank"))}
            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[13px] text-on-surface hover:bg-surface-container-high aria-selected:bg-surface-container-high cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined !text-[16px]">description</span>
            <div className="flex flex-col">
              <span className="text-primary font-medium">Go to Resume</span>
              <span className="text-on-surface-variant text-[11px]">View and download resume</span>
            </div>
            <kbd className="ml-auto rounded-md bg-surface border border-border-subtle px-1.5 py-0.5 text-[10px] font-code-md text-on-surface-variant">
              R
            </kbd>
          </Command.Item>

          <Command.Item
            onSelect={() => runCommand(() => router.push("/uses"))}
            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[13px] text-on-surface hover:bg-surface-container-high aria-selected:bg-surface-container-high cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined !text-[16px]">settings</span>
            <div className="flex flex-col">
              <span className="text-primary font-medium">Go to Uses</span>
              <span className="text-on-surface-variant text-[11px]">View hardware and equipment setup</span>
            </div>
            <kbd className="ml-auto rounded-md bg-surface border border-border-subtle px-1.5 py-0.5 text-[10px] font-code-md text-on-surface-variant">
              U
            </kbd>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}

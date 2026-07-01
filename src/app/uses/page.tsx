import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function UsesPage() {
  const hardware = [
    { item: "MacBook Air M4 2025 (13\", 512GB)", desc: "My daily driver for development and everything else." },
    { item: "Lenovo 24\" QHD Monitor", desc: "Primary external display for that extra screen real estate." },
    { item: "Logitech K380s", desc: "Minimalist, multi-device keyboard." },
    { item: "Logitech M350", desc: "Quiet and portable pebble mouse." },
  ];

  const terminalAndDev = [
    { item: "Ghostty", desc: "Fast, native terminal emulator." },
    { item: "Tmux", desc: "Terminal multiplexer for managing sessions." },
    { item: "Oh My Zsh", desc: "Framework for managing my Zsh configuration." },
    { item: "Starship", desc: "Cross-shell customizable prompt." },
    { item: "Antigravity / Cursor / Neovim", desc: "My editor trifecta depending on the task at hand." },
    { item: "Codex", desc: "AI pair programming and assistance." },
  ];

  const software = [
    { item: "Safari & Brave", desc: "Primary browsers for general browsing and development." },
    { item: "Raycast", desc: "Spotlight replacement on steroids." },
    { item: "Karabiner Elements", desc: "For deep keyboard customization and mapping." },
    { item: "AlDente", desc: "Mac battery management utility." },
    { item: "1Password", desc: "Essential password management and security." },
  ];

  const productivity = [
    { item: "Notion", desc: "For organizing thoughts, tasks, and documentation." },
    { item: "Excalidraw", desc: "Virtual whiteboard for quick diagramming and architecture planning." },
    { item: "Letterboxd", desc: "Because everyone needs a break. Film tracking and logging." },
  ];

  const Section = ({ title, items, children }: { title: string, items: { item: string, desc: string }[], children?: React.ReactNode }) => (
    <div className="mt-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-8 h-[1px] bg-status-red shrink-0"></div>
        <h2 className="font-headline-lg text-headline-lg italic text-primary">
          {title}
        </h2>
      </div>
      {children}
      <div className="flex flex-col">
        {items.map((entry, idx) => (
          <div key={idx} className="group block ml-5 py-4 border-b border-border-subtle hover:bg-surface-container-lowest transition-colors duration-200">
            <div className="flex flex-col gap-1">
              <h3 className="font-body-md text-body-md font-semibold text-primary">
                {entry.item}
              </h3>
              <p className="font-body-md text-on-surface-variant text-[13px]">
                {entry.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="max-w-container-max mx-auto px-margin-page py-20 flex flex-col gap-section-gap pt-32">
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <h1 className="font-headline-xl text-headline-xl italic text-primary">
              Uses
            </h1>
          </div>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            A comprehensive list of tools, apps, hardware, and more that I use on a daily basis to build software and stay productive (which I know nobody cares about but I'm gonna add anyway).
          </p>

          <Section title="Hardware" items={hardware} />
          
          <Section title="Terminal & Development" items={terminalAndDev}>
            <a 
              href="https://github.com/ArchieTansaria/dotfiles" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 ml-4 rounded-xl border border-border-subtle bg-transparent hover:bg-surface-container-lowest transition-colors mb-2 mt-2 group cursor-pointer"
            >
              <div className="text-on-surface-variant group-hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-primary font-medium text-[15px]">ArchieTansaria/dotfiles</span>
                <span className="text-on-surface-variant text-[13px]">Full configuration files, documentation, and updates</span>
              </div>
            </a>
          </Section>

          <Section title="Software & Utilities" items={software} />
          <Section title="Productivity & Lifestyle" items={productivity} />
          
        </section>
      </main>
      <Footer />
    </>
  );
}

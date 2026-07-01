export default function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-lowest border-t border-border-subtle pb-12">
      <div className="max-w-container-max mx-auto px-margin-page font-code-md">
        {/* Top Row: Terminal Style */}
        <div className="flex justify-between items-end pb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-status-red"></div>
              <span className="text-on-surface-variant text-[12px] tracking-wider">
                OPEN TO FREELANCE & FULL-TIME ROLES
              </span>
            </div>
            <div className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="opacity-50">$ </span>
              <a
                href="mailto:HI@ARCHIETANS.XYZ"
                className="underline underline-offset-4 text-[12px]"
              >
                hi@archietans.xyz
              </a>
            </div>
          </div>
          <div className="flex gap-6 text-on-surface-variant text-[12px]">
            <a href="#projects" className="hover:text-primary transition-colors">
              PROJECTS
            </a>
            <a href="#writing" className="hover:text-primary transition-colors">
              WRITING
            </a>
            <a href="/uses" className="hover:text-primary transition-colors">
              USES
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              RESUME
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-subtle opacity-50"></div>

        {/* Bottom Row: Refined Existing Content */}
        <div className="flex justify-between items-center pt-6">
          <p className="text-label-sm text-on-surface-variant">
            © 2026 Archie Tansaria
          </p>
          <div className="flex items-center gap-4">
            <a
              aria-label="GitHub"
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="https://github.com/ArchieTansaria"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              aria-label="Twitter"
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="https://x.com/archietansaria"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="https://www.linkedin.com/in/archietansaria/"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="2"
                ></circle>
              </svg>
            </a>
            <a
              aria-label="Email"
              className="text-on-surface-variant hover:text-primary transition-colors mb-0 pb-0 flex items-center"
              href="mailto:hi@archietans.xyz"
            >
              <span className="material-symbols-outlined !text-[20px] mb-0 pb-0 block">
                mail
              </span>
            </a>
            <a
              aria-label="Calendar"
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="https://cal.com/archietans"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="17" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

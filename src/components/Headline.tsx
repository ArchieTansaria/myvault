export default function Headline() {
  return (
    <section className="flex flex-row items-start gap-8">
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
                className="text-primary hover:opacity-80 flex items-center gap-2 group"
                href="#"
              >
                <span>resume</span>
                <div className="overflow-hidden w-5 transition-all duration-300 ease-in-out group-hover:w-12 flex justify-start">
                  <svg
                    viewBox="0 0 48 16"
                    className="w-12 h-4 shrink-0 text-[#ef4444]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M 0 8 Q 3 2, 6 8 T 12 8 T 18 8 T 24 8 T 30 8 T 36 8 T 42 8 L 38 4 M 42 8 L 38 12" />
                  </svg>
                </div>
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
            <div className="font-label-sm text-[10px] px-2 py-1 bg-surface-container-lowest border border-[#ef4444]/50 text-[#ffdad6] rounded-full">
              open for work!
            </div>
            <button className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">
              <span>hi@archietans.xyz</span>
              <span className="material-symbols-outlined !text-[14px]">
                content_copy
              </span>
            </button>
            <div className="flex items-center gap-3 ml-2">
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
                aria-label="Calendar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

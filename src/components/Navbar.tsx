export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-container-max rounded-full border border-border-subtle bg-surface/80 backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center gap-8 px-6 w-full py-1.5">
        <div className="md:flex space-x-4 flex justify-start">
          <a
            className="font-label-sm text-label-sm text-primary px-3 py-1 rounded-full bg-surface-container-high transition-all"
            href="#"
          >
            Home
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high px-3 py-1 rounded-full transition-all duration-200"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high px-3 py-1 rounded-full transition-all duration-200"
            href="#writing"
          >
            Writing
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high px-3 py-1 rounded-full transition-all duration-200"
            href="#"
          >
            Resume
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-primary hover:opacity-80 transition-all flex items-center justify-center">
            <span className="material-symbols-outlined !text-[20px]">
              dark_mode
            </span>
          </button>
          <button className="text-primary hover:opacity-80 transition-all flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-border-subtle">
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

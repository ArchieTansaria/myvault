import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function UsesPage() {
  const hardware = [
    { item: "MacBook Pro 14\" (M3 Pro)", desc: "Main workhorse for all development." },
    { item: "Keychron K3 Pro", desc: "Low profile mechanical keyboard." },
    { item: "Logitech MX Master 3S", desc: "The standard for productivity." },
    { item: "LG 27\" 4K Monitor", desc: "Crisp text for long coding sessions." },
  ];

  const software = [
    { item: "VS Code / Cursor", desc: "Primary IDE with Vim motions." },
    { item: "Warp", desc: "Rust-based terminal." },
    { item: "Arc Browser", desc: "Clean, organized web browsing." },
    { item: "Raycast", desc: "Spotlight replacement for Mac." },
  ];

  return (
    <>
      <Navbar />
      <main className="max-w-container-max mx-auto px-margin-page py-20 flex flex-col gap-section-gap pt-32">
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-status-red shrink-0"></div>
            <h1 className="font-headline-xl text-headline-xl italic text-primary">
              Uses
            </h1>
          </div>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to build software and stay productive.
          </p>

          {/* Hardware Section */}
          <div className="mt-8">
            <h2 className="font-headline-lg text-headline-lg italic text-primary mb-4">
              Hardware
            </h2>
            <div className="flex flex-col">
              {hardware.map((hw, idx) => (
                <div key={idx} className="group block py-4 border-b border-border-subtle hover:bg-surface-container-lowest transition-colors duration-200">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-body-md text-body-md font-semibold text-primary">
                      {hw.item}
                    </h3>
                    <p className="font-body-md text-on-surface-variant text-[13px]">
                      {hw.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Section */}
          <div className="mt-8">
            <h2 className="font-headline-lg text-headline-lg italic text-primary mb-4">
              Software
            </h2>
            <div className="flex flex-col">
              {software.map((sw, idx) => (
                <div key={idx} className="group block py-4 border-b border-border-subtle hover:bg-surface-container-lowest transition-colors duration-200">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-body-md text-body-md font-semibold text-primary">
                      {sw.item}
                    </h3>
                    <p className="font-body-md text-on-surface-variant text-[13px]">
                      {sw.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

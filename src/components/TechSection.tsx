export default function TechSection() {
  const techStack = [
    "AWS (ECS, Fargate, Lambda)",
    "Python",
    "Hyperconverged Infrastructure (HCI)",
    "Linux/OS Internals",
    "Networking Protocols",
  ];

  return (
    <section className="flex flex-col gap-element-gap">
      <div className="flex items-center gap-4">
        <div className="w-8 h-[1px] bg-status-red shrink-0"></div>
        <h2 className="font-headline-lg text-headline-lg italic text-primary">
          Tech
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="font-code-md text-code-md px-3 py-1.5 rounded border border-border-subtle bg-surface-container-lowest text-on-surface-variant"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

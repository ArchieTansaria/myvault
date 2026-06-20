export default function ProjectsSection() {
  const projects = [
    {
      title: "Cost-Optimized Serverless Queue",
      tags: ["AWS Fargate Spot", "Lambda", "BullMQ"],
      url: "#",
    },
    {
      title: "Cloud-FinOps-OpenEnv",
      tags: ["Python", "FinOps"],
      url: "#",
    },
    {
      title: "Project Dura",
      tags: ["AWS ECS", "IAM"],
      url: "#",
    },
  ];

  return (
    <section className="flex flex-col gap-element-gap" id="projects">
      <div className="flex items-center gap-4">
        <div className="w-8 h-[1px] bg-status-red shrink-0"></div>
        <h2 className="font-headline-lg text-headline-lg italic text-primary">
          Projects
        </h2>
      </div>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <a
            key={index}
            className="group block py-3 border-b border-border-subtle hover:bg-surface-container-lowest transition-colors duration-200"
            href={project.url}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <h3 className="font-body-md text-body-md font-semibold text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="font-code-md text-code-md px-2 py-1 rounded bg-surface-container-high text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

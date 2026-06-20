export default function WritingSection() {
  const articles = [
    {
      title: "Deep Dive into Virtual Memory and OSI Layers",
      date: "Oct 2023",
      url: "#",
    },
    {
      title: "Demystifying Online Proctoring Systems",
      date: "Aug 2023",
      url: "#",
    },
    {
      title: "Getting into Investing: A Beginner's Guide",
      date: "Jan 2023",
      url: "#",
    },
  ];

  return (
    <section className="flex flex-col gap-element-gap" id="writing">
      <div className="flex items-center gap-4">
        <div className="w-8 h-[1px] bg-status-red shrink-0"></div>
        <h2 className="font-headline-lg text-headline-lg italic text-primary">
          Writing
        </h2>
      </div>
      <div className="flex flex-col">
        {articles.map((article, index) => (
          <a
            key={index}
            className="group block py-4 border-b border-border-subtle hover:bg-surface-container-lowest transition-colors duration-200"
            href={article.url}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-body-md text-body-md text-primary transition-colors duration-200">
                {article.title}
              </h3>
              <span className="font-code-md text-code-md text-on-surface-variant">
                {article.date}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function AchievementsSection() {
  const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 translate-y-[-1px]">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );

  const achievements = [
    {
      award: "Winner",
      event: "DevDay Hackathon @apify@hackthisfall",
      date: "2025",
      description: (
        <>
          Engineered an autonomous{" "}
          <a href="https://apify.com/artistic_seal/dura" className="italic hover:text-primary transition-colors inline-flex items-center gap-1">
            Apify Actor (DURA) <ExternalLinkIcon />
          </a>{" "}
          designed to automate dependency risk analysis and mitigate vulnerabilities in software supply chains.
        </>
      ),
    },
    {
      award: "Winner",
      event: "HackToFuture 3.0 @EGIndia",
      date: "2025",
      description: "Developed MITO, a decentralized health record platform that gives patients full ownership of encrypted medical records while enabling secure, permission-based access for healthcare providers during emergencies.",
    },
    {
      award: "1st Runner Up",
      event: "iSolve Hackathon @NMIT",
      date: "2024",
      description: "Developed a smart corporate carpooling platform. Implemented efficient route and time-based matching algorithms within a 24-hour constraint to optimize commuter overlap and reduce redundant trips.",
    },
    {
      award: "\"Best Use of Data Award\"",
      event: "MLH Hack Week @MLH",
      date: "2023",
      description: "",
    },
  ];

  const renderWithTags = (text: string) => {
    return text.split(/(@\w+)/g).map((chunk, i) => {
      if (chunk.startsWith('@')) {
        return (
          <span 
            key={i} 
            className="inline-flex items-center px-2 py-[2px] mx-1 rounded-full border border-border-subtle bg-surface-container-lowest text-on-surface font-code-sm text-[11.5px] tracking-wide font-medium align-middle"
          >
            {chunk}
          </span>
        );
      }
      return chunk;
    });
  };

  return (
    <section className="flex flex-col gap-element-gap" id="achievements">
      <div className="flex items-center gap-4">
        <div className="w-8 h-[1px] bg-status-red shrink-0"></div>
        <h2 className="font-headline-lg text-headline-lg italic text-primary">
          Achievements
        </h2>
      </div>
      <div className="flex flex-col">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="group block py-4 border-b border-border-subtle hover:bg-surface-container-lowest transition-colors duration-200"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start md:items-center">
                <div className="flex flex-col">
                  <h3 className="font-body-md text-body-md font-semibold text-primary leading-relaxed">
                    {renderWithTags(achievement.event)}
                  </h3>
                  <span className="font-label-sm text-label-sm text-on-error-container mt-0.5 leading-relaxed">
                    {renderWithTags(achievement.award)}
                  </span>
                </div>
                <span className="font-code-md text-code-md text-on-surface-variant shrink-0 ml-4">
                  {achievement.date}
                </span>
              </div>
              {achievement.description && (
                <p className="font-body-md text-on-surface-variant text-[14px] mt-1">
                  {achievement.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

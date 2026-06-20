export default function AchievementsSection() {
  const achievements = [
    {
      title: "First Place - Global AI Hackathon",
      date: "Nov 2024",
      description: "Built an open-source autonomous agent for cloud infrastructure optimization.",
    },
    {
      title: "Best Dev Tool - Web3 Buildathon",
      date: "Mar 2024",
      description: "Created a serverless deployment pipeline for decentralized apps.",
    },
  ];

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
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-start md:items-center">
                <h3 className="font-body-md text-body-md font-semibold text-primary">
                  {achievement.title}
                </h3>
                <span className="font-code-md text-code-md text-on-surface-variant">
                  {achievement.date}
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant text-[13px]">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

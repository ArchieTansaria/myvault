import Navbar from "@/src/components/Navbar";
import Headline from "@/src/components/Headline";
import ProjectsSection from "@/src/components/ProjectsSection";
import TechSection from "@/src/components/TechSection";
import WritingSection from "@/src/components/WritingSection";
import AchievementsSection from "@/src/components/AchievementsSection";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-container-max mx-auto px-margin-page py-20 flex flex-col gap-section-gap pt-30">
        <Headline />
        <ProjectsSection />
        <TechSection />
        <WritingSection />
        <AchievementsSection />
      </main>
      <Footer />
    </>
  );
}

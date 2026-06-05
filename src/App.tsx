import CurrentProject from "./components/CurrentProject";
import EducationSection from "./components/EducationSection";
import PastProjects from "./components/PastProjects";
import ProfileCard from "./components/ProfileCard";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="w-full min-h-screen bg-neutral-900">
      <main className="mx-auto max-w-125 px-4 py-6 space-y-4">
        <ProfileCard />
        <CurrentProject />
        <PastProjects />
        <SkillsSection />
        <EducationSection />
      </main>
    </div>
  );
}

export default App;

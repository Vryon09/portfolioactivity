import { Separator } from "./ui/separator";

function SkillsSection() {
  return (
    <div className="text-white">
      <p className="text-2xl">skills</p>
      <Separator className="bg-neutral-600 my-2" />
      <div className="flex flex-col gap-1">
        <p>html</p>
        <p>css</p>
        <p>javascript</p>
        <p>typescript</p>
        <p>nodejs</p>
        <p>mongodb</p>
        <p>postgresql</p>
      </div>
    </div>
  );
}

export default SkillsSection;

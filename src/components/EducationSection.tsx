import { Separator } from "./ui/separator";

function EducationSection() {
  return (
    <div className="text-white">
      <p className="text-2xl">education</p>
      <Separator className="bg-neutral-600 my-2" />
      <div className="flex flex-col gap-1">
        <div>
          <p>sti college tanay</p>
          <p className="text-neutral-400">
            currently a 3rd year information technology student
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;

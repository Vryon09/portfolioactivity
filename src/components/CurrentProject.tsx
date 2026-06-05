import { Separator } from "./ui/separator";

function CurrentProject() {
  return (
    <div className="text-white">
      <p className="text-2xl">currently building</p>
      <Separator className="bg-neutral-600 my-2" />
      <div className="flex flex-col gap-1">
        <div>
          <p>clinicsync</p>
          <p className="text-neutral-400">
            clinic management system capstone project
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentProject;

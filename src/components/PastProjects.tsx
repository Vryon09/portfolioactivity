import { SquareArrowOutUpRight } from "lucide-react";
import { Separator } from "./ui/separator";

function PastProjects() {
  return (
    <div className="text-white">
      <p className="text-2xl">past projects</p>
      <Separator className="bg-neutral-600 my-2" />
      <div className="flex flex-col gap-1">
        <div>
          <a
            className="flex items-center justify-between gap-1 hover:text-neutral-300"
            href="https://questify-bfb3e.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            questify <SquareArrowOutUpRight className="size-4" />
          </a>
          <p className="text-neutral-400">gamified habit tracker</p>
        </div>

        <div>
          <a
            className="flex items-center justify-between gap-1 hover:text-neutral-300"
            href="https://reservaa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reserva <SquareArrowOutUpRight className="size-4" />
          </a>
          <p className="text-neutral-400">restaurant reservation system</p>
        </div>
      </div>
    </div>
  );
}

export default PastProjects;

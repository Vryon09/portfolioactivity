import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

function ProfileCard() {
  return (
    <Card className="rounded flex flex-row justify-between text-white bg-transparent px-4 border-neutral-600 border">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">Vryon Antonio</p>
        <p>Full Stack Developer</p>
        <p className="mt-2 text-neutral-400">
          Email me @ vryonantonio@gmail.com
        </p>
      </div>

      <Button variant="ghost" size="icon">
        <a
          href="https://github.com/Vryon09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </Button>
    </Card>
  );
}

export default ProfileCard;

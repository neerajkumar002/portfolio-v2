import { Github, SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <Link className="w-[300px] bg-white rounded-lg overflow-hidden hover:shadow-xl  transition-all  duration-500 ease-in-out border">
      <div className="w-full h-[200px]">
        <img
          src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="px-2 py-1  ">
        <h3 className="text-xl font-bold">Weather App</h3>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eveniet
          maxime officiis a error esse facilis excepturi deserunt obcaecati
          inventore! Consequatur repellat dolore obcaecati assumenda odio esse
          nulla, earum animi?
        </p>
        <div className="py-2 flex gap-2">
          <span className="flex items-center gap-2  bg-gray-200 font-semibold   w-fit px-3 rounded-xl text-[10px] py-1">
            React
          </span>
          <span className="flex items-center gap-2  bg-gray-200 font-semibold   w-fit px-3 rounded-xl text-[10px] py-1">
            React
          </span>
          <span className="flex items-center gap-2  bg-gray-200 font-semibold   w-fit px-3 rounded-xl text-[10px] py-1">
            React
          </span>
          <span className="flex items-center gap-2  bg-gray-200 font-semibold   w-fit px-3 rounded-xl text-[10px] py-1">
            React
          </span>
        </div>
      </div>
      <div className="flex gap-3 pb-2 px-2 ">
        <Link className="flex items-center gap-1  bg-black text-white w-fit px-3 rounded-xl text-sm py-1">
          <SquareArrowOutUpRight size={15} /> website
        </Link>
        <Link className="flex items-center gap-2  bg-black text-white w-fit px-3 rounded-xl text-sm py-1">
          <Github size={12} /> Github
        </Link>
      </div>
    </Link>
  );
};

export default ProjectCard;

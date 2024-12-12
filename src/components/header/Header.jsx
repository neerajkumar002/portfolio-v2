/* eslint-disable react/no-unescaped-entities */
import { Github, Linkedin, Twitter } from "lucide-react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-5 px-8">
      <div className="flex gap-3 items-center justify-center">
        <Avatar />
        <div>
          <h3 className="text-4xl font-bold tracking-tight first:mt-0">
            Hi, I'm Neeraj Kumar
          </h3>
          <p className="text-xl font-semibold tracking-tight">
            Frontend Developer. I like building things and helping people.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h3 className="font-bold text-xl tracking-tight">About</h3>
        <p className="italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          repudiandae ipsa unde natus est earum quae ex voluptatem molestiae,
          inventore accusamus nam, veniam possimus autem incidunt veritatis.
          Dolores, et! Minus?
        </p>
      </div>
      <div className="flex gap-4">
        <Link>
          <Linkedin />{" "}
        </Link>
        <Link>
          <Github />{" "}
        </Link>
        <Link>
          <Twitter />{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;

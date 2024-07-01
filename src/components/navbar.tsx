// components/Navbar.js
import { Home, Code, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="z-100">
      <div className="fixed top-0 left-0 w-full flex shadow-md lg:flex lg:justify-between lg:items-center lg:px-6 lg:py-4 ">
        <div className="flex justify-between items-center p-4 lg:p-0">
          <div className="text-xl lg:text-2xl font-bold"><span>{'{ rushabh-patil.co }'}</span></div>
        </div>
        <div className="hidden lg:flex lg:space-x-8">
          <Link href="#home" className="text-lg">
            /
          </Link>
          <Link href="#skills" className="text-lg">
            skills
          </Link>
          <Link href="#projects" className="text-lg">
            projects
          </Link>
        </div>
        <Button className="absolute top-4 right-4 lg:static lg:right-10 lg:top-auto  py-2 px-4 rounded lg:mr-16">
          Resume
        </Button>
      </div>
      <div className="fixed bottom-0 left-0 w-full  shadow-md lg:hidden flex justify-around items-center py-2">
        <Link href="#home" className="flex flex-col items-center">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="#skills" className="flex flex-col items-center">
          <Code className="w-6 h-6" />
          <span className="text-xs">Skills</span>
        </Link>
        <Link href="#projects" className="flex flex-col items-center">
          <Briefcase className="w-6 h-6" />
          <span className="text-xs">Projects</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

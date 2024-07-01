import React from "react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="">
      <Separator />

      <div className="flex justify-evenly m-4 ">
        <div className="flex justify-center items-center gap-4">
          <a
            href="
                https://www.linkedin.com/in/rushabh-ganesh-patil/"
            className="text-lg"
          >
            LinkedIn
          </a>
          <a
            href="
                http://www.github.com/Rushabh1134"
            className="text-lg"
          >
            Github
          </a>
          <a
            href="
                https://twitter.com/rushabhstwt"
            className="text-lg"
          >
            Twitter
          </a>
        </div>
        <div>
          <p className="text-center text-lg">&copy; 2024 Rushabh Patil</p>
        </div>
        <div>
          <p className="text-center text-lg">
            {"Made with <3, by Rushabh Patil"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

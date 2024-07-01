import { Link } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between p-6 sm:p-12 lg:p-24">
      <div className="flex flex-col sm:flex-row min-h-screen justify-center items-center gap-14 sm:gap-20 lg:gap-40">
        <div className="flex flex-col mt-10 justify-center items-start gap-5 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            👋 Hi, I&apos;m Rushabh Patil.{" "}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl">
            A people-first Product Designer with a passion for crafting
            delightful experiences across screens. With a keen eye for clean
            design, I am dedicated to creating elegant and visually appealing
            user experiences that elevate complex workflows.
          </p>
          <Button>Resume</Button>
        </div>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-9 border  ">
            <CardItem translateZ="100" className="w-full ">
              <Image
                src="/rush.jpg"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Hero;

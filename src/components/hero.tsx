import { Button } from "./ui/button";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter, FaX } from "react-icons/fa6";
import Image from "next/image";

import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between p-6 sm:p-12 lg:p-24">
      <div className="flex flex-col sm:flex-row min-h-screen justify-center items-center gap-14 sm:gap-20 lg:gap-40">
        <div className="flex flex-col mt-10 justify-center items-start gap-5 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            👋 Hi, I&apos;m Rushabh Patil.{" "}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mt-8">
            I&apos;m passionate about exploring the intersection of technology and innovation, and I&apos;m actively involved in projects that challenge and expand my understanding of computer systems and software development. Looking forward to connecting and sharing insights with fellow enthusiasts in the field!
          </p>
          <Button className="mt-8">Resume</Button>
          <div className="flex gap-8 mt-8">
            <Link href={""}>
              <FaGithub style={{ fontSize: "25px" }} />
            </Link>
            <Link href={""}>
              <FaLinkedin style={{ fontSize: "25px" }} />
            </Link>
            <Link href={""}>
              <FaDiscord style={{ fontSize: "25px" }} />
            </Link>
            <Link href={""}>
              <FaTwitter style={{ fontSize: "25px" }} />
            </Link>

          </div>
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

import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

const Certifications = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-8">
      <div className="flex justify-center text-4xl font-bold">
        code:certifications
      </div>
      <div className="flex justify-center gap-10 flex-wrap ">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <Image
              src="/projects/feedbackfog.png"
              width={500}
              height={200}
              alt="Picture of the author"
            />
          </CardContent>
          <CardHeader>
            <CardTitle>FeedbackFog</CardTitle>
            <CardDescription>
              A platform for collecting feedback from users.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col items-start gap-4">
            <Button>View Project</Button>
            <div className="text-sm flex gap-2">
              <span className="border bg-black text-white px-1 rounded">
                NextJS
              </span>
              <span className="border bg-cyan-700 text-white rounded px-1">
                Typescript
              </span>
              <span className="border bg-cyan-500 text-white rounded px-1">
                TailwindCSS
              </span>
              <span className="border bg-green-700 text-white rounded px-1">
                MongoDB
              </span>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <Image
              src="/projects/legalconsultio.png"
              width={500}
              height={200}
              alt="Picture of the author"
            />
          </CardContent>
          <CardHeader>
            <CardTitle>Legalconsultio</CardTitle>
            <CardDescription>
             A platform for consulting legal advice from expert: .
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col items-start gap-4">
            <Button>View Project</Button>
            <div className="text-sm flex gap-2">
              <span className="border bg-black text-white px-1 rounded">
                NextJS
              </span>
              <span className="border bg-cyan-700 text-white rounded px-1">
                Typescript
              </span>
              
              <span className="border bg-green-700 text-white rounded px-1">
                MongoDB
              </span>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Button>
          <Link href={"/projects"}>View all Projects</Link></Button>
      </div>
    </section>
  );
};

export default Certifications;

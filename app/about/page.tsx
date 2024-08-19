"use client";

import { subtitle, title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
export default function AboutPage() {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-12 w-full mt-10  ">
        <div className="md:w-1/2">
          <h1 className={title({ size: "md" })}>About Me</h1>
          <div className="mt-5"></div>
          <p >
            I started learning web basics from MMSIT in 2021 and then continued
            my education through Udemy. Later, I took an e-commerce tutorial
            course from MMCODER and successfully built my own e-commerce website
            using Laravel after completing that course in 2022. In 2023, I
            studied management and took an internship, which caused me to take a
            break from coding during that period At the end of 2023, I decided
            to update my tech stack from LAMP to MERN and built some web apps.
            In 2024, I learned React Native and bulit two app e-commerce and
            chat.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            width={400}
            height={300}
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            alt="Kyaw Khant Win"
          />
        </div>
      </div>

      <div className=" mt-12">
        <h1 className={title({ size: "sm", fullWidth: true })}>
          Avabiable Techs
        </h1>

        <div className="flex justify-between items-start ">
          {/* Stack  */}
          <div className="flex justify-center items-start flex-col ">
            <h1 className={subtitle()}>Stack</h1>

         <div className="flex justify-center items-start gap-10 ">
         <div className="flex justify-center items-start flex-col gap-4">
              <div className="flex gap-3 mt-4 flex-col ">
                <Image
                  width={50}
                  height={50}
                  src={"/logo/expo.png"}
                  alt="Expo"
                />
                <p>Expo / react native</p>
              </div>
              <div className="flex gap-3 mt-4 flex-col ">
                <Image
                  width={100}
                  height={80}
                  src={"/logo/socket.png"}
                  alt="socket"
                />
                <p>socket.io</p>
              </div>
              <div className="flex  gap-3 mt-4 flex-col">
                <Image
                  width={80}
                  height={60}
                  src={"/logo/react.png"}
                  alt="react"
                />
                <p>React</p>
              </div>
            </div>
            <div className="flex justify-center items-start flex-col gap-4">
            <div className="flex gap-3 mt-4 flex-col">
                <Image
                  width={45}
                  height={45}
                  src={"/logo/prisma.png"}
                  alt="prisma"
                />
                <p>primsa</p>
              </div>
              <div className="flex gap-3 mt-4 flex-col">
                <Image
                  className="bg-background bg-transparent"
                  width={80}
                  height={60}
                  src={"/logo/express.png"}
                  alt="express"
                />
                <p>Express JS</p>
              </div>
            </div>
         </div>
          </div>
          {/* framework */}
          <div className="flex justify-center items-start flex-col gap-4">
            <h1 className={subtitle()}>Framework</h1>

            <div className="flex gap-3 mt-4 flex-col">
              <Image
                width={50}
                height={50}
                src={"/logo/nest.png"}
                alt="Nest.js"
              />
              <p>Nest js</p>
            </div>
            <div className="flex gap-3 mt-4 flex-col">
              <Image
                width={50}
                height={50}
                src={"/logo/nextjs.png"}
                alt="next"
              />
              <p>Next.Js</p>
            </div>
          </div>

          {/* ui framework */}
          <div className="flex justify-center items-start flex-col gap-4">
            <h1 className={subtitle()}>Ui Framework</h1>

            <div className="flex gap-3 mt-4  flex-col">
              <Image
                width={50}
                height={50}
                src={"/logo/gluestack.png"}
                alt="Gluestack"
              />
              <p>GlueStack</p>
            </div>
            <div className="flex gap-3 mt-4 flex-col">
              <Image
                width={50}
                height={50}
                src={"/logo/paper.png"}
                alt="paper"
              />
              <p>Native Paper</p>
            </div>
            <div className="flex gap-3 mt-4 flex-col">
              <Image
                width={60}
                height={50}
                src={"/logo/tailwind.png"}
                alt="tailwind"
              />
              <p>Tailwind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

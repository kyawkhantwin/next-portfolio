"use client";

import { subtitle, title } from "@/components/primitives";
import TechLogo from "@/components/TechLogo";
import { Image } from "@nextui-org/image";
export default function AboutPage() {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-12 w-full  mt-2">
        <div className="md:w-2/3">
          <h1 className={title({ size: "md" })}>About Me</h1>
          <div className="mt-3"></div>
          <p>
          I’m a full-stack developer with a focus on React, React Native, and Next.js for web and mobile apps.
          On the backend, I use Node.js and Nest.js  to build scalable systems.
            With strong frontend and backend skills, I can handle any project.
            I’m also dedicated to learning and growing in my field, enjoy working with others, and am always ready for new challenges. 
          </p>          
        </div>
        <div className=" md:w-1/3 flex justify-center md:justify-end">
          <Image width={300} height={300} src="/kkw.jpg" alt="Kyaw Khant Win" />
        </div>
      </div>

      <div className=" mt-8">
        <h1 className={title({ size: "sm", fullWidth: true })}>
          Avabiable Techs
        </h1>

        <div className="flex flex-wrap  justify-between items-start ">
          {/* Stack  */}
          <div className="md:1/3 flex  justify-center items-start flex-col ">
         <h1 className={subtitle({bold:true})}> Stack</h1>


            <div className="block md:flex justify-center items-start gap-10 ">
              <div className="flex justify-center items-start flex-col gap-2">
                <TechLogo logo="expo.png" name={"Expo"} />
                <TechLogo logo="socket.png" name={"Socket.io"} />
                <TechLogo logo="react.png" name={"React"} />
              </div>
              <div className="flex justify-center items-start flex-col gap-2">
                <TechLogo logo="prisma.png" name={"Primsa"} />
                <TechLogo logo="express.png" name={"Express Js"} />
                <TechLogo logo="redux.png" name={"Redux"} />

              </div>
            </div>
          </div>
         <div className="md:w-2/3 flex flex-col md:flex-row justify-around items-start gap-3">
          {/* framework */}

         <div className="flex  justify-center items-start flex-col gap-2 ">
         <h1 className={subtitle({bold:true})}> Framework</h1>


            <TechLogo logo="nest.png" name={"Nest js"} />
            <TechLogo logo="nextjs.png" name={"Next.Js"} />
          </div>

          {/* ui framework */}
          <div className="flex mt-5 md:mt-0 justify-center items-start flex-col gap-2 ">
            <h1 className={subtitle({bold:true})}>Ui Framework</h1>

            <TechLogo logo="gluestack.png" name={"Gluestack"} />
            <TechLogo logo="paper.png" name={"Native Paper"} />
            <TechLogo logo="tailwind.png" name={"Tailwind Css"} />
          </div>
         </div>
        </div>
      </div>
    </section>
  );
}

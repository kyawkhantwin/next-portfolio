"use client";
import { subtitle, title } from "@/components/primitives";
import Project from "@/components/Project";

export default function DocsPage() {
  return (
    <div>
      <div className="flex flex-row flex-wrap  items-start gap-4 my-5">
        <h1 className={subtitle({ bold: true })}>
          React Native FullStack (Web+Mobile)
        </h1>

        <Project
          name={"Real Time Chatting Feature"}
          url= "/project/chatnative.png"
           
          link="https://expo.dev/preview/update?message=final&updateRuntimeVersion=1.0.0&createdAt=2024-08-28T10%3A22%3A07.132Z&slug=exp&projectId=335962c1-67de-4e7c-bd1c-ed8ab4005fa9&group=cfbeafbe-9418-42fd-9c65-bf90e44c9807"
          slug={"chat"}
        />
        <Project
          name={"Ecommerce"}
          url=
            "/project/ecommercenative.png"
            link="https://expo.dev/preview/update?message=update%20search%20bar&updateRuntimeVersion=1.0.0&createdAt=2024-08-28T08%3A27%3A46.226Z&slug=exp&projectId=8f98f760-fe52-4a0d-8212-8d23831e3cb7&group=f6a08f8e-d71a-4230-8f45-3a780f7af4a9"
       
          slug={"ecommerce-native"}
        />
       <p><span className="text-red-500 font-bold">Note:</span> Vercel only provides HTTPS servers; therefore, my HTTP backend server won&apos;t work.
       <br />
As a result, I can&apos;t provide a version of the website that uses HTTP backend.
       </p>


      </div>
      <div className="">
        <h1 className={subtitle({ bold: true })}>Laravel FullStack</h1>
        <div className="flex flex-row flex-wrap  items-start gap-4 my-5">
          <Project
            name={"MallMax"}
            url={"/project/mallmax.png"}
            slug={"mallmax"}
          />
        </div>
      </div>

      <div>
        <h1 className={subtitle({ bold: true })}>React FullStack</h1>
        <div className="flex flex-row flex-wrap  items-start gap-4 my-5">
          <Project
            name={"Book Store"}
            url={"/project/bookstore1.png"}
            slug={"bookstore"}
          />

          <Project
            name={"Restaurant"}
            url={"/project/restaurant1.png"}
            slug={"restaurant"}
          />
        </div>
      </div>
 

      <div>
        <h1 className={subtitle({ bold: true })}>Frontend</h1>
        <div className="flex flex-row flex-wrap  items-start gap-4 my-5">
          <Project
          link="https://tailwind-1-ten.vercel.app/"
            name={"Light Code"}
            url={"/project/lightcode1.png"}
            slug={"lightcode"}
          />
        </div>
      </div>
    </div>
  );
}

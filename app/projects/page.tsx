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
        link="https://expo.dev/preview/update?message=This%20is%20Real%20Time&updateRuntimeVersion=1.0.0&createdAt=2024-09-02T13%3A48%3A41.825Z&slug=exp&projectId=335962c1-67de-4e7c-bd1c-ed8ab4005fa9&group=aa8ca4b8-65f6-45ff-8d84-e4777bcaec40"
          name={"Real Time Chat (Updated)"}
          url="/project/chatnative.png"
          slug={"chat"}
        />
        <Project
        link="https://expo.dev/preview/update?message=done%20all%20i%20think&updateRuntimeVersion=1.0.0&createdAt=2024-08-30T15%3A58%3A44.197Z&slug=exp&projectId=8f98f760-fe52-4a0d-8212-8d23831e3cb7&group=98225e9f-789f-4975-a49c-2e0a3cbb68ca"
          name={"Ecommerce (Updated)"}
          url="/project/ecommercenative.png"
          slug={"ecommerce-native"}
        />
        <p>
        <p><span className="text-green-500 font-bold">PS:</span> Clik View To See Mobile app </p>

          <span className="text-red-500 font-bold">Note:</span> Vercel only
          provides HTTPS servers; therefore, my HTTP backend server won&apos;t
          work.
          <br />
          As a result, I can&apos;t provide a version of the website that uses
          HTTP backend.

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
            name={"Light Code"}
            link="https://tailwind-1-ten.vercel.app/"
            url={"/project/lightcode1.png"}
            slug={"lightcode"}
          />
        </div>
      </div>
    </div>
  );
}

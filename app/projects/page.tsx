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
          name={"Real Time Chat (Updated)"}
          link="https://expo.dev/preview/update?message=chat%20done&updateRuntimeVersion=1.0.0&createdAt=2024-09-10T05%3A08%3A27.233Z&slug=exp&projectId=335962c1-67de-4e7c-bd1c-ed8ab4005fa9&group=b2bc565d-fef6-48d9-8d97-54d9f5f6c11e"
          url="/project/chatnative.png"
          slug={"chat"}
        />
        <Project
          name={"Ecommerce (Updated)"}
          link="https://expo.dev/preview/update?message=ecommerce&updateRuntimeVersion=1.0.0&createdAt=2024-09-10T04%3A07%3A34.384Z&slug=exp&projectId=8f98f760-fe52-4a0d-8212-8d23831e3cb7&group=a91f3078-1638-4ffc-913b-a02af8deef9c"
          url="/project/ecommercenative.png"
          slug={"ecommerce-native"}
        />
        

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
            url={"/project/lightcode1.png"}
            slug={"lightcode"}
          />
        </div>
      </div>
    </div>
  );
}

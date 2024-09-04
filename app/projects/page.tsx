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
          url="/project/chatnative.png"
          slug={"chat"}
        />
        <Project
          name={"Ecommerce (Updated)"}
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

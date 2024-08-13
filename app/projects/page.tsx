'use client'
import { subtitle, title } from "@/components/primitives";
import Project from "@/components/Project";

export default function DocsPage() {
  return (
    <div >
      <h1 className={title({size:'sm'})}>Projects</h1>


      <h1 className={subtitle()}>React FullStack</h1>
      <div  className="flex flex-row flex-wrap  items-start gap-4 my-5">
      <Project name={'Book Store'} url={'/project/bookStore.png'}/>
      
      <Project name={'Restuant '} url={'/project/restuant.png'}/>
      </div>

      <h1 className={subtitle() }>Laravel FullStack</h1>
      <div   className="flex flex-row flex-wrap  items-start gap-4 my-5">
      <Project name={'MallMax'} url={'/project/mallmax.png'}/>
      </div>

      <h1 className={subtitle()}>Frontend</h1>
      <div  className="flex flex-row flex-wrap  items-start gap-4 my-5">
      <Project name={'light Code'} url={'/project/lighCode.png'}/>

      </div>



    </div>
  );
}

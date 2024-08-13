import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Image} from "@nextui-org/image";



export default function Home() {

  
  return (
    <section className="flex flex-col items-center justify-center    " style={{ height: 'calc(100% - 100px)'}}>
      <div>
      <div className="inline-block max-w-lg">
        <h1 className={title({class: 'whitespace-nowrap'}) }>  <span className={title({ color: "blue" })} >Welcome </span> To My Portfolio</h1>
        <br/>
        <h1 className={title()}>I'm </h1>
        <h1 className={title({ color: "cyan" })}>Kyaw Khant Win&nbsp;</h1>
        <br />
        
        <h2 className={subtitle({ class: "mt-4" })}>
         React Native Full Stack Developer
        </h2>
      </div>

      <div className="flex gap-3 mt-4">
        
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Messenger
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
      </div>

     

     
    </section>
  );
}

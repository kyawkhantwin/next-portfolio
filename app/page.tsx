"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";  // Import Head from next/head
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Snippet } from "@nextui-org/snippet";
import { subtitle, title } from "@/components/primitives";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    setIsMobile(/Mobi|Android/i.test(userAgent));
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>🔗 Check Out My Portfolio</title>
        <meta name="title" content="🔗 Check Out My Portfolio" />
        <meta
          name="description"
          content="Explore my portfolio to see my projects, skills, and experiences. Feel free to reach out if you have any questions or want to connect! 😊"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next-portfolio-bay-one.vercel.app/" />
        <meta property="og:title" content="🔗 Check Out My Portfolio" />
        <meta
          property="og:description"
          content="Explore my portfolio to see my projects, skills, and experiences. Feel free to reach out if you have any questions or want to connect! 😊"
        />
        <meta property="og:image" content="/hero.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://next-portfolio-bay-one.vercel.app/" />
        <meta property="twitter:title" content="🔗 Check Out My Portfolio" />
        <meta
          property="twitter:description"
          content="Explore my portfolio to see my projects, skills, and experiences. Feel free to reach out if you have any questions or want to connect! 😊"
        />
        <meta property="twitter:image" content="/hero.png" />
      </Head>

      <section
      className="flex text-3xl flex-col items-center justify-center w-full"
      style={{ height: "calc(100% - 100px)" }}>
        <div >
          <h1 className={title({ class: "whitespace-nowrap" })}>
            <span className={title({ color: "blue" })}>Welcome </span> To My
            Portfolio
          </h1>
          <br />
          <h1 className={title()}>
            I&apos;m
            <span className={title({ color: "cyan" })}>
              {" "}
              Kyaw Khant Win&nbsp;
            </span>
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            React Native Full Stack Developer
          </h2>
          <br />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 mt-5">
          <Link
            isExternal
            className={buttonStyles({
              color: "secondary",
              radius: "full",
              variant: "shadow",
            })}
            href={isMobile ? siteConfig.links.mobileMessenger :  siteConfig.links.webMessenger }>
            <Image
              src="/messenger.png"
              width={20}
              height={20}
              alt="messenger"
            />
            Messenger
          </Link>
          <div className={buttonStyles({ variant: "flat", radius: "full" })}>
            <Image src="/gmail.png" width={20} height={20} alt="gmail" />
            <Snippet symbol="" variant="bordered" className="border-0">
              kyawkhantwincc@gmail.com
            </Snippet>
          </div>
          <div className={buttonStyles({ variant: "bordered", radius: "full" })}>
            <Image src="/phone.png" width={20} height={20} alt="phone" />
            <Snippet symbol="" variant="bordered" className="border-0">
              +95 9457597837
            </Snippet>
          </div>
      </div>
    </section>
    </>

  );
}

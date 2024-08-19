"use client";

import { subtitle } from "@/components/primitives";
import { getDataBaseOnRoute } from "@/lib/projectsData";
import { Image } from "@nextui-org/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";

type Data = {
  name: string;
  images: string[];
  stacks: string[];
  features: string[];
  description: string;
};

const Page = () => {
  const { slug } = useParams();
  const [data, setData] = useState<Data | undefined>(undefined);
  const descriptionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (slug) {
      const dynamicData = getDataBaseOnRoute(slug as "bookstore");
      setData(dynamicData);
    }
  }, [slug]);

  useEffect(() => {
    if (data?.description && descriptionRef.current) {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = data.description;
      descriptionRef.current.innerHTML = '';
      descriptionRef.current.appendChild(newDiv);
    }
  }, [data]);

  return (
    <div className="container mx-auto space-y-5">
      {/* Name */}
      <p className="my-4 text-lg lg:text-xl text-default-600">
        <span className="font-bold">Name</span>: {data?.name}
      </p>

      {/* Image */}
      <div className="flex flex-col lg:flex-row items-center justify-start gap-2 md:gap-4">
        <div className="lg:w-2/3 w-full">
          <Image
            alt={data?.name}
            className="object-cover rounded-xl"
            src={data?.images[0]}
          />
        </div>
        <div className="lg:w-1/5 w-full flex md:flex-col gap-2 md:gap-4">
          {data?.images?.map((image, i) => (
            <Image
              key={i}
              alt={"Thumbnail " + i}
              className="object-cover rounded-xl"
              src={image}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <h1 className={subtitle({ bold: true })}>Description</h1>
        <div ref={descriptionRef}></div>
      </div>

      <div className="grid grid-cols-3">
        {/* Stack */}
        <div>
          <h1 className={subtitle({ bold: true })}>Stack</h1>
          <ul className="list-disc pl-5">
            {data?.stacks.map((stack, i) => <li key={i}>{stack}</li>)}
          </ul>
        </div>
        <div className="md:hidden"></div>

        {/* Features */}
        <div className="justify-self-center">
          <h1 className={subtitle({ bold: true })}>Features</h1>
          <ul className="list-disc pl-5">
            {data?.features.map((feature, i) => <li key={i}>{feature}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;

'use client'
import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter, Link} from "@nextui-org/react";

type projectCard = {
  name : string,
  url:string,
  slug:string
}


export default function Project ({name,url,slug} : projectCard) {
  return (
    <Card className="py-4 w-full md:w-[45%]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className=" text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">
        <Image
          alt={name}
          className="object-cover rounded-xl "
          src={url}
         
        />
      </CardBody>
      <CardFooter>
    <Link href={"/projects/" + slug} underline="hover"  color="success" showAnchorIcon  >Detail  </Link>
      </CardFooter>
    </Card>
  );
}

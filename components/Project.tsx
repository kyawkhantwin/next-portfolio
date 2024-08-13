'use client'
import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";

export default function Project({name,url}) {
  return (
    <Card className="py-4 w-96">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl "
          src={url}
         
        />
      </CardBody>
      <CardFooter>

      </CardFooter>
    </Card>
  );
}

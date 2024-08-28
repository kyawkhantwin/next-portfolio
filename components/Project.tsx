import React from "react";
import { Card, CardHeader, CardBody, Image, CardFooter, Link, Button } from "@nextui-org/react";

type ProjectCard = {
  name: string;
  url: string;
  slug: string;
  link?:string;
};

export default function Project({ name, url, slug ,link }: ProjectCard) {
  return (
    <Card className="py-4 w-full md:w-[45%]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={name}
          className="object-cover rounded-xl"
          src={url}
        />
      </CardBody>
      <CardFooter className="w-full flex justify-between items-center">
      {link &&<Button color="secondary" >
        <Link isExternal href={link} style={{ color: 'white' }}>
  View
</Link>


        
        </Button>}
        <Link href={"/projects/" + slug} underline="hover" color="success" showAnchorIcon>
          Detail
        </Link>

       

      </CardFooter>
    </Card>
  );
}

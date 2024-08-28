import { Image } from "@nextui-org/image";
import React from "react";

interface Tech {
  logo: string;
  name: string;
}

const TechLogo: React.FC<Tech> = ({ logo, name }) => {
  return (
    <div className="flex gap-3 mt-4 flex-col">
      <p>{name}</p>
      <Image width={60} height={60} src={`/logo/${logo}`} alt={name} />
    </div>
  );
};

export default TechLogo;

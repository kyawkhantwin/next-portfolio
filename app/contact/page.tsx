"use client";
import { subtitle, title } from "@/components/primitives";
import { Input, Textarea } from "@nextui-org/react";

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-8">
      <div className="md:w-1/2 w-full">
        <h1 className={title({ size: "sm" })}>Contact Me</h1>
<div className="mt-3 md:mt-5"></div>
        <p className={subtitle() }>
          Thank you for visiting my portfolio! I’m always open to potential
          collaborations, or any questions you might have. Whether you're
          interested in my work or just want to chat about with me, I’d love to
          hear from you.
        </p>
      </div>

      <form className="space-y-4 mt-3 md:mt-5 md:w-1/3">
        <div className="flex flex-col w-full">
          <Input
            type="text"
            label="Name"
            variant="bordered"
            className=" w-full"
          />
        </div>

        <div className="flex flex-col">
          <Input type="email" label="Email" variant="bordered" className=" " />
        </div>

        <div className="flex flex-col">
          <Textarea
            label="Description"
            variant="bordered"
            placeholder="Enter your description"
            className=""
          />
        </div>
      </form>
    </div>
  );
}

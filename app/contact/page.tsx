"use client";
import { useState } from "react";
import { subtitle, title } from "@/components/primitives";
import { Button, Input, Textarea } from "@nextui-org/react";
import { sendContactForm } from "@/lib/api";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");  // New state for phone number
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !subject || !message) {
      alert("Please fill out all fields.");
      return;
    }
    try {
      await sendContactForm({ name, email, phone, subject, message });
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      alert("Form submitted successfully!");
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-8">
      <div className="md:w-1/2 w-full">
        <h1 className={title({ size: "sm" })}>Contact Me</h1>
        <div className="mt-3 md:mt-5"></div>
        <p className={subtitle()}>
        Thank you for visiting my portfolio! You can ask any questions you might have. Whether you are
          interested in my portfolio or just want to talk with me, I would  love to
          hear from you.
        </p>
      </div>

      <form className="space-y-4 mt-3 md:mt-5 md:w-1/3" onSubmit={submitHandler}>
        <div className="flex flex-col w-full">
          <Input
            type="text"
            label="Name"
            variant="bordered"
            className="w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <Input
            type="email"
            label="Email"
            variant="bordered"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <Input
            type="text"
            label="Phone"
            variant="bordered"
            className="w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <Input
            type="text"
            label="Subject"
            variant="bordered"
            className="w-full"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <Textarea
            label="Message"
            variant="bordered"
            placeholder="Enter your message"
            className="w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="justify-self-end"
            color="primary"
            variant="shadow"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

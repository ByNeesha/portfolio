import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
require("dotenv").config();

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(
      "process.env.NEXT_PUBLIC_SERVICE_ID :>> ",
      process.env.NEXT_PUBLIC_SERVICE_ID
    );
    console.log(
      "process.env.NEXT_PUBLIC_TEMPLATE_ID :>> ",
      process.env.NEXT_PUBLIC_TEMPLATE_ID
    );
    console.log(
      "process.env.NEXT_PUBLIC_USER_ID :>> ",
      process.env.NEXT_PUBLIC_USER_ID
    );

    e.preventDefault();
    const target = e.target as HTMLFormElement;
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text || "Unknown error occurred",
          });
        }
      );
    target.reset();
  };

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Heb ik wat jij nodig hebt?{" "}
          <span className="decoration-green-500/50 underline">
            Stuur mij een berichtje!
          </span>
        </h4>
        <Form
          onSubmit={handleOnSubmit}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <Form.Field
              control={Input}
              name="firstName"
              placeholder="Voornaam"
              required
              className="contactInput"
            />
            <Form.Field
              control={Input}
              name="lastName"
              placeholder="Achternaam"
              required
              className="contactInput"
            />
          </div>
          <Form.Field
            control={Input}
            name="email"
            placeholder="E-mail"
            required
            className="contactInput"
          />
          <Form.Field
            control={TextArea}
            name="message"
            placeholder="Vraag of opmerking"
            required
            className="contactInput"
          />
          <Button
            type="submit"
            className="bg-green-500/50 py-5 px-10 rouned-md text-gray-400 font-bold text-lg  focus:bg-green-500 focus:text-gray-900 hover:bg-green-500 hover:text-gray-900"
          >
            Verzend
          </Button>
        </Form>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-green-500 h-7 w-7 animate-pulse" />
          <p className="text-2xl">Delft</p>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Contact;

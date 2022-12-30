import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./button";
import styled from "styled-components";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactForm = (): JSX.Element => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: { ok: false, msg: "" },
  });
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({ submitting: true, status: { ok, msg } });
  };
  const onSubmit = (data: Inputs, e: React.BaseSyntheticEvent | undefined) => {
    const payload = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    fetch("/.netlify/functions/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then(() => {
        e?.target.reset();
        handleServerResponse(true, "Submitted!");
      })
      .catch((error) => {
        alert(error);
        console.error(error);
        handleServerResponse(false, error.toString());
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <P>
        <label>
          Your Name
          <br />
          <Input
            name="name"
            placeholder="Enter your name"
            type="text"
            data-testid="name"
            ref={register({ required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </label>
      </P>
      <P>
        <label>
          {" "}
          Your email
          <br />
          <Input
            name="email"
            type="email"
            data-testid="email"
            placeholder="Enter your email"
            ref={register({
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
              required: true,
            })}
          />
          {errors.email && (
            <span>This field is required and only email format</span>
          )}
        </label>
      </P>
      <P>
        <label>
          Subject
          <br />
          <Input
            name="subject"
            type="text"
            maxLength={30}
            placeholder="Subject here..."
            data-testid="subject"
            ref={register({ required: true })}
          />
          {errors.subject && <span>This field is required</span>}
        </label>
      </P>
      <P>
        <label>
          Message
          <br />
          <TextArea
            name="message"
            placeholder="Something writing..."
            rows={6}
            cols={25}
            data-testid="message"
            ref={register({ required: true })}
          />
          {errors.message && <span>This field is required</span>}
        </label>
      </P>
      <Button
        dark={serverState.submitting && serverState.status.ok}
        disabled={serverState.submitting && serverState.status.ok}
        data-testid="submit"
        style={{ width: "100%" }}
      >
        {serverState.submitting && serverState.status.ok
          ? serverState.status.msg
          : "Submit"}
      </Button>
    </Form>
  );
};

const Form = styled.form`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  width: 40%;
`;

const Input = styled.input`
  width: 100%;
  color: black;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid #cc6666;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  color: black;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid #cc6666;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
`;

const P = styled.p`
  margin-bottom: 0px;
`;

export default ContactForm;

import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Button from "./button";
import styled from "styled-components";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

export const ContactForm = (): JSX.Element => {
  const [serverState, setServerState] = useState({submitting: false, status: {ok: false, msg: ""}});
  const {register, handleSubmit, formState: { errors }} = useForm<Inputs>()
  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({submitting: true, status: {ok, msg}})
  };
  const onSubmit = (data: Inputs, e: any) => {
    const payload = {name: data.name, email: data.email, subject: data.subject, message: data.message}
    fetch('/.netlify/functions/contact', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
      .then(() => {
        e.target.reset();
        handleServerResponse(true, "Submitted!");
      })
      .catch((error) => {
        alert(error)
        console.error(error)
        handleServerResponse(false, error.toString());
      });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <P>
        <label>Your Name<br/>
          <Input
            placeholder="Enter your name"
            type="text"
            {...register("name", {required: true})}/>
          {errors.name && <span>This field is required</span>}
        </label>
      </P>
      <P>
        <label> Your email<br/>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", {required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i})}/>
          {errors.email && <span>This field is required and only email format</span>}
        </label>
      </P>
      <P>
        <label>
          Subject<br/>
          <Input
            type="text"
            maxLength={30}
            placeholder="Subject here..."
            {...register("subject", {required: true})}/>
          {errors.subject && <span>This field is required</span>}
        </label>
      </P>
      <P>
        <label>
          Message<br/>
          <TextArea
              placeholder="Something writing..." rows={6} cols={25} {...register("message", {required: true})}/>
          {errors.message && <span>This field is required</span>}
        </label>
      </P>
      <Button dark={serverState.submitting && serverState.status.ok}
              disabled={serverState.submitting && serverState.status.ok}>
        {serverState.submitting && serverState.status.ok ? serverState.status.msg : 'Submit'}
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
  width: 100%
`;

const TextArea = styled.textarea`
  width: 100%;
`;

const P = styled.p`
  margin-bottom: 0px;
`;

export default ContactForm

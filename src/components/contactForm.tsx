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
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
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
      <Label>Your Name</Label>
      {errors.name && <span>This field is required</span>}
      <Input
        placeholder="Enter your name"
        type="text"
        data-testid="name"
        {...register("name", { required: true })}
      />
      <Label>Your email</Label>
      {errors.email && (
        <span>This field is required and only email format</span>
      )}
      <Input
        type="email"
        data-testid="email"
        placeholder="Enter your email"
        {...register("email", {
          pattern:
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
          required: true,
        })}
      />
      <Label>Subject</Label>
      {errors.subject && <span>This field is required</span>}
      <Input
        type="text"
        maxLength={30}
        placeholder="Subject here..."
        data-testid="subject"
        {...register("subject", { required: true })}
      />
      <Label>Message</Label>
      {errors.message && <span>This field is required</span>}
      <TextArea
        placeholder="Something writing..."
        rows={6}
        cols={25}
        data-testid="message"
        {...register("message", { required: true })}
      />
      <SubmitButton
        dark={serverState.submitting && serverState.status.ok}
        disabled={serverState.submitting && serverState.status.ok}
        data-testid="submit"
      >
        {serverState.submitting && serverState.status.ok
          ? serverState.status.msg
          : "Submit"}
      </SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  width: 90%;
  max-width: 500px; /* 最大幅を設定してレスポンシブに */
  background-color: #f5f5f5; /* 軽い背景色で区別 */
  border-radius: 10px; /* 角を丸く */
  box-shadow: 0 4px 8px rgb(0 0 0 / 10%); /* 影を付けて浮かび上がらせる */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd; /* 薄い境界線 */
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px; /* 読みやすいフォントサイズ */
  &:focus {
    border-color: #007bff; /* フォーカス時に色を変える */
    box-shadow: 0 0 0 2px rgb(0 123 255 / 25%); /* フォーカスが明確になるように */
  }
`;

const TextArea = styled(Input).attrs({ as: "textarea" })`
  height: auto; /* 自動で高さ調整 */
  resize: vertical; /* 垂直方向のリサイズのみを許可 */
`;

const Label = styled.label`
  margin-right: auto;
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

export default ContactForm;

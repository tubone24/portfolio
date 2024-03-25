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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  width: 90%;
  max-width: 500px; // 最大幅を設定してレスポンシブに
  background-color: #f5f5f5; // 軽い背景色で区別
  border-radius: 10px; // 角を丸く
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 影を付けて浮かび上がらせる
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd; // 薄い境界線
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px; // 読みやすいフォントサイズ
  &:focus {
    border-color: #007bff; // フォーカス時に色を変える
    box-shadow: 0 0 0 2px rgba(0,123,255,.25); // フォーカスが明確になるように
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  height: auto; // 自動で高さ調整
  resize: vertical; // 垂直方向のリサイズのみを許可
`;

const P = styled.p`
  margin-bottom: 10px;
  width: 100%;
`;

export default ContactForm;

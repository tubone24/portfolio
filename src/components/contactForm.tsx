import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Button from "./button";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

export const ContactForm = (): JSX.Element => {
  const [serverState, setServerState] = useState({submitting: false, status: {ok: false, msg: ""}});
  const {register, handleSubmit, errors} = useForm<Inputs>()
  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({submitting: true, status: {ok, msg}})
  };
  const onSubmit = (data: Inputs, e: any) => {
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("subject", data.subject)
    formData.append("message", data.message)
    fetch('https://getform.io/f/897f187e-876d-42a7-b300-7c235af72e6d', {
      method: 'POST',
      body: formData
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <label>Your Name<br/>
          <input
            name="name"
            placeholder="Enter your name"
            type="text"
            ref={register({required: true})}/>
          {errors.name && <span>This field is required</span>}
        </label>
      </p>
      <p>
        <label> Your email<br/>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            ref={register({
              pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
              required: true
            })}/>
          {errors.email && <span>This field is required and only email format</span>}
        </label>
      </p>
      <p>
        <label>
          Subject<br/>
          <input
            name="subject"
            type="text"
            maxLength={30}
            placeholder="Subject here..."
            ref={register({required: true})}/>
          {errors.subject && <span>This field is required</span>}
        </label>
      </p>
      <p>
        <label>
          Message<br/>
          <textarea
            name="message" placeholder="Something writing..." rows={6} cols={25} ref={register({required: true})}/>
          {errors.message && <span>This field is required</span>}
        </label>
      </p>
      <Button dark={serverState.submitting && serverState.status.ok}
              disabled={serverState.submitting && serverState.status.ok}>
        {serverState.submitting && serverState.status.ok ? serverState.status.msg : 'Submit'}
      </Button>
    </form>
  );
}

export default ContactForm

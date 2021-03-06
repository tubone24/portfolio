import styled, {css} from "styled-components";
import {media} from "../utils/style";
import Button from "../components/button";
import React from "react";
import { useForm } from "react-hook-form";

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`

const Title = styled.h1<{ small?: boolean }>`
  font-family: 'Raleway';
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
  props.small &&
  css`
      font-size: 24px;
      letter-spacing: 2px;
      font-weight: 400;
      line-height: 24px;
    `}
`

const Section = styled.div<{ center?: boolean; dark?: boolean }>`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: 'Lato';
  }

  p {
    margin-bottom: 64px;
    font-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
  props.center &&
  css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `}
    `}

  ${props =>
  props.dark &&
  css`
      background: #020d05;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #fff;
        font-weight: 700;
      }
      h4 {
        color: #fff;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
    `}
`

const Item = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h6 {
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
  ${media.xs`
    width: 90%;

  `}
`

const HomeButton = styled(Button)`
  position: absolute;
  bottom: 35%;
  left: 20%;
`

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

const Contact = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = data => console.log(data);

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input
      name="name"
      placeholder="Your name"
      type="text"
      ref={register({ required: true })} />
    {errors.name && <span>This field is required</span>}
    <input name="email" ref={register({ pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i })} />
    {errors.email && <span>This field is required</span>}

    <input type="submit" />
  </form>
);
}

export default Contact

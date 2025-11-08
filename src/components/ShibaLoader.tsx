import React from "react";
import styled, { keyframes } from "styled-components";

const rotating = keyframes`
  from {
    transform: rotate(720deg);
  }
  to {
    transform: none;
  }
`;

const rotatingHead = keyframes`
  from {
    transform: rotate(720deg) rotate(90deg);
  }
  to {
    transform: rotate(0deg) rotate(30deg);
  }
`;

const rotatingBody = keyframes`
  from {
    transform: rotate(720deg) rotate(0deg);
  }
  to {
    transform: rotate(0deg) rotate(-8deg);
  }
`;

const rotatingTail = keyframes`
  from {
    transform: rotate(720deg) rotate(-28deg);
  }
  to {
    transform: rotate(0deg) rotate(-28deg);
  }
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 12em;
  z-index: 10;
  pointer-events: none;

  @media (max-width: 768px) {
    max-width: 8em;
  }
`;

const ShibaContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 20em;
  overflow: hidden;
  background-color: transparent;

  &::before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &:hover > * {
    animation-play-state: paused;
  }

  &:active > * {
    animation-play-state: running;
  }
`;

const ShibaPart = styled.div<{ delay?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${rotating} 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
  animation-delay: ${(props) => props.delay || 0}s;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    background-size: 200%;
    background-repeat: no-repeat;
    background-image: url("/loading.png");
  }
`;

const ShibaHead = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${rotatingHead} 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    background-size: 200%;
    background-repeat: no-repeat;
    background-image: url("/loading.png");
    top: -2%;
    right: -2%;
    background-position: 100% 0%;
    transform-origin: 0% 100%;
  }
`;

const ShibaTail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${rotatingTail} 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
  animation-delay: 0.2s;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    background-size: 200%;
    background-repeat: no-repeat;
    background-image: url("/loading.png");
    left: -2%;
    bottom: -2%;
    background-position: 0% 100%;
    transform-origin: 100% 0%;
  }
`;

const ShibaBody = styled.div<{ delay?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${rotatingBody} 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
  animation-delay: ${(props) => props.delay || 0.1}s;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    background-size: 200%;
    background-repeat: no-repeat;
    background-image: url("/loading.png");
    right: -3%;
    bottom: -3%;
    background-position: 100% 100%;
    transform-origin: 0% 0%;
  }
`;

type ShibaLoaderProps = {
  show: boolean;
};

export const ShibaLoader: React.FC<ShibaLoaderProps> = ({ show }) => {
  React.useEffect(() => {
    console.log("ShibaLoader - show:", show);
  }, [show]);

  if (!show) return null;

  return (
    <LoaderWrapper>
      <ShibaContainer>
        <ShibaBody delay={0.1} />
        <ShibaBody delay={0.2} />
        <ShibaTail />
        <ShibaHead />
      </ShibaContainer>
    </LoaderWrapper>
  );
};

export default ShibaLoader;

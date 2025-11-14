import React from "react";
import Hero from "./hero";
import { useRandomHeroImage } from "../hooks/useHeroImages";

type Props = {
  fillPage?: boolean;
  className?: string;
  onLoadingChange?: (isLoading: boolean) => void;
};

const LocalHero = (props: Props) => {
  const selectedImage = useRandomHeroImage();

  if (!selectedImage) {
    return (
      <Hero
        img=""
        thumbnail=""
        aspectRatio={0}
        {...props}
      />
    );
  }

  return (
    <Hero
      img={selectedImage.childImageSharp.heroFluid.src}
      thumbnail={selectedImage.childImageSharp.heroFixed.src}
      aspectRatio={selectedImage.childImageSharp.heroFluid.aspectRatio}
      {...props}
    />
  );
};

export default LocalHero;

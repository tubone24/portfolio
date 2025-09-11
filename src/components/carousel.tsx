import React, { useState } from "react";
import NukaCarousel from "nuka-carousel";
import Img from "gatsby-image";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Lightbox from "react-images";
import { useCarouselImages } from "../hooks/useHeroImages";

type Props = {
  // 既存のimagesプロパティは削除し、代わりにフックを使用
};

export const Carousel = (_props: Props): JSX.Element => {
  const heroImages = useCarouselImages();
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const gotoPrevious = () => {
    setCurrentImage(currentImage - 1);
  };

  const gotoNext = () => {
    setCurrentImage(currentImage + 1);
  };

  const gotoImage = (index: number) => {
    setCurrentImage(index);
  };

  const handleClickImage = () => {
    if (currentImage === heroImages.length - 1) return;
    gotoNext();
  };

  const getTitleFromFilename = (filename: string) => {
    if (filename.includes("enosham") || filename.includes("enoshoma"))
      return "江ノ島";
    if (filename.includes("geshoku")) return "月食";
    if (filename.includes("gokurakuzi")) return "極楽寺";
    if (filename.includes("hongkong")) return "香港";
    if (filename.includes("izu")) return "伊豆";
    if (filename.includes("kyoto_osaka")) return "京都・大阪";
    if (filename.includes("kyotonara")) return "京都・奈良";
    if (filename.includes("miyazaki")) return "宮崎";
    if (filename.includes("naraosaka")) return "奈良・大阪";
    if (filename.includes("oarai")) return "大洗";
    if (filename.includes("parau")) return "パラオ";
    if (filename.includes("thai")) return "タイ";
    if (filename.includes("ume")) return "梅";
    if (filename.includes("umi")) return "海";
    if (filename.includes("夜景")) return "夜景";
    return "風景";
  };

  // Lightbox用画像データ（4K画像を使用）
  const lightboxImages = heroImages.map((image) => ({
    src: image.childImageSharp.lightboxFluid.src,
    caption: getTitleFromFilename(image.name),
  }));

  const images = heroImages.map((image, index) => {
    return (
      <div
        key={image.name}
        style={{
          position: "relative",
          width: "85%",
          margin: "0 auto",
          paddingTop: "63.75%", // 4:3 aspect ratio scaled to 85% (75% * 0.85 = 63.75%)
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
          cursor: "pointer",
        }}
        onClick={() => openLightbox(index)}
      >
        <Img
          fluid={image.childImageSharp.carouselFluid}
          alt={getTitleFromFilename(image.name)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          imgStyle={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
          placeholderStyle={{
            filter: "blur(20px)",
          }}
        />
      </div>
    );
  });

  return (
    <div>
      <NukaCarousel wrapAround dragging autoplay transitionMode="scroll3d">
        {images}
      </NukaCarousel>
      <Lightbox
        currentImage={currentImage}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        images={lightboxImages}
        isOpen={lightboxIsOpen}
        onClickImage={handleClickImage}
        onClickNext={gotoNext}
        onClickPrev={gotoPrevious}
        onClickThumbnail={gotoImage}
        onClose={closeLightbox}
        theme={{
          container: {
            background: "rgba(0, 0, 0, 0.9)",
          },
          image: {
            maxWidth: "90vw",
            maxHeight: "90vh",
            objectFit: "contain",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
          },
          close: {
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 9999,
          },
        }}
      />
    </div>
  );
};

export default Carousel;

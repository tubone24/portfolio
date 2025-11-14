import React, { useState } from "react";
import { CustomCarousel } from "./CustomCarousel";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useCarouselImages } from "../hooks/useHeroImages";

type Props = {
  // 既存のimagesプロパティは削除し、代わりにフックを使用
};

export const Carousel = (_props: Props): JSX.Element => {
  const heroImages = useCarouselImages();
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentIndex(0);
    setLightboxIsOpen(false);
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
  const slides = heroImages.map((image) => ({
    src: image.childImageSharp.lightboxFluid.src,
    title: getTitleFromFilename(image.name),
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
        <img
          src={image.childImageSharp?.carouselFluid?.src}
          alt={getTitleFromFilename(image.name)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            filter: "blur(0)", // 旧 placeholderStyle 相当は未適用
          }}
          loading="lazy"
        />
      </div>
    );
  });

  return (
    <div>
      <CustomCarousel wrapAround dragging autoplay>
        {images}
      </CustomCarousel>
      <Lightbox
        open={lightboxIsOpen}
        close={closeLightbox}
        index={currentIndex}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
      />
    </div>
  );
};

export default Carousel;

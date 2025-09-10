import React from "react";
import { Gallery } from "./gallery";
import { useHeroImages } from "../../hooks/useHeroImages";

export type Props = {
  // Flickr API関連のプロパティは不要になりました
};

export const FlickrLightbox = (_props: Props) => {
  const heroImages = useHeroImages();

  // タイトルマッピング
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

  const images = heroImages.map((image) => ({
    src: image.childImageSharp.fluid.src,
    thumbnail: image.childImageSharp.fixed.src,
    caption: getTitleFromFilename(image.name),
  }));

  return <Gallery images={images} />;
};
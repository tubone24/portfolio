import React, { useState, useEffect } from "react";
import Hero from "./hero";

type Props = {
  fillPage?: boolean;
  className?: string;
};

interface Image {
  src: string;
  thumbnail: string;
  aspectRatio: number;
}

const LocalHero = (props: Props) => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const loadHeroImages = () => {
    // public/heroフォルダ内の画像ファイル名のリスト
    const imageFilenames = [
      "enosham_011c.jpg",
      "enosham_017c.jpg",
      "enosham_018c.jpg",
      "enosham_068c.jpg",
      "enosham_085c.jpg",
      "enoshoma_040c.jpg",
      "enoshoma_057c.jpg",
      "enoshoma_067c.jpg",
      "enoshoma_223c.jpg",
      "enoshoma_284c.jpg",
      "enoshoma-223c2.jpg",
      "geshoku_020.jpg",
      "geshoku_040.jpg",
      "gokurakuzi_005c.jpg",
      "gokurakuzi_025c.jpg",
      "gokurakuzi_026c.jpg",
      "gokurakuzi_028c.jpg",
      "gokurakuzi_029c.jpg",
      "gokurakuzi_042c.jpg",
      "hongkong_018.jpg",
      "hongkong_084.jpg",
      "hongkong_138.jpg",
      "hongkong_164.jpg",
      "hongkong_189.jpg",
      "hongkong_192.jpg",
      "hongkong_215.jpg",
      "IMG_0096c.JPG",
      "izu_038s.jpg",
      "izu_056s.jpg",
      "izu_082s.jpg",
      "izu_127s.jpg",
      "izu_132s.jpg",
      "izu_154s.jpg",
      "izu_170s.jpg",
      "kyoto_osaka_080s.jpg",
      "kyoto_osaka_100s.jpg",
      "kyoto_osaka_114s.jpg",
      "kyotonara_081.jpg",
      "kyotonara_085.jpg",
      "kyotonara_135.jpg",
      "kyotonara_138.jpg",
      "kyotonara_150.jpg",
      "miyazaki_327c.jpg",
      "miyazaki_328c.jpg",
      "miyazaki_338c.jpg",
      "miyazaki_649c.jpg",
      "miyazaki_662c.jpg",
      "miyazaki_669c.jpg",
      "miyazaki_670c.jpg",
      "miyazaki_672c.jpg",
      "miyazaki_682c.jpg",
      "miyazaki_684c.jpg",
      "miyazaki_685c.jpg",
      "miyazaki_700c.jpg",
      "miyazaki_726c.jpg",
      "naraosaka_371.jpg",
      "oarai_023.jpg",
      "oarai_173.jpg",
      "parau_088.jpg",
      "parau_094.jpg",
      "parau_127.jpg",
      "parau_150.jpg",
      "parau_183.jpg",
      "parau_188.jpg",
      "parau_221.jpg",
      "parau_296.jpg",
      "parau_300.jpg",
      "parau_435.jpg",
      "parau_476.jpg",
      "parau_504.jpg",
      "parau_564.jpg",
      "parau_594.jpg",
      "thai_011.jpg",
      "thai_065.jpg",
      "thai_079.jpg",
      "thai_104.jpg",
      "thai_114.jpg",
      "thai_121.jpg",
      "ume_019.jpg",
      "umi_038s.jpg",
      "夜景_028c.jpg",
    ];

    const heroImages: Image[] = imageFilenames.map((filename) => ({
      src: `/hero/${filename}`,
      thumbnail: `/hero/${filename}`, // サムネイルも同じ画像を使用
      aspectRatio: 0.67, // デフォルトのアスペクト比（実際の画像に合わせて調整可能）
    }));

    setImages(heroImages);

    // ランダムに1つの画像を選択
    if (heroImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * heroImages.length);
      setSelectedImage(heroImages[randomIndex]);
    }
  };

  useEffect(() => {
    loadHeroImages();
  }, []);

  return (
    <Hero
      img={selectedImage ? selectedImage.src : ""}
      thumbnail={selectedImage ? selectedImage.thumbnail : ""}
      aspectRatio={selectedImage ? selectedImage.aspectRatio : 0}
      {...props}
    />
  );
};

export default LocalHero;

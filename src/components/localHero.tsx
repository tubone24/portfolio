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
    // 実際の画像ファイルをpublic/heroに配置してから、ここにファイル名を追加してください
    const imageFilenames = [
      "hero1.jpg",
      "hero2.jpg", 
      "hero3.jpg",
      "hero4.jpg",
      "hero5.jpg"
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
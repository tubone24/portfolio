import React, { useState, useEffect } from "react";
import { Gallery } from "./gallery";

export type Props = {
  // Flickr API関連のプロパティは不要になりました
};

type ImageItem = {
  src: string;
  thumbnail: string;
  caption: string;
};

export const FlickrLightbox = (_props: Props) => {
  const [images, setImages] = useState<ImageItem[]>([]);

  const loadLocalImages = () => {
    // public/heroフォルダ内の画像ファイル名のリスト（実際に存在するもののみ）
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
      "miyazaki_662c.jpg",
      "miyazaki_672c.jpg",
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

    // ランダムに8枚選択
    const shuffled = [...imageFilenames].sort(() => Math.random() - 0.5);
    const selectedImages = shuffled.slice(0, 8);

    const localImages = selectedImages.map((filename) => ({
      src: `/hero/${filename}`,
      thumbnail: `/hero/${filename}`,
      caption: getTitleFromFilename(filename),
    }));

    setImages(localImages);
  };

  useEffect(() => {
    loadLocalImages();
  }, []);

  return <Gallery images={images} />;
};
import Carousel from "./carousel";
import React from "react";
import { Box, Flex } from "grid-styled";

const PhotoList = (): JSX.Element => (
  <Flex alignItems="center" flexDirection="column">
    <Box px={2} width={[1, 1 / 2]}>
      <span>We focus on landscapes, historical buildings, and emotional photography.</span>
      <Carousel
        images={[
          {
            src: "/hero/enosham_011c.jpg",
            title: "江ノ島",
          },
          {
            src: "/hero/enosham_017c.jpg",
            title: "江ノ島",
          },
          {
            src: "/hero/enosham_018c.jpg",
            title: "江ノ島",
          },
          {
            src: "/hero/enosham_068c.jpg",
            title: "江ノ島",
          },
          {
            src: "/hero/enosham_085c.jpg",
            title: "江ノ島",
          },
          {
            src: "/hero/enoshoma_040c.jpg",
            title: "江ノ島",
          },
          {
            src: "/hero/enoshoma_057c.jpg",
            title: "江ノ島",
          },
          {
            src: "/hero/enoshoma_067c.jpg",
            title: "江ノ島",
          },
          {
            src: "/hero/enoshoma_223c.jpg",
            title: "江ノ島",
          },
          {
            src: "/hero/enoshoma_284c.jpg",
            title: "江ノ島",
          },
          {
            src: "/hero/enoshoma-223c2.jpg",
            title: "江ノ島",
          },
          {
            src: "/hero/geshoku_020.jpg",
            title: "月食",
          },
          {
            src: "/hero/geshoku_040.jpg",
            title: "月食",
          },
          {
            src: "/hero/gokurakuzi_005c.jpg",
            title: "極楽寺",
          },
          {
            src: "/hero/gokurakuzi_025c.jpg",
            title: "極楽寺",
          },
          {
            src: "/hero/gokurakuzi_026c.jpg",
            title: "極楽寺",
          },
          {
            src: "/hero/gokurakuzi_028c.jpg",
            title: "極楽寺",
          },
          {
            src: "/hero/gokurakuzi_029c.jpg",
            title: "極楽寺",
          },
          {
            src: "/hero/gokurakuzi_042c.jpg",
            title: "極楽寺",
          },
          {
            src: "/hero/hongkong_018.jpg",
            title: "香港",
          },
          {
            src: "/hero/hongkong_084.jpg",
            title: "香港",
          },
          {
            src: "/hero/hongkong_138.jpg",
            title: "香港",
          },
          {
            src: "/hero/hongkong_164.jpg",
            title: "香港",
          },
          {
            src: "/hero/hongkong_189.jpg",
            title: "香港",
          },
          {
            src: "/hero/hongkong_192.jpg",
            title: "香港",
          },
          {
            src: "/hero/hongkong_215.jpg",
            title: "香港",
          },
          {
            src: "/hero/IMG_0096c.JPG",
            title: "風景",
          },
          {
            src: "/hero/izu_038s.jpg",
            title: "伊豆",
          },
          {
            src: "/hero/izu_056s.jpg",
            title: "伊豆",
          },
          {
            src: "/hero/izu_082s.jpg",
            title: "伊豆",
          },
          {
            src: "/hero/izu_127s.jpg",
            title: "伊豆",
          },
          {
            src: "/hero/izu_132s.jpg",
            title: "伊豆",
          },
          {
            src: "/hero/izu_154s.jpg",
            title: "伊豆",
          },
          {
            src: "/hero/izu_170s.jpg",
            title: "伊豆",
          },
          {
            src: "/hero/kyoto_osaka_080s.jpg",
            title: "京都・大阪",
          },
          {
            src: "/hero/kyoto_osaka_100s.jpg",
            title: "京都・大阪",
          },
          {
            src: "/hero/kyoto_osaka_114s.jpg",
            title: "京都・大阪",
          },
          {
            src: "/hero/kyotonara_081.jpg",
            title: "京都・奈良",
          },
          {
            src: "/hero/kyotonara_085.jpg",
            title: "京都・奈良",
          },
          {
            src: "/hero/kyotonara_135.jpg",
            title: "京都・奈良",
          },
          {
            src: "/hero/kyotonara_138.jpg",
            title: "京都・奈良",
          },
          {
            src: "/hero/kyotonara_150.jpg",
            title: "京都・奈良",
          },
          {
            src: "/hero/miyazaki_327c.jpg",
            title: "宮崎",
          },
          {
            src: "/hero/miyazaki_328c.jpg",
            title: "宮崎",
          },
          {
            src: "/hero/miyazaki_338c.jpg",
            title: "宮崎",
          },
          {
            src: "/hero/miyazaki_662c.jpg",
            title: "宮崎",
          },
          {
            src: "/hero/miyazaki_672c.jpg",
            title: "宮崎",
          },
          {
            src: "/hero/naraosaka_371.jpg",
            title: "奈良・大阪",
          },
          {
            src: "/hero/oarai_023.jpg",
            title: "大洗",
          },
          {
            src: "/hero/oarai_173.jpg",
            title: "大洗",
          },
          {
            src: "/hero/parau_088.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_094.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_127.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_150.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_183.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_188.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_221.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_296.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_300.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_435.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_476.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_504.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_564.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/parau_594.jpg",
            title: "パラオ",
          },
          {
            src: "/hero/thai_011.jpg",
            title: "タイ",
          },
          {
            src: "/hero/thai_065.jpg",
            title: "タイ",
          },
          {
            src: "/hero/thai_079.jpg",
            title: "タイ",
          },
          {
            src: "/hero/thai_104.jpg",
            title: "タイ",
          },
          {
            src: "/hero/thai_114.jpg",
            title: "タイ",
          },
          {
            src: "/hero/thai_121.jpg",
            title: "タイ",
          },
          {
            src: "/hero/ume_019.jpg",
            title: "梅",
          },
          {
            src: "/hero/umi_038s.jpg",
            title: "海",
          },
          {
            src: "/hero/夜景_028c.jpg",
            title: "夜景",
          },
        ]}
      />
    </Box>
  </Flex>
);

export default PhotoList;

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
            src: "https://live.staticflickr.com/65535/49918288566_7e75ed0501_c_d.jpg",
            title: "江ノ電",
          },
          {
            src: "https://live.staticflickr.com/65535/49917776898_e51931ff19_c_d.jpg",
            title: "江ノ電、冬",
          },
          {
            src: "https://live.staticflickr.com/65535/49918586692_b7282f487c_c_d.jpg",
            title: "地蔵",
          },
          {
            src: "https://live.staticflickr.com/65535/49917775693_f6897f823f_c_d.jpg",
            title: "由比ヶ浜",
          },
          {
            src: "https://live.staticflickr.com/65535/49917769148_3cf209038e_c_d.jpg",
            title: "アユタヤ、仏像",
          },
          {
            src: "https://live.staticflickr.com/65535/49918577832_e17fa95e08_c_d.jpg",
            title: "太陽の塔、春",
          },
          {
            src: "https://live.staticflickr.com/65535/49918577327_19c56fac21_c_d.jpg",
            title: "パラオの大空",
          },
          {
            src: "https://live.staticflickr.com/65535/49918577237_3b78cf0939_c_d.jpg",
            title: "南の島の海",
          },
          {
            src: "https://live.staticflickr.com/65535/49917766618_37a5076655_c_d.jpg",
            title: "南の島、空と海",
          },
          {
            src: "https://live.staticflickr.com/65535/49918274036_ed6aa555c1_c_d.jpg",
            title: "望遠鏡から覗く未来",
          },
          {
            src: "https://live.staticflickr.com/65535/49917756298_9f073bc8ae_c_d.jpg",
            title: "ネコ",
          },
          {
            src: "https://live.staticflickr.com/65535/49918564982_352a6f5723_c_d.jpg",
            title: "浄瑠璃寺、池",
          },
          {
            src: "https://live.staticflickr.com/65535/49918266016_56a023059d_c_d.jpg",
            title: "浄瑠璃寺、本堂",
          },
          {
            src: "https://live.staticflickr.com/65535/48941128851_fd524759c7_c_d.jpg",
            title: "寺と楓",
          },
          {
            src: "https://live.staticflickr.com/65535/48939600708_781532fe73_c_d.jpg",
            title: "香港トラムから",
          },
          {
            src: "https://live.staticflickr.com/65535/48940152156_be2b9f8771_c_d.jpg",
            title: "浄瑠璃寺、池の中の祠",
          },
          {
            src: "https://live.staticflickr.com/65535/48940132336_4b7b5e2169_c_d.jpg",
            title: "教会",
          },
          {
            src: "https://live.staticflickr.com/65535/48940110426_8ca9e15b8e_c_d.jpg",
            title: "貴船神社の参道",
          },
          {
            src: "https://live.staticflickr.com/65535/48940110541_d81bb141d7_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48939556578_3ec9d366de_c_d.jpg",
            title: "常寂光寺、池",
          },
          {
            src: "https://live.staticflickr.com/65535/48940296822_1e06d9c023_c_d.jpg",
            title: "化野の苔",
          },
          {
            src: "https://live.staticflickr.com/65535/48940110721_5228b19e0a_c_d.jpg",
            title: "化野",
          },
          {
            src: "https://live.staticflickr.com/65535/48940296947_6250329050_c_d.jpg",
            title: "祇王寺",
          },
          {
            src: "https://live.staticflickr.com/65535/48940296987_086083e244_c_d.jpg",
            title: "祇王寺の苔",
          },
          {
            src: "https://live.staticflickr.com/65535/48940110931_8be5b66191_c_d.jpg",
            title: "祇王寺の地蔵",
          },
          {
            src: "https://live.staticflickr.com/65535/48940111021_a6b0432920_c_d.jpg",
            title: "貴船",
          },
          {
            src: "https://live.staticflickr.com/65535/48939557013_4aa17409b1_c_d.jpg",
            title: "貴船の川",
          },
          {
            src: "https://live.staticflickr.com/65535/48940297232_5219f1b6a5_c_d.jpg",
            title: "水神",
          },
          {
            src: "https://live.staticflickr.com/65535/48940111311_4bdb05da75_c_d.jpg",
            title: "鏞",
          },
          {
            src: "https://live.staticflickr.com/65535/48940111371_968e14b0ce_c_d.jpg",
            title: "緑の回廊",
          },
          {
            src: "https://live.staticflickr.com/65535/48940297527_3ce64b70eb_c_d.jpg",
            title: "常寂光寺、山門下り",
          },
          {
            src: "https://live.staticflickr.com/65535/48940111611_671dbc855e_c_d.jpg",
            title: "常寂光寺、雨",
          },
          {
            src: "https://live.staticflickr.com/65535/48940297682_98c985190a_c_d.jpg",
            title: "常寂光寺、池、アメ",
          },
          {
            src: "https://live.staticflickr.com/65535/48940297762_c24173aaf1_c_d.jpg",
            title: "常寂光寺、山門",
          },
          {
            src: "https://live.staticflickr.com/65535/48940297837_8c840a5ca7_c_d.jpg",
            title: "祇王寺の苔2",
          },
          {
            src: "https://live.staticflickr.com/65535/48940111816_6fba0c6726_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48940297942_3c80f9b8c4_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48939557893_ff02ecb979_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48940298112_598694f627_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48940112141_da56fae5fb_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48940298232_3d0ddfd990_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48940112201_de5163bf23_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48940298367_9bb6238194_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48939558418_fb3cef7032_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48940298717_ed78d97eeb_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48940111611_671dbc855e_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48940298672_bd40853cdf_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48940297682_98c985190a_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48940297762_c24173aaf1_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/48940297837_8c840a5ca7_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49918288566_7e75ed0501_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49917776898_e51931ff19_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49918586692_b7282f487c_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49917775693_f6897f823f_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49917769148_3cf209038e_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49918577832_e17fa95e08_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49917767373_d7bdbc318a_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49918577327_19c56fac21_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49918577237_3b78cf0939_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49917766618_37a5076655_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49918274036_ed6aa555c1_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49917756298_9f073bc8ae_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49918564982_352a6f5723_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49918266016_56a023059d_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49932645738_58d4798932_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933160171_62dae3ec6a_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933494337_e44dc8c40f_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933514862_41fa7e8e82_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933515947_22aea92772_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933774577_6446e83fd0_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933780757_e0daecb01e_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49932960458_4c91c90cff_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49932961893_18043cc07a_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49932973198_32aed3a768_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933490841_cfef832ffa_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933800702_ba8b56c917_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49932981438_f0eaf7e95d_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933804772_f3e65246ba_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933500466_bdc4c9a3e2_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933502081_2b3aa8cd6c_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933503676_00a6697baf_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49932990623_224de0459c_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933816417_729b5ce484_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49932998158_a7432bb341_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933820767_3fd723dbe5_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933007598_1f967424bb_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/49933527466_09780992bd_c_d.jpg",
          },
          {
            src: "https://live.staticflickr.com/65535/51979897725_7fd0afd890_c_d.jpg",
            title: "桜、面影橋"
          },
        ]}
      />
    </Box>
  </Flex>
);

export default PhotoList;

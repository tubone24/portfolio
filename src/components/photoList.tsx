import Carousel from "./carousel";
import React from "react";
import { Box, Flex } from "grid-styled";

const PhotoList = (): JSX.Element => (
  <Flex alignItems="center" flexDirection="column">
    <Box px={2} width={[1, 1 / 2]}>
      <span>We focus on landscapes, historical buildings, and emotional photography.</span>
      <Carousel />
    </Box>
  </Flex>
);

export default PhotoList;

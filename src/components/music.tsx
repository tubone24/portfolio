import { Box, Flex } from "grid-styled";
import Iframe from "react-iframe";
import React from "react";

const Music = (): JSX.Element => (
  <Flex alignItems="center" flexDirection="column">
    <span>Compose high-tempo, rhythmic songs, mainly for Vocaloid.</span>
    <Box px={2} width={[1, 1 / 2]}>
      <Iframe
        width="100%"
        height="450"
        scrolling="no"
        frameBorder={0}
        allow="autoplay"
        url="https://soundcloud.com/user-453736300"
        title="tubone's soundcloud"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/197229086&color=%23333335&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    </Box>
  </Flex>
);

export default Music;

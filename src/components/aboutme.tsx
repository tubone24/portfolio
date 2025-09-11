import { Box, Flex } from "grid-styled";
import Img from "gatsby-image";
import React from "react";

type Node = {
  node?: {
    childImageSharp?: {
      fluid?: Pick<
        GatsbyTypes.GatsbyImageSharpFluidFragment,
        "src" | "srcSet" | "aspectRatio" | "sizes"
      >;
    };
  };
};

type Props = {
  allFile?: {
    edges?: readonly Node[];
  };
};
const AboutMe = ({ allFile }: Props): JSX.Element => (
  <Flex alignItems="center" flexDirection="column">
    <Box px={2} width={[1, 1 / 2]}>
      <p>
        I am an engineer with over{" "}
        <strong>{new Date().getFullYear() - 2016}</strong> years of dedication
        to software development and infrastructure design. My journey began in
        2016, and since then, I have been committed to honing my skills and
        contributing to various projects.My technical stack is diverse, but I
        particularly excel in developing{" "}
        <strong>fullstack web application</strong>.
      </p>
      <p>
        Moreover, as an amateur <strong>DTM composer</strong> and{" "}
        <strong>guitarist</strong>, I have engaged in various projects,
        including collaborations with{" "}
        <a href="https://chocoholic.stores.jp/">chocoholic</a>.
      </p>
      <p>
        Beyond the realms of engineering and music, I am deeply passionate about{" "}
        <strong>photography</strong>. All the photos showcased on this portfolio
        site are captured by me, from various corners of the world. Capturing
        the unspoken stories through subjects has broadened my creative vision,
        making photography not just a part of my life but a mode of expression.
      </p>
      <p>
        Through this portfolio site, I hope you can sense my technical
        achievements, deep love for music, and visual expressions through
        photography. I look forward to collaborating on any project with
        enthusiasm. Thank you for considering my profile.
      </p>
      <p>
        カメラと音楽を嗜むWebデベロッパーです。
        <br />
        AWSが比較的得意なインフラエンジニアですが、バックエンドもフロントエンドも好きです。
        <br />
        実は本業より休日にコードを書いているタイプです。
      </p>
    </Box>
    <Box px={2} width={180}>
      {allFile?.edges &&
        allFile.edges.length !== 0 &&
        allFile?.edges[0].node?.childImageSharp?.fluid && (
          <Img fluid={allFile.edges[0].node.childImageSharp.fluid} />
        )}
    </Box>
  </Flex>
);

export default AboutMe;

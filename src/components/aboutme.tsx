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
        I am an engineer with over <strong>{new Date().getFullYear() - 2016}</strong> years of dedication to software
        development and infrastructure design.
        Throughout this extensive journey, I have led numerous engineering teams, tackling the forefront of technology
        together. My deep expertise in leveraging serverless architecture on the AWS platform has led numerous projects
        to success, earning me the <strong>AWS Certified Solutions Architect - Professional certification.</strong>
      </p>
      <p>
        My technical stack is diverse, but I particularly excel in developing <strong>fullstack web
        application</strong> using <strong>Python</strong> and <strong>TypeScript</strong>. Furthermore, my experience
        in data science with AWS has enabled me to contribute to
        data-driven decision-making processes through practical knowledge and skills.
      </p>
      <p>
        Moreover, as an amateur <strong>DTM composer</strong> and <strong>guitarist</strong>, I have engaged in various projects, including collaborations
        with <a href="https://chocoholic.stores.jp/">chocoholic</a>.
      </p>
      <p>
        Beyond the realms of engineering and music, I am deeply passionate about <strong>photography</strong>. All the photos showcased
        on this portfolio site are captured by me, from various corners of the world. Capturing the unspoken stories
        through subjects has broadened my creative vision, making photography not just a part of my life but a mode of
        expression.
      </p>
      <p>
        Through this portfolio site, I hope you can sense my technical achievements, deep love for music, and visual
        expressions through photography. I look forward to collaborating on any project with enthusiasm. Thank you for
        considering my profile.
      </p>
      <p>
        カメラと音楽を嗜むWebデベロッパーです。
        <br/>
        AWSが比較的得意なインフラエンジニアですが、バックエンドもフロントエンドも好きです。
        <br/>
        実は本業より休日にコードを書いているタイプです。
      </p>
    </Box>
    <Box px={2} width={180}>
      {allFile?.edges &&
        allFile.edges.length !== 0 &&
        allFile?.edges[0].node?.childImageSharp?.fluid && (
          <Img fluid={allFile.edges[0].node.childImageSharp.fluid}/>
        )}
    </Box>
  </Flex>
);

export default AboutMe;

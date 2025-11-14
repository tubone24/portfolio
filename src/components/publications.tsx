import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { media } from "../utils/style";

const BookContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #333;
  padding-bottom: 40px;
  margin-bottom: 40px;

  ${media.xs`
    width: 90%;
  `}

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const BookLink = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  ${media.xs`
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
  `}
`;

const BookImageWrapper = styled.div`
  overflow: hidden;
  width: 120px;
  height: 168px;
  flex-shrink: 0;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgb(0 0 0 / 30%);
  transition: all 0.3s ease-in-out;

  ${BookLink}:hover & {
    box-shadow: 0 15px 35px rgb(0 0 0 / 50%);
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BookInfo = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const BookTitle = styled.h6`
  margin: 0 0 8px;
  color: #fff;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.4;
  text-transform: uppercase;
`;

const BookMeta = styled.p`
  margin: 0;
  color: #fefefe;
  font-size: 13px;
  line-height: 24px;
  opacity: 0.5;
`;

const PublicationYear = styled.span`
  color: #fefefe;
  opacity: 0.75;
  text-transform: uppercase;
  font-size: 13px;
  position: absolute;
  top: 0;
  right: 0;

  ${media.xs`
    position: static;
    margin-top: 8px;
  `}
`;

type Publication = {
  id: string;
  title: string;
  authors: string[];
  publisher: string;
  releaseDate: string;
  year: string;
  description: string;
  imageUrl: string;
  amazonUrl: string;
  isbn?: string;
  imageFileName?: string;
};

const publicationsData: Publication[] = [
  {
    id: "yaさしいmcp入門",
    title: "やさしいMCP入門",
    authors: ["御田稔", "大坪悠"],
    publisher: "秀和システム新社",
    releaseDate: "2025年07月01日",
    year: "July 2025",
    description:
      "AIエージェント時代の標準規格MCP（モデル コンテキスト プロトコル）の入門書。大バズりしたスライド「やさしいMCP入門」の著者が新技術の基礎をやさしく解説。",
    imageUrl: "https://m.media-amazon.com/images/I/61sKi1t0SQL._SL1500_.jpg",
    amazonUrl: "https://amzn.asia/d/drKHEyi",
    imageFileName: "61sKi1t0SQL",
  },
  {
    id: "aiエージェント開発運用入門",
    title: "AIエージェント開発 / 運用入門",
    authors: ["御田稔", "大坪悠", "塚田真規"],
    publisher: "SBクリエイティブ",
    releaseDate: "2025年10月01日",
    year: "October 2025",
    description:
      "「AIエージェント」の基本・作り方・活用方法が、この一冊でぜんぶ学べる！昨今話題の「AIエージェント」について、基礎の基礎から１つずつ丁寧に、しっかりと解説した本格入門書です。",
    imageUrl: "https://m.media-amazon.com/images/I/61E5zCTuJoL._SL1024_.jpg",
    amazonUrl: "https://amzn.asia/d/2SURdGV",
    imageFileName: "61PHdrnK1YL",
  },
];

type PublicationsProps = {
  booksImages?: {
    edges: ReadonlyArray<{
      node: {
        name: string;
        childImageSharp?: {
          gatsbyImageData?: any;
        } | null;
      };
    }>;
  };
};

const Publications: React.FC<PublicationsProps> = ({ booksImages }) => {
  const getBookImageData = (fileName?: string) => {
    if (!fileName) return null;
    if (!booksImages || !booksImages.edges) {
      return null;
    }
    const image = booksImages.edges.find((edge) =>
      edge.node.name.includes(fileName)
    );
    return image?.node?.childImageSharp?.gatsbyImageData || null;
  };

  return (
    <>
      {publicationsData.map((book) => {
        const bookImageData = getBookImageData(book.imageFileName);
        return (
          <BookContainer key={book.id}>
            <BookLink
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookImageWrapper>
                {bookImageData ? (
                  <GatsbyImage image={bookImageData} alt={book.title} />
                ) : (
                  <BookImage
                    src={book.imageUrl}
                    alt={book.title}
                    loading="lazy"
                  />
                )}
              </BookImageWrapper>
              <BookInfo>
                <PublicationYear>{book.year}</PublicationYear>
                <BookTitle>{book.title}</BookTitle>
                <BookMeta>
                  {book.authors.join("、")} / {book.publisher}
                </BookMeta>
              </BookInfo>
            </BookLink>
          </BookContainer>
        );
      })}
    </>
  );
};

export default Publications;

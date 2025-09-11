import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
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
  width: 120px;
  height: 168px;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
  overflow: hidden;

  ${BookLink}:hover & {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
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
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BookTitle = styled.h6`
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px 0;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const BookMeta = styled.p`
  font-size: 13px;
  line-height: 24px;
  color: #fefefe;
  opacity: 0.5;
  margin: 0;
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
          fluid: any;
        } | null;
      };
    }>;
  };
};

const Publications: React.FC<PublicationsProps> = ({ booksImages }) => {
  const getBookImage = (fileName?: string) => {
    if (!fileName) return null;
    
    // booksImagesがない場合のデバッグ
    if (!booksImages || !booksImages.edges) {
      console.log("booksImages is not available:", booksImages);
      return null;
    }
    
    console.log("Looking for:", fileName);
    console.log("Available images:", booksImages.edges.map(e => e.node.name));
    
    const image = booksImages.edges.find((edge) =>
      edge.node.name.includes(fileName)
    );
    return image?.node?.childImageSharp?.fluid;
  };

  return (
    <>
      {publicationsData.map((book) => {
        const bookImageFluid = getBookImage(book.imageFileName);
        return (
          <BookContainer key={book.id}>
            <BookLink
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookImageWrapper>
                {bookImageFluid ? (
                  <Img fluid={bookImageFluid} alt={book.title} />
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

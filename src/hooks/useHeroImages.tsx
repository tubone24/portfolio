import { useStaticQuery, graphql } from "gatsby";

export interface HeroImage {
  name: string;
  childImageSharp: {
    fixed: {
      src: string;
    };
    fluid: {
      src: string;
      srcSet: string;
      sizes: string;
      aspectRatio: number;
    };
    heroFluid: {
      src: string;
      srcSet: string;
      sizes: string;
      aspectRatio: number;
    };
    heroFixed: {
      src: string;
    };
    carouselFluid: {
      src: string;
      srcSet: string;
      sizes: string;
      aspectRatio: number;
    };
    carouselFixed: {
      src: string;
    };
    lightboxFluid: {
      src: string;
      srcSet: string;
      sizes: string;
      aspectRatio: number;
    };
  };
}

const useAllHeroImagesData = () => {
  const data = useStaticQuery<GatsbyTypes.AllHeroImagesQueryQuery>(graphql`
    query AllHeroImagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "hero" } }) {
        nodes {
          name
          childImageSharp {
            fixed(width: 600, height: 400, quality: 75) {
              src
            }
            fluid(maxWidth: 800, maxHeight: 600, quality: 75) {
              src
              srcSet
              sizes
              aspectRatio
            }
            heroFluid: fluid(maxWidth: 2048, quality: 85) {
              src
              srcSet
              sizes
              aspectRatio
            }
            heroFixed: fixed(width: 64, height: 48, quality: 20) {
              src
            }
            carouselFluid: fluid(maxWidth: 2048, maxHeight: 1536, quality: 85) {
              src
              srcSet
              sizes
              aspectRatio
            }
            carouselFixed: fixed(width: 48, height: 32, quality: 20) {
              src
            }
            lightboxFluid: fluid(maxWidth: 4096, quality: 90) {
              src
              srcSet
              sizes
              aspectRatio
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes as HeroImage[];
};

export const useHeroImages = () => {
  const allImages = useAllHeroImagesData();
  
  // ランダムに8枚選択（FlickrLightbox用）
  const shuffled = [...allImages].sort(() => Math.random() - 0.5);
  const selectedImages = shuffled.slice(0, 8);

  return selectedImages;
};

export const useAllHeroImages = () => {
  return useAllHeroImagesData();
};

export const useCarouselImages = () => {
  // カルーセル用：全件取得
  return useAllHeroImagesData();
};

export const useRandomHeroImage = () => {
  const allImages = useAllHeroImagesData();
  const randomIndex = Math.floor(Math.random() * allImages.length);
  return allImages[randomIndex];
};
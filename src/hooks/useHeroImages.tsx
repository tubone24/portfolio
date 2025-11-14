import { useStaticQuery, graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";

export interface HeroImage {
  name: string;
  childImageSharp: {
    fixed: { src: string };
    fluid: { src: string };
    heroFluid: { src: string };
    heroFixed: { src: string };
    carouselFluid: { src: string };
    carouselFixed: { src: string };
    lightboxFluid: { src: string };
  };
}

const useAllHeroImagesData = () => {
  const data: any = useStaticQuery(graphql`
    query AllHeroImagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "hero" } }) {
        nodes {
          name
          childImageSharp {
            fixedData: gatsbyImageData(
              width: 600
              height: 400
              quality: 75
              layout: FIXED
              placeholder: BLURRED
            )
            fluidData: gatsbyImageData(
              width: 800
              height: 600
              quality: 75
              layout: CONSTRAINED
              placeholder: BLURRED
            )
            heroFluidData: gatsbyImageData(
              width: 2048
              quality: 85
              layout: CONSTRAINED
              placeholder: BLURRED
            )
            heroFixedData: gatsbyImageData(
              width: 64
              height: 48
              quality: 20
              layout: FIXED
              placeholder: DOMINANT_COLOR
            )
            carouselFluidData: gatsbyImageData(
              width: 2048
              height: 1536
              quality: 85
              layout: CONSTRAINED
              placeholder: BLURRED
            )
            carouselFixedData: gatsbyImageData(
              width: 48
              height: 32
              quality: 20
              layout: FIXED
            )
            lightboxFluidData: gatsbyImageData(
              width: 4096
              quality: 90
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  `);

  const nodes: HeroImage[] = data.allFile.nodes.map((node: any) => {
    const cis = node.childImageSharp || {};
    const fixedSrc = cis.fixedData ? getSrc(cis.fixedData) : "";
    const fluidSrc = cis.fluidData ? getSrc(cis.fluidData) : "";
    const heroFluidSrc = cis.heroFluidData
      ? getSrc(cis.heroFluidData)
      : fluidSrc;
    const heroFixedSrc = cis.heroFixedData
      ? getSrc(cis.heroFixedData)
      : fixedSrc;
    const carouselFluidSrc = cis.carouselFluidData
      ? getSrc(cis.carouselFluidData)
      : heroFluidSrc;
    const carouselFixedSrc = cis.carouselFixedData
      ? getSrc(cis.carouselFixedData)
      : fixedSrc;
    const lightboxFluidSrc = cis.lightboxFluidData
      ? getSrc(cis.lightboxFluidData)
      : heroFluidSrc;

    return {
      name: node.name,
      childImageSharp: {
        fixed: { src: fixedSrc },
        fluid: { src: fluidSrc || heroFluidSrc },
        heroFluid: { src: heroFluidSrc },
        heroFixed: { src: heroFixedSrc },
        carouselFluid: { src: carouselFluidSrc },
        carouselFixed: { src: carouselFixedSrc },
        lightboxFluid: { src: lightboxFluidSrc },
      },
    };
  });

  return nodes;
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
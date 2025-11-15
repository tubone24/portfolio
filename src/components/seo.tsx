import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  twitter?: {
    card?: "summary" | "summary_large_image" | "app" | "player";
    site?: string;
    creator?: string;
  };
  lang?: string;
  noindex?: boolean;
  canonical?: string;
}

const SEO = ({
  title,
  description,
  image,
  imageAlt,
  url,
  type = "website",
  article,
  twitter,
  lang = "ja",
  noindex = false,
  canonical,
}: SEOProps): JSX.Element => {
  const data = useStaticQuery<{
    site: {
      siteMetadata: {
        title: string;
        siteUrl: string;
      };
    };
  }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  );

  const site = data?.site;

  const siteTitle = site?.siteMetadata?.title || "tubone24 Portfolio";
  const siteUrl = site?.siteMetadata?.siteUrl || "https://portfolio.tubone-project24.xyz";

  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || "Full-stack developer portfolio showcasing web development, photography, and music projects.";
  const metaImage = image || `${siteUrl}/logo-512x512.png`;
  const metaImageAlt = imageAlt || "tubone24 portfolio logo";
  const metaUrl = url || siteUrl;
  const canonicalUrl = canonical || metaUrl;

  const twitterCard = twitter?.card || (image ? "summary_large_image" : "summary");
  const twitterSite = twitter?.site || "@tubone24";
  const twitterCreator = twitter?.creator || "@tubone24";

  // JSON-LD structured data
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "tubone24",
    url: siteUrl,
    image: `${siteUrl}/logo-512x512.png`,
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/tubone24",
      "https://twitter.com/tubone24",
    ],
    knowsAbout: [
      "Web Development",
      "Photography",
      "Music Production",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    url: siteUrl,
    description: metaDescription,
    author: {
      "@type": "Person",
      name: "tubone24",
    },
    inLanguage: lang,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: metaDescription,
        image: metaImage,
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime || article.publishedTime,
        author: {
          "@type": "Person",
          name: article.author || "tubone24",
        },
        publisher: {
          "@type": "Person",
          name: "tubone24",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/logo-512x512.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": metaUrl,
        },
        ...(article.section && { articleSection: article.section }),
        ...(article.tags && { keywords: article.tags.join(", ") }),
      }
    : null;

  const schemas: Array<Record<string, unknown>> = [personSchema, websiteSchema, breadcrumbSchema];
  if (articleSchema) {
    schemas.push(articleSchema);
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
        prefix: "og: https://ogp.me/ns#",
      }}
    >
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#4bff21" />
      <link rel="canonical" href={canonicalUrl} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}


      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:alt" content={metaImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={lang === "ja" ? "ja_JP" : "en_US"} />

      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.author && <meta property="article:author" content={article.author} />}
      {article?.section && <meta property="article:section" content={article.section} />}
      {article?.tags && article.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}


      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content={metaImageAlt} />

      <meta name="author" content="tubone24" />
      <meta name="application-name" content={siteTitle} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteTitle} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#292929" />
      <meta name="msapplication-tap-highlight" content="no" />

      <script type="application/ld+json">{JSON.stringify(schemas)}</script>

      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4bff21" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Helmet>
  );
};

export default SEO;

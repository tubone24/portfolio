import React, { useState, useEffect } from "react";
import buildUrl from "build-url";
import Hero from "./hero";
import fetch from "cross-fetch";

type Props = {
  api_key: string;
  user_id: string;
  album_id: string;
  limit?: number;
  searchTerm?: string;
  fillPage?: boolean;
  className?: string;
};

interface Image {
  src: string;
  thumbnail: string;
  aspectRatio: number;
}

interface Photo {
  id: string;
  url_o?: string;
  url_m?: string;
  url_t: string;
  height_t: number;
  width_t: number;
}

interface SizeInfo {
  label: string;
  width: number;
  height: number;
  source: string;
  url: string;
  media: string;
}

const FlickrHero = (props: Props) => {
  const [images, setImages] = useState<Image[]>([]);

  const generateApiUrl = (props: Props) => {
    const extras = ["url_o", "url_m", "url_t"];
    return buildUrl("https://api.flickr.com", {
      path: "services/rest/",
      queryParams: {
        method: props.album_id
          ? "flickr.photosets.getPhotos"
          : props.user_id || props.searchTerm
          ? "flickr.photos.search"
          : "flickr.photos.getRecent",
        format: "json",
        api_key: props.api_key || "",
        user_id: props.user_id || "",
        photoset_id: props.album_id || "",
        text: props.searchTerm || "",
        per_page: String(
          props.limit || (props.album_id ? Number.MAX_SAFE_INTEGER : 1)
        ),
        nojsoncallback: "1",
        extras: extras.join(","),
      },
    });
  };

  const getSizesUrl = (photoId: string, apiKey: string) => {
    return buildUrl("https://api.flickr.com", {
      path: "services/rest/",
      queryParams: {
        method: "flickr.photos.getSizes",
        format: "json",
        api_key: apiKey,
        photo_id: photoId,
        nojsoncallback: "1",
      },
    });
  };

  const getLargestImageUrl = async (photoId: string, apiKey: string): Promise<string> => {
    try {
      const response = await fetch(getSizesUrl(photoId, apiKey));
      const data = await response.json();
      
      if (data.sizes && data.sizes.size) {
        const sizes: SizeInfo[] = data.sizes.size;
        // サイズを面積順でソートして最大のものを取得
        const largestSize = sizes.reduce((largest, current) => {
          const largestArea = largest.width * largest.height;
          const currentArea = current.width * current.height;
          return currentArea > largestArea ? current : largest;
        });
        return largestSize.source;
      }
      return "";
    } catch (error) {
      console.error("Error fetching sizes for photo", photoId, error);
      return "";
    }
  };

  const queryFlickrApi = async (props: Props) => {
    try {
      const response = await fetch(generateApiUrl(props));
      const data = await response.json();
      
      let photos: Photo[] = [];
      if (data.photoset) {
        photos = data.photoset.photo;
      } else if (data.photos) {
        photos = data.photos.photo;
      } else {
        throw data;
      }

      // 各写真の最大サイズを取得
      const imagePromises = photos.map(async (p) => {
        const largestUrl = await getLargestImageUrl(p.id, props.api_key);
        return {
          src: largestUrl || p.url_o || p.url_m || "https://s.yimg.com/pw/images/en-us/photo_unavailable.png",
          thumbnail: p.url_t,
          aspectRatio:
            Math.min(p.height_t, p.width_t) /
            Math.max(p.height_t, p.width_t),
        };
      });

      const resolvedImages = await Promise.all(imagePromises);
      setImages(resolvedImages);
    } catch (error) {
      console.error("Error fetching Flickr data:", error);
    }
  };

  useEffect(() => {
    queryFlickrApi(props);
  }, [
    props.api_key,
    props.user_id,
    props.album_id,
    props.limit,
    props.searchTerm,
  ]);

  const image = images[Math.floor(Math.random() * images.length)];
  return (
    <Hero
      img={image ? image.src : ""}
      thumbnail={image ? image.thumbnail : ""}
      aspectRatio={image ? image.aspectRatio : 0}
      {...props}
    />
  );
};

export default FlickrHero;

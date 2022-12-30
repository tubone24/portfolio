import React, { useState, useEffect } from "react";
import buildUrl from "build-url";
import { Gallery } from "./gallery";
import fetch from "cross-fetch";

export type Props = {
  apiKey: string;
  userId: string;
  limit: number;
  thumbnailSizeParam?: string;
};

export const FlickrLightbox = (props: Props) => {
  const [images, setImages] = useState([]);

  const generateApiUrl = (
    apiKey: string,
    userId: string,
    limit: number,
    thumbnailSizeParam: string
  ) => {
    const extras = [
      "url_o",
      "url_m",
      thumbnailSizeParam,
      "license",
      "date_upload",
      "date_taken",
      "icon_server",
      "original_format",
      "last_update",
      "geo",
      "tags",
      "machine_tags",
      "o_dims",
      "views",
      "media",
      "path_alias",
      "owner_name",
    ];

    return buildUrl("https://api.flickr.com", {
      path: "services/rest/",
      queryParams: {
        method: "flickr.photos.search",
        format: "json",
        api_key: apiKey,
        user_id: userId,
        album_id: "",
        text: "",
        per_page: String(limit) || String(Number.MAX_SAFE_INTEGER),
        nojsoncallback: "?",
        extras: extras.join(","),
      },
    });
  };

  const queryFlickrApi = (
    apiKey: string,
    userId: string,
    limit: number,
    thumbnailSizeParam = "url_sq"
  ) => {
    console.log("queryFlickrApi");
    fetch(generateApiUrl(apiKey, userId, limit, thumbnailSizeParam))
      .then((response: any) => response.json())
      .then((data: any) => {
        if (!data.photos) {
          throw data;
        }
        setImages(
          data.photos.photo.map((p: any) => {
            return {
              src:
                p.url_o ||
                p.url_m ||
                "https://s.yimg.com/pw/images/en-us/photo_unavailable.png",
              thumbnail: p[thumbnailSizeParam],
              caption: `${p.title || "Untitled"}: Photo by ${p.ownername}`,
            };
          })
        );
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    queryFlickrApi(
      props.apiKey,
      props.userId,
      props.limit,
      props.thumbnailSizeParam
    );
  }, [props.apiKey, props.userId, props.limit, props.thumbnailSizeParam]);

  return <Gallery images={images} />;
};

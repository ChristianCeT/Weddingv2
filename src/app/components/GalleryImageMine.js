"use client";

import { Gallery } from "next-gallery";

const images = [
  {
    src: "/images/fotoprueba.webp",
    aspect_ratio: 16 / 9,
  },
  {
    src: "/images/fotoprueba.webp",
    aspect_ratio: 2 / 3,
  },
  {
    src: "/images/fotoprueba.webp",
    aspect_ratio: 16 / 9,
  },
  {
    src: "/images/fotoprueba.webp",
    aspect_ratio: 16 / 9,
  },
  {
    src: "/images/fotoprueba.webp",
    aspect_ratio: 16 / 9,
  },
];
const widths = [700, 1000, 1800];
const ratios = [2.2, 2, 4, 6];

export const GalleryImageMine = () => {
  return (
    <div className="content-center h-full w-full">
      <div className="m-auto px-7 py-10">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="font-dancingScript text-5xl mb-6">
            Nuestro matrimonio Civil
          </h1>
        </div>

        <div className="">
          <Gallery {...{ images, ratios, widths }} gap={4}></Gallery>
        </div>
      </div>
    </div>
  );
};

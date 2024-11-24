import { Gallery } from "next-gallery";

const images = [
  {
    src: "/images/3.webp",
    aspect_ratio: 4 / 3,
    nextImageProps: {
      style: {
        objectFit: "cover",
        borderRadius: "15px",
      },
    },
  },
  {
    src: "/images/5.webp",
    aspect_ratio: 2 / 3,
    nextImageProps: {
      style: {
        objectFit: "cover",
        borderRadius: "15px",
      },
    },
  },
  {
    src: "/images/2.webp",
    aspect_ratio: 16 / 9,
    nextImageProps: {
      style: {
        objectFit: "cover",
        borderRadius: "15px",
      },
    },
  },
  {
    src: "/images/4.webp",
    aspect_ratio: 16 / 9,
    nextImageProps: {
      style: {
        objectFit: "cover",
        borderRadius: "15px",
      },
    },
  },
  {
    src: "/images/6.webp",
    aspect_ratio: 4 / 3,
    nextImageProps: {
      style: {
        objectFit: "cover",
        borderRadius: "15px",
        /* centrado la imagen */
      },
    },
  },
  {
    src: "/images/1.webp",
    aspect_ratio: 4 / 3,
    nextImageProps: {
      style: {
        objectFit: "cover",
        borderRadius: "15px",
        /* centrado la imagen */
      },
    },
  },
];
const widths = [200, 800, 1800];
const ratios = [2.2, 3, 5, 5];

export const GalleryImageMine = () => {
  return (
    <div className="content-center lg:h-full lg:w-full h-[100vh]">
      <div className="m-auto">
        <div className="text-center animate-fade-left animate-once animate-duration-[4000ms]">
          <h1 className="font-dancingScript lg:text-5xl text-3xl lg:mb-6 mb-3 font-bold">
            Nuestro matrimonio Civil 💖
          </h1>
        </div>

        <div className="h-full w-full">
          <Gallery
            {...{ images, ratios, widths }}
            gap={4}
            growLimit={2}
            overlay={() => (
              <div className="w-full h-full bg-gradient-to-r from-[#bb7171] to-[#dac491] overflow-hidden rounded-[14px] opacity-25"></div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

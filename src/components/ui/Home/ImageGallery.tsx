import { Gallery } from "react-grid-gallery";

const images = [
  {
    src: "../../../../public/galleryImg1.avif",
    width: 430,
    height: 250,
  },
  {
    src: "../../../../public/GallleryImg2.avif",
    width: 300,
    height: 300,
  },
  {
    src: "../../../../public/galleryImg1.avif",
    width: 430,
    height: 250,
  },
  {
    src: "../../../../public/GI4.webp",
    width: 350,
    height: 210,
  },
  {
    src: "../../../../public/GallleryImg2.avif",
    width: 248,
    height: 320,
  },
  {
    src: "../../../../public/GI6.webp",
    width: 450,
    height: 320,
  },
  {
    src: "../../../../public/GI6.webp",
    width: 450,
    height: 320,
  },
  {
    src: "../../../../public/GI5.avif",
    width: 490,
    height: 320,
  },
  {
    src: "../../../../public/GI4.webp",
    width: 320,
    height: 213,
  },
  {
    src: "../../../../public/GallleryImg2.avif",
    width: 248,
    height: 320,
  },
];
const ImageGallery = () => {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-semibold my-2">
        Customers With Our Product
      </h2>
      <div className="rounded-2xl">
        <Gallery images={images} enableImageSelection={false} />
      </div>
    </div>
  );
};

export default ImageGallery;

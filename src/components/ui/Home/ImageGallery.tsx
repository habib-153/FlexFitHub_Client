import { Gallery } from "react-grid-gallery";

const images = [
  {
    src: "https://i.ibb.co/XpZv29C/gallery-Img1.jpg",
    width: 430,
    height: 250,
  },
  {
    src: "https://i.ibb.co/z8qq0Hc/Galllery-Img2.jpg",
    width: 300,
    height: 300,
  },
  {
    src: "https://i.ibb.co/XpZv29C/gallery-Img1.jpg",
    width: 430,
    height: 250,
  },
  {
    src: "https://i.ibb.co/L9bZrHr/GI4.webp",
    width: 350,
    height: 210,
  },
  {
    src: "https://i.ibb.co/z8qq0Hc/Galllery-Img2.jpg",
    width: 248,
    height: 320,
  },
  {
    src: "https://i.ibb.co/K54Sctn/GI6.webp",
    width: 450,
    height: 320,
  },
  {
    src: "https://i.ibb.co/K54Sctn/GI6.webp",
    width: 450,
    height: 320,
  },
  {
    src: "https://i.ibb.co/n1w5T9F/GI5.jpg",
    width: 490,
    height: 320,
  },
  {
    src: "https://i.ibb.co/L9bZrHr/GI4.webp",
    width: 320,
    height: 213,
  },
  {
    src: "https://i.ibb.co/z8qq0Hc/Galllery-Img2.jpg",
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

import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const images = [
  "https://www.beyoung.in/api/catalog/homepage-05/main-banner/home-page-banner-desktop-view.jpg",
  "https://www.beyoung.in/api/catalog/homepage-5-dec/new-banner/neww1SHIRT-BANNER-DESKTOP-VIEW11.jpg",
];
const availabeIndexofImage = images.length - 1;
export default function Slider() {
  const [imageIndex, setImageindex] = useState(0);
  function handleNext() {
    imageIndex < availabeIndexofImage
      ? setImageindex(imageIndex + 1)
      : setImageindex(0);
  }
  function handlePrev() {
    imageIndex !== 0
      ? setImageindex(imageIndex - 1)
      : setImageindex(availabeIndexofImage);
  }
  return (
    <>
      {/* Optimizing the code to prevent the re network
      calls for fetching the image from urls*/}
      <div className="flex justify-center relative">
        {images.map((url, i) => (
          <img
            src={url}
            alt="slider"
            key={url}
            className={imageIndex === i ? "block" : "hidden"}
          />
        ))}
      </div>

      <br />
      <div className="flex justify-center gap-5">
        <button
          onClick={handlePrev}
          className="shadow-md p-2 text-center bg-sky-950 hover:bg-sky-700 text-white w-10 flex justify-center items-center justify-items-center"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNext}
          className="shadow-md p-2 text-center bg-sky-950 hover:bg-sky-700 text-white w-10 flex justify-center items-center justify-items-center"
        >
          <FaAngleRight />
        </button>
      </div>
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import img1 from "./assets/images/t-shirt-7.jpg";
import img2 from "./assets/images/t-shirt-8.jpg";
import img3 from "./assets/images/t-shirt-9.jpg";

const product = {
  images: [
    {
      src: img1,
      alt: "An image.",
    },
    {
      src: img2,
      alt: "Another image",
    },
    {
      src: img3,
      alt: "Another image on top of that",
    },
  ],
};

export default function ImageCaousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesLength = product.images.length;
  const slideRef = useRef();

  function handleNext() {
    if (currentIndex === imagesLength - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    slideRef.current.classList.add("fade-anim");
  }

  function handlePrev() {
    if (currentIndex === 0) {
      setCurrentIndex(imagesLength - 1);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
    slideRef.current.classList.add("fade-anim");
  }

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
  }, []);

  return (
    <div ref={slideRef} className="flex  flex-col w-full">
      <div className=" flex flex-col gap-y-4  max-w-xs lg:max-w-sm aspect-square">
        <div className="relative ">
          <img
            src={product.images[currentIndex].src}
            alt={product.images[0].alt}
            className="  object-cover "
          />

          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-center px-3">
            <button onClick={handlePrev}>
              <svg
                className="w-6 h-6 fill-slate-400 hover:fill-slate-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
              </svg>
            </button>
            <button onClick={handleNext}>
              <svg
                className="w-6 h-6 fill-slate-400 hover:fill-slate-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
              </svg>
            </button>
          </div>
        </div>
        <div className=" mx-auto">
          {product.images.map((image, index) => (
            <button
              className={`ml-3
                  ${
                    currentIndex === index
                      ? `bg-blue-800 p-2 rounded-full `
                      : "p-1.5 bg-blue-600 rounded-full hover:bg-blue-800"
                  }
                `}
              onClick={() => setCurrentIndex(index)}
              key={index}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

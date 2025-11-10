"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Link from "next/link"; // ✅ Add this import

export default function Home() {
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/Image5.png",
    "/images/image6.png",
    "/images/image7.png",
    "/images/image8.png",
    "/images/image9.png",
    "/images/image10.png",
    "/images/image11.png",
    "/images/image12.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    trackMouse: true,
  });

  return (
    <div className="mt-11 flex flex-col items-center justify-center min-h-screen bg-pink-50 px-4">
      <h1 className="text-4xl font-bold text-pink-700 mb-6 text-center">
        Explore La Khalaba Women’s Collection
      </h1>

      <div className="relative w-full max-w-2xl mb-6" {...handlers}>
        <img
          src={images[currentImageIndex]}
          alt={`La Khalaba Dress ${currentImageIndex + 1}`}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        {/* Desktop navigation buttons */}
        <div
          className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-pink-700 bg-white bg-opacity-50 p-2 rounded-full sm:block hidden"
          onClick={goToPrevious}
        >
          &#8592;
        </div>
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-pink-700 bg-white bg-opacity-50 p-2 rounded-full sm:block hidden"
          onClick={goToNext}
        >
          &#8594;
        </div>
      </div>

      {/* ✅ Updated button to navigate to /collections */}
      <Link href="/collections">
        <button className="px-6 py-3 bg-pink-500 text-white text-lg rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out hover:scale-105">
          More Collections
        </button>
      </Link>
    </div>
  );
}

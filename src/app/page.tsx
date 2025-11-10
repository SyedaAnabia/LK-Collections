import Link from "next/link";
import Image from "next/image";
import Homeproducts from "./query/Homeproducts/page";
import dynamic from "next/dynamic";

const Page = () => {
  const LazyComponent = dynamic(() => import("./query/Homeproducts/page"), {
    ssr: false,
  });

  return (
    <>
      <div className="relative bg-gray-50">
        {/* Hero Image */}
        <div className="w-full">
          <Image
            src="/images/hero-background.png"
            alt="hero-background"
            width={1440}
            height={316}
            sizes="(max-width: 768px) 100vw, 100vw"
            priority
            fetchPriority="high"
          />
        </div>

        {/* Text Content */}
        <div className="absolute top-1/2 right-2 md:right-20 transform -translate-y-1/2 bg-pink-100 p-3 sm:p-6 md:p-14 rounded-lg shadow-lg max-w-full md:max-w-lg text-left">
          <h2 className="font-poppins font-semibold text-[10px] sm:text-[14px] md:text-[16px] uppercase text-pink-700 tracking-wide">
            New Arrival
          </h2>
          <h1 className="text-[12px] sm:text-lg md:text-3xl font-bold text-pink-600 mt-2 sm:mt-3 md:mt-4 mb-2 sm:mb-4">
            Discover Our New Clothes
            <span className="block sm:inline"> Collection</span>
          </h1>
          <p className="text-pink-800 mb-2 sm:mb-6 text-[8px] sm:text-xs md:text-base leading-relaxed sm:leading-normal">
            <span className="block sm:inline">
              La Khala Women's Collection brings timeless elegance and
            </span>
            <span className="block sm:inline">
              modern charm to every wardrobe. Stylish, comfortable, and
            </span>
            <span className="block sm:inline">
              made for confident women who love to stand out.
            </span>
          </p>
          <Link href={"/collections"}>
            <button className="bg-pink-500 text-white text-[10px] sm:text-sm md:text-lg px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 hover:bg-pink-600 transition shadow-lg">
              Order Now
            </button>
          </Link>
        </div>
      </div>

     {/* Browse The Range Section */}
<section className="py-10 bg-pink-50">
  <h1 className="text-pink-700 text-2xl sm:text-3xl font-bold text-center mt-10">
    Explore La Khalaba Collections
  </h1>
  <p className="text-center text-pink-500 mt-4">
    Discover our exclusive boutique range of stylish clothes.
  </p>
  <div className="flex flex-wrap items-center justify-center mt-16 gap-8">
    {[
      { img: "image1.png" },
      { img: "image2.png" },
      { img: "image3.png" },
    ].map((category, index) => (
      <div
        key={index}
        className="flex flex-col items-center max-w-[300px] sm:max-w-full"
      >
        <div className="w-[381px] h-[480px] overflow-hidden rounded-lg">
          <Image
            src={`/images/${category.img}`}
            alt="La Khalaba collection image"
            width={381}
            height={480}
            className="w-full h-full object-cover hover:scale-105 hover:border-4 hover:border-pink-300 transition-transform duration-300"
            quality={75}
            loading="lazy"
          />
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Our Products Section */}
      <section className="py-10 bg-pink-50">
        <h1 className="text-pink-700 text-[40px] text-center font-bold mt-14 mb-6">
          Our Collections
        </h1>
        <Homeproducts />
        <div className="flex items-center justify-center mt-6">
          <Link href={"/collections"}>
            <button className="w-[245px] h-[48px] bg-white border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300">
              Show More
            </button>
          </Link>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="h-auto bg-pink-50 mt-10 flex flex-col lg:flex-row items-center justify-around">
        <div className="text-center lg:text-left px-6 lg:px-0">
          <h1 className="text-pink-700 text-[32px] sm:text-[36px] md:text-[40px] font-bold w-[90%] md:w-[422px]">
            Explore La Khalab Women’s Collection
          </h1>
          <p className="text-pink-500 text-[14px] sm:text-[16px] mt-4 md:mt-6 w-[90%] md:w-[368px]">
            Discover our exclusive range of elegant and stylish dresses designed
            for every occasion.
          </p>
          <Link href={`/exploredress`}>
            <button className="w-[70%] md:w-[176px] h-[48px] bg-pink-500 text-white mt-8 transition duration-300 ease-in-out hover:bg-pink-600 hover:scale-105">
              Explore More
            </button>
          </Link>
        </div>
        {["Image5.png", "image6.png"].map((image, index) => (
          <div
            key={index}
            className="mt-8 lg:mt-0 w-[372px] h-[486px] overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={`/images/${image}`}
              alt={image}
              width={372}
              height={486}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>

      {/* Social Section */}
      <section className="h-auto mt-32 px-6 md:px-16 lg:px-32 bg-pink-50 py-10 rounded-lg">
        <h1 className="text-center text-[18px] sm:text-[20px] text-pink-700">
          Share your favorite looks with
        </h1>
        <h1 className="text-center text-[30px] sm:text-[40px] font-bold text-pink-700">
          #LaKhalabCollection
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-8">
          {[
            "image1",
            "image2",
            "image3",
            "image4",
            "Image5",
            "image6",
            "image7",
          ].map((image, index) => (
            <Image
              key={index}
              src={`/images/${image}.png`}
              alt={image}
              width={index === 2 ? 150 : index === 6 ? 200 : 180}
              height={index === 2 ? 180 : index === 6 ? 200 : 150}
              className={
                index === 6
                  ? "mb-12 rounded-lg shadow-md"
                  : "mb-3 rounded-lg shadow-md"
              }
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;

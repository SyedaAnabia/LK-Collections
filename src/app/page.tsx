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
      {/* HERO SECTION */}
      <div className="relative bg-gray-50 flex flex-col md:block">
        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] md:h-auto">
          <Image
            src="/images/hero-background.png"
            alt="hero-background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="relative md:absolute md:top-1/2 md:right-10 transform md:-translate-y-1/2 bg-pink-100 p-4 sm:p-6 md:p-10 rounded-lg shadow-lg max-w-[90%] sm:max-w-md md:max-w-lg mx-auto mt-[-60px] md:mt-0">
          <h2 className="font-poppins font-semibold text-[12px] sm:text-[14px] md:text-[16px] uppercase text-pink-700 tracking-wide">
            New Arrival
          </h2>
          <h1 className="text-[16px] sm:text-xl md:text-3xl font-bold text-pink-600 mt-2 sm:mt-3 md:mt-4 mb-2 sm:mb-4 leading-snug">
            Discover Our New Clothes Collection
          </h1>
          <p className="text-pink-800 mb-4 text-[10px] sm:text-sm md:text-base leading-relaxed">
            La Khilaba Women's Collection brings timeless elegance and modern
            charm to every wardrobe. Stylish, comfortable, and made for
            confident women who love to stand out.
          </p>
          <Link href={"/collections"}>
            <button className="bg-pink-500 text-white text-[12px] sm:text-sm md:text-lg px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 hover:bg-pink-600 transition shadow-md w-full sm:w-auto">
              Order Now
            </button>
          </Link>
        </div>
      </div>

      {/* BROWSE THE RANGE */}
      <section className="py-10 bg-pink-50 text-center">
        <h1 className="text-pink-700 text-xl sm:text-3xl font-bold">
          Explore La Khilaba Collections
        </h1>
        <p className="text-pink-500 mt-2 sm:mt-4 text-sm sm:text-base">
          Discover our exclusive boutique range of stylish clothes.
        </p>
        <div className="flex flex-wrap justify-center mt-10 gap-6 sm:gap-10">
          {["image1.png", "image2.png", "image3.png"].map((img, index) => (
            <div
              key={index}
              className="w-[90%] sm:w-[300px] md:w-[380px] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={`/images/${img}`}
                alt="La Khilaba collection"
                width={380}
                height={480}
                className="object-cover w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* OUR PRODUCTS */}
      <section className="py-10 bg-pink-50 text-center">
        <h1 className="text-pink-700 text-2xl sm:text-4xl font-bold mt-6 mb-6">
          Our Collections
        </h1>
        <Homeproducts />
        <div className="flex justify-center mt-6">
          <Link href={"/collections"}>
            <button className="px-6 py-3 bg-white border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300 rounded-md">
              Show More
            </button>
          </Link>
        </div>
      </section>

      {/* INSPIRATION */}
      <section className="bg-pink-50 mt-10 flex flex-col lg:flex-row items-center justify-around px-6 gap-10">
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-pink-700 text-2xl sm:text-3xl md:text-4xl font-bold">
            Explore La Khilaba Women’s Collection
          </h1>
          <p className="text-pink-500 mt-4 text-sm sm:text-base">
            Discover our exclusive range of elegant and stylish dresses designed
            for every occasion.
          </p>
          <Link href={`/exploredress`}>
            <button className="bg-pink-500 text-white px-6 py-3 mt-6 rounded-md hover:bg-pink-600 transition w-full sm:w-auto">
              Explore More
            </button>
          </Link>
        </div>

        {["Image5.png", "image6.png"].map((image, i) => (
          <div
            key={i}
            className="w-[80%] sm:w-[300px] md:w-[372px] rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={`/images/${image}`}
              alt={image}
              width={372}
              height={486}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </section>

      {/* SOCIAL SECTION */}
      <section className="bg-pink-50 py-10 text-center px-4">
        <h1 className="text-pink-700 text-lg sm:text-xl">
          Share your favorite looks with
        </h1>
        <h1 className="text-pink-700 text-2xl sm:text-4xl font-bold mt-2">
          #LaKhilabaCollection
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {["image1", "image2", "image3", "image4", "Image5", "image6", "image7"].map(
            (image, index) => (
              <Image
                key={index}
                src={`/images/${image}.png`}
                alt={image}
                width={160}
                height={160}
                className="rounded-lg shadow-md object-cover w-[140px] sm:w-[160px]"
              />
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Page;

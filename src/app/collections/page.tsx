"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFavorites } from "@/context/FavoritesContext";

interface Product {
  id: number;
  excerpt: string;
  details: string;
  src: string;
}

export default function LaKhalabaShopPage() {
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  // 🩷 Product List (category removed)
  const products: Product[] = [
    {
      id: 1,
      excerpt: "Elegant pink dress perfect for casual & formal occasions.",
      details:
        "This elegant pink dress is made with high-quality premium lawn fabric. Perfect for festive events, parties, and casual gatherings.",
      src: "/images/image1.png",
    },
    {
      id: 2,
      excerpt: "Signature handcrafted piece from our premium line.",
      details:
        "A perfect fusion of modern and traditional design, made for those who want to stand out gracefully.",
      src: "/images/image2.png",
    },
    {
      id: 3,
      excerpt: "Cool and comfy cotton wear designed for everyday elegance.",
      details:
        "A breathable cotton outfit that keeps you stylish and comfortable throughout the day. Ideal for summer seasons.",
      src: "/images/image3.png",
    },
    {
      id: 4,
      excerpt: "Soft pastel dress for a minimal and classy everyday look.",
      details:
        "Made with premium cotton-lawn blend, this outfit is designed for comfort and everyday sophistication.",
      src: "/images/image4.png",
    },
    {
      id: 5,
      excerpt: "Luxurious maroon gown made for evening elegance.",
      details:
        "Crafted with pure silk and fine embroidery, this gown adds a royal touch to your wardrobe.",
      src: "/images/image5.png",
    },
    {
      id: 6,
      excerpt: "Golden luxury wear made for formal evening events.",
      details:
        "An elegant golden gown designed for formal occasions. The soft fabric and intricate work make it truly standout.",
      src: "/images/image6.png",
    },
    {
      id: 7,
      excerpt: "Lightweight everyday outfit for effortless grace.",
      details:
        "A relaxed-fit casual wear made from breathable cotton, perfect for daytime outings and meetups.",
      src: "/images/image7.png",
    },
    {
      id: 8,
      excerpt: "Classic formal outfit for modern women.",
      details:
        "Combining traditional cuts with modern aesthetics, this formal outfit defines sophistication.",
      src: "/images/image8.png",
    },
    {
      id: 9,
      excerpt: "Vibrant modern design from our latest drop.",
      details:
        "Bright and bold, this outfit is designed to bring color and energy to your wardrobe.",
      src: "/images/image9.png",
    },
    {
      id: 10,
      excerpt: "Exclusive handcrafted design for timeless charm.",
      details:
        "A special piece that captures the soul of La Khalaba — handmade embroidery and flawless finishing.",
      src: "/images/image10.png",
    },
    {
      id: 11,
      excerpt: "Simple yet elegant outfit for everyday wear.",
      details:
        "Designed for comfort, this outfit fits seamlessly into your daily style routine.",
      src: "/images/image11.png",
    },
    {
      id: 12,
      excerpt: "Trendy everyday outfit with minimal touch.",
      details:
        "This simple yet stylish piece works perfectly for casual outings and coffee days.",
      src: "/images/image12.png",
    },
  ];

  // 🔢 Pagination
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = products.slice(startIndex, startIndex + itemsPerPage);

  // ❤️ Wishlist Toggle
 const toggleFavorite = (product: Product) => {
  const isFav = favorites.some((item) => item.id === product.id);
  if (isFav) {
    removeFromFavorites(product.id);
  } else {
    addToFavorites({
      id: product.id,
      image: product.src, 
      category: product.excerpt, 
    });
  }
};



  // 👗 Read More Toggle
  const toggleDetails = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  // ⬆️ Auto Scroll to Top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <section className="min-h-screen bg-pink-50 py-10 px-6 md:px-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold text-pink-700">
          La Khalaba Collection
        </h1>
        <button
          onClick={() => router.push("/wishlist")}
          className="bg-pink-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-pink-700 transition"
        >
          Go to Wishlist ❤️ ({favorites.length})
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {displayedItems.map((item) => {
          const isFav = favorites.some((f) => f.id === item.id);
          return (
            <div
              key={item.id}
              className="relative flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative w-full lg:w-1/2">
                <Image
                  src={item.src}
                  alt="La Khalaba Dress"
                  width={700}
                  height={500}
                  className="w-full h-full object-cover"
                />
                {/* Heart Icon */}
                <button
                  onClick={() => toggleFavorite(item)}
                  className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-pink-100 transition"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isFav ? "fill-pink-600 text-pink-600" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="w-full lg:w-1/2 p-8 text-gray-800 space-y-5">
                <p className="text-lg italic text-gray-600">{item.excerpt}</p>

                {expandedItems.includes(item.id) && (
                  <p className="text-base text-gray-700 leading-relaxed">
                    {item.details}
                  </p>
                )}

                <button
                  onClick={() => toggleDetails(item.id)}
                  className="text-lg text-pink-600 font-semibold underline hover:text-pink-800 transition"
                >
                  {expandedItems.includes(item.id) ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-6 py-3 text-xl font-bold rounded-xl transition-all duration-300 ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-pink-600 text-white hover:bg-pink-700"
          }`}
        >
          Previous
        </button>

        <span className="text-2xl font-bold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-6 py-3 text-xl font-bold rounded-xl transition-all duration-300 ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-pink-600 text-white hover:bg-pink-700"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { useFavorites } from "@/context/FavoritesContext";
import Image from "next/image";

export default function WishlistPage() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Wishlist ❤️</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600 text-center">
          You have no favorite items yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-sm p-4 hover:shadow-md transition"
            >
              <Image
                src={item.image}
                alt={item.category}
                width={300}
                height={300}
                className="rounded mb-3 object-cover w-full h-auto"
              />

              <h2 className="text-lg font-semibold text-center">{item.category}</h2>

              <button
                onClick={() => removeFromFavorites(item.id)}
                className="mt-2 text-red-500 hover:underline block mx-auto"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

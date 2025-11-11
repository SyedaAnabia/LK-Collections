"use client"
import React from 'react';
import { createClient } from '@sanity/client'
import Image from 'next/image';
import Link from 'next/link';

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

interface Product {
  slug: any;
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
}

const Clothes: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] [0...4] {
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        tags,
        category,
        "slug": slug.current
      }`;

      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-3 mb-4 text-2xl font-semibold">Clothes Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-[#F4F5F7] shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/product/${product.slug}`}>
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={285}
                height={301}
                className="w-full h-80 object-cover rounded-md"
              />

              <div className="mt-4">
                <h2 className="text-[20px] font-semibold text-[#3A3A3A] ml-2 mt-2">{product.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-1 ml-2">{product.description}</p>
                <div className="flex items-center justify-between mt-2 ml-2 mr-2">
                  <p className="text-[18px] font-semibold">$ {product.price}</p>
                  {product.discountPercentage > 0 && (
                    <span className="text-red-500 text-sm">-{product.discountPercentage}% OFF</span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothes;

import { createClient } from '@sanity/client';
import fetch from 'node-fetch'; // Only needed if using Node < 18
import fs from 'fs';

// ✅ Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN, // required for write operations
  useCdn: false,
  apiVersion: '2025-01-01',
});

// ✅ Upload image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`✅ Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('❌ Failed to upload image:', imageUrl, error.message);
    return null;
  }
}

// ✅ Upload a single product document
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: { _ref: imageId },
        },
        tags: product.tags || [],
        discountPercentage: product.discountPercentage || 0, // ✅ corrected typo
        description: product.description || '',
        isNew: product.isNew || false,
      };

      const createdProduct = await client.create(document);
      console.log(`✅ Product uploaded: ${product.title} (${createdProduct._id})`);
    } else {
      console.warn(`⚠️ Skipped product "${product.title}" (image upload failed)`);
    }
  } catch (error) {
    console.error(`❌ Error uploading product "${product.title}":`, error.message);
  }
}

// ✅ Fetch and import all products
async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }

    console.log('🎉 All products imported successfully!');
  } catch (error) {
    console.error('❌ Error fetching products:', error.message);
  }
}

// ✅ Start import
importProducts();

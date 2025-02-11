"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaStar, FaShoppingCart } from "react-icons/fa";

// Mock data - dalam aplikasi nyata, data ini akan diambil dari API
const products = [
  {
    id: "1",
    name: "Asian Cake",
    price: 2.05,
    salePrice: 1.12,
    description:
      "Delicious Asian cake made with the finest ingredients. Perfect for any occasion.",
    image:
      "https://templatekit.jegtheme.com/grochy/wp-content/uploads/sites/254/2022/04/cake-300x300.jpg",
    category: "snacks",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Great taste and texture!",
      },
      {
        id: 2,
        user: "Jane Smith",
        rating: 4,
        comment: "Very good, but a bit too sweet for me.",
      },
    ],
  },
];

// Fungsi untuk mendapatkan produk berdasarkan ID
const getProductById = (id: string) => products.find((p) => p.id === id);

export default function ProductDetail() {
  const { id } = useParams(); // Ambil id dari URL
  const product = getProductById(id as string);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name}(s) to cart`);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-2 text-gray-600">
              ({product.reviews.length} reviews)
            </span>
          </div>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="mb-4">
            {product.salePrice ? (
              <>
                <span className="text-3xl font-bold text-primary">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="ml-2 text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex items-center mb-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-gray-200 px-3 py-1 rounded-l-md"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, Number.parseInt(e.target.value)))
              }
              className="w-16 text-center border-t border-b border-gray-200 py-1"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="bg-gray-200 px-3 py-1 rounded-r-md"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

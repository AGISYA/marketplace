"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function RecentlyViewed() {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  useEffect(() => {
    // In a real app, you'd fetch this from localStorage or an API
    const mockRecentProducts: Product[] = [
      {
        id: 1,
        name: "Asian Cake",
        price: 2.05,
        image:
          "https://templatekit.jegtheme.com/grochy/wp-content/uploads/sites/254/2022/04/cake-300x300.jpg",
      },
      {
        id: 2,
        name: "Bee Soap",
        price: 1.19,
        image:
          "https://templatekit.jegtheme.com/grochy/wp-content/uploads/sites/254/2022/04/handmade-soaps-300x300.jpg",
      },
      {
        id: 3,
        name: "Brastagi Carrots",
        price: 1.92,
        image:
          "https://templatekit.jegtheme.com/grochy/wp-content/uploads/sites/254/2022/04/carrot-vegetable-with-leaves-isolated-on-white-background-cutout-300x300.jpg",
      },
    ];
    setRecentProducts(mockRecentProducts);
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Recently Viewed Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recentProducts.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="block"
          >
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={150}
                height={150}
                className="mx-auto mb-2"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export default function ProductComparison() {
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);

  // const addToComparison = (product: Product) => {
  //   if (
  //     comparedProducts.length < 3 &&
  //     !comparedProducts.some((p) => p.id === product.id)
  //   ) {
  //     setComparedProducts([...comparedProducts, product]);
  //   }
  // };

  const removeFromComparison = (productId: number) => {
    setComparedProducts(comparedProducts.filter((p) => p.id !== productId));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Product Comparison</h2>
      {comparedProducts.length === 0 ? (
        <p>No products selected for comparison.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Product</th>
                {comparedProducts.map((product) => (
                  <th key={product.id} className="border p-2">
                    <div className="flex justify-between items-center">
                      <span>{product.name}</span>
                      <button onClick={() => removeFromComparison(product.id)}>
                        <FaTimes className="text-red-500" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Image</td>
                {comparedProducts.map((product) => (
                  <td key={product.id} className="border p-2">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={100}
                      height={100}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-2">Price</td>
                {comparedProducts.map((product) => (
                  <td key={product.id} className="border p-2">
                    ${product.price.toFixed(2)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-2">Category</td>
                {comparedProducts.map((product) => (
                  <td key={product.id} className="border p-2">
                    {product.category}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-2">Description</td>
                {comparedProducts.map((product) => (
                  <td key={product.id} className="border p-2">
                    {product.description}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

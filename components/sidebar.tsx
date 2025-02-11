"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const brands = [
  "Chobani",
  "Popsedont",
  "Foster",
  "Floristan",
  "Tarragon",
  "Arguta",
];
const categories = [
  { name: "Daily Needs", count: 3 },
  { name: "Drinks", count: 3 },
  { name: "Fruits", count: 4 },
  { name: "Meat", count: 3 },
  { name: "Snacks", count: 3 },
  { name: "Vegetable", count: 4 },
];

export function Sidebar() {
  const [openBrands, setOpenBrands] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="search"
          placeholder="Search products..."
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <button
          onClick={() => setOpenBrands(!openBrands)}
          className="w-full text-left p-2 font-semibold flex justify-between items-center"
        >
          All Brands
          {openBrands ? (
            <FiChevronUp className="w-5 h-5" />
          ) : (
            <FiChevronDown className="w-5 h-5" />
          )}
        </button>
        {openBrands && (
          <div className="mt-2 space-y-2">
            {brands.map((brand) => (
              <button
                key={brand}
                className="w-full text-left p-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-100"
              >
                {brand}
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => setOpenCategories(!openCategories)}
          className="w-full text-left p-2 font-semibold flex justify-between items-center"
        >
          Categories
          {openCategories ? (
            <FiChevronUp className="w-5 h-5" />
          ) : (
            <FiChevronDown className="w-5 h-5" />
          )}
        </button>
        {openCategories && (
          <div className="mt-2 space-y-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className="w-full text-left p-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-100 flex justify-between"
              >
                {category.name}
                <span className="text-xs text-gray-400">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

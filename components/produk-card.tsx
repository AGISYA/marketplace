import Image from "next/image";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
}

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  isNew,
}: ProductCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  return (
    <div className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute right-4 top-4 space-y-2">
          {isNew && (
            <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              New
            </span>
          )}
          {discount && (
            <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
        </div>
        <button className="absolute right-4 top-4 h-8 w-8 rounded-full bg-white/80 text-rose-500 opacity-0 transition-opacity hover:bg-white hover:text-rose-600 group-hover:opacity-100 flex items-center justify-center">
          <FiHeart className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-2 pt-4">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-green-600">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center group">
          <FiShoppingCart className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

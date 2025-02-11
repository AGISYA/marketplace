import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export function PromoBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-green-600">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500/50" />
      <div className="relative p-8 sm:p-12">
        <div className="max-w-md">
          <span className="inline-block text-white/80 text-sm font-medium mb-2">
            Best Deal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Up To 70% Discount
          </h2>
          <p className="text-white/90 mb-6">
            Lorem ipsum dolor sit amet adipiscing. Shop now and save big on your
            favorite products.
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-md font-medium group flex items-center">
            Buy Online
            <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      <Image
        src="/placeholder.svg?height=400&width=400"
        alt="Promotional banner"
        width={400}
        height={400}
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block"
      />
    </div>
  );
}

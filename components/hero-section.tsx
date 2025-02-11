import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Cokelat Hijau Alami Promosi Kopi Banner (Presentasi).png"
          alt="Grocery Shopping Bags"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="" // Menambahkan efek transparan
        />
      </div>

      {/* Content */}
      <div className="container relative min-h-[600px] flex items-center">
        <div className="max-w-xl bg-white bg-opacity-30 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <span className="text-primary text-black bg-white px-4 py-2 rounded-full text-sm font-medium">
              Compare & Save 30% Off
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Complete & Cheapest Wholesale Center
          </h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            mod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-gray-800 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Shop Now
            </button>
            <button className="bg-lime-600 text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

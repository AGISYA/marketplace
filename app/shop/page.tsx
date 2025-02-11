import { ProductCard } from "@/components/produk-card";
import { PromoBanner } from "@/components/promo-baner";
import { Sidebar } from "@/components/sidebar";

const products = [
  {
    name: "Asian Cake",
    price: 1.12,
    originalPrice: 2.05,
    image: "/images/cake-300x300.jpg",
    isNew: true,
  },
  {
    name: "Bee Soap",
    price: 1.19,
    image: "/images/handmade-soaps-300x300.jpg",
  },
  {
    name: "Brastagi Carrots",
    price: 0.78,
    originalPrice: 1.92,
    image:
      "/images/carrot-vegetable-with-leaves-isolated-on-white-background-cutout-300x300.jpg",
  },
  {
    name: "Fresh Apples",
    price: 2.99,
    image: "/images/download (2).jpg",
    isNew: true,
  },
  {
    name: "Organic Milk",
    price: 3.49,
    originalPrice: 4.99,
    image:
      "/images/milk-or-juiice-blank-white-carton-packs-isolated-on-white--300x300.jpg",
  },
  {
    name: "Whole Grain Bread",
    price: 2.49,
    image:
      "/images/Seeded Whole Grain No-Knead Bread_ Norwegian bliss in every bite! - Arctic Grub.jpg",
  },
];

export default function Shop() {
  return (
    <div className="bg-white text-black">
      <div className="container  py-12">
        <div className="grid grid-cols-1 md:mt-20 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </aside>

          <main className="lg:col-span-3 space-y-8">
            <PromoBanner />

            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing{" "}
                <span className="font-medium text-foreground">
                  {products.length}
                </span>{" "}
                products
              </p>
              <select
                defaultValue="default"
                className="border rounded-md py-2 px-4 bg-white text-gray-700 hover:border-gray-400 focus:outline-none focus:border-primary"
              >
                <option value="default">Default sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Daily Needs",
    count: 3,
    image:
      "/images/grocery-bag-with-fruits-and-vegetables-isolated-on-white-150x150.jpg",
  },
  {
    name: "Drinks",
    count: 3,
    image:
      "/images/tomato-juice-carton-cardboard-box-pack-isolated-on-white-backgro-150x150.jpg",
  },
  {
    name: "Fruits",
    count: 4,
    image: "/images/fruits-isolated-on-white-background-150x150.jpg",
  },
  {
    name: "Meat",
    count: 3,
    image:
      "/images/raw-pork-chop-meat-isolated-on-white-background-cutout-300x300.jpg",
  },
  {
    name: "Snacks",
    count: 3,
    image: "/images/cookies-and-biscuits-in-wooden-bowl-over-white-150x150.jpg",
  },
  {
    name: "Vegetable",
    count: 4,
    image: "/images/vegetables-on-a-round-board-150x150.jpg",
  },
];

export function CategorySection() {
  return (
    <section className="py-12 text-black">
      <div className="container">
        <div className="grid grid-cols-2 mt-20 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="group"
            >
              <div
                className={`flex flex-col items-center p-6 rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105`}
              >
                <div className="relative w-20 h-20 mb-4">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
                <span className="text-sm text-muted-foreground">
                  ({category.count} items)
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FaStar, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Fresh Orange Juice",
    category: "Drinks",
    price: 12.99,
    oldPrice: 15.99,
    rating: 5,
    image:
      "/images/Eye-Catching Juice Bottle Label Design _ Packaging Design Agency in Delhi.jpg",
  },
  {
    id: 2,
    name: "Fresh Organic Vegetables",
    category: "Vegetables",
    price: 8.99,
    oldPrice: 10.99,
    rating: 4,
    image: "/images/vegetables.jpg",
  },
  {
    id: 3,
    name: "Fresh Red Apple",
    category: "Fruits",
    price: 5.99,
    oldPrice: 7.99,
    rating: 5,
    image: "/images/download (2).jpg",
  },
  {
    id: 4,
    name: "Fresh Meat Package",
    category: "Meat",
    price: 25.99,
    oldPrice: 29.99,
    rating: 4,
    image: "/images/Pack Tradicional.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 text-black bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    Save{" "}
                    {Math.round(
                      ((product.oldPrice - product.price) / product.oldPrice) *
                        100
                    )}
                    %
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

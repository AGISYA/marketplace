import { FaCalendar, FaUser, FaArrowRight } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "Tips for Choosing Fresh Vegetables",
    excerpt: "Learn how to select the freshest vegetables for your meals...",
    date: "September 15, 2023",
    author: "John Doe",
    image: "/images/Optimal Vegetable Storage for Maximum Freshness.jpg",
  },
  {
    id: 2,
    title: "Benefits of Organic Products",
    excerpt: "Discover why organic products are better for your health...",
    date: "September 10, 2023",
    author: "Jane Smith",
    image: "/images/Why You Should Eat Organic_ 10 Key Benefits.jpg",
  },
  {
    id: 3,
    title: "Seasonal Fruits Guide",
    excerpt: "Your complete guide to choosing the best seasonal fruits...",
    date: "September 5, 2023",
    author: "Mike Johnson",
    image:
      "/images/The Best Seasonal Fruits Guide + Printable Seasonal Fruit Chart.jpg",
  },
];

export default function LatestNews() {
  return (
    <section className="py-16 text-black">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest articles and news about healthy food
            and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <button className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <FaArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

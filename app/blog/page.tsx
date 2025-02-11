import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaUser, FaComments } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "10 Superfoods to Boost Your Immune System",
    excerpt:
      "Discover the power of these nutrient-rich foods that can help strengthen your body's natural defenses.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "June 1, 2023",
    author: "Jane Doe",
    comments: 5,
    category: "Nutrition",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Meal Prepping",
    excerpt:
      "Learn how to save time and eat healthier with our comprehensive meal prepping strategies.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "May 25, 2023",
    author: "John Smith",
    comments: 8,
    category: "Cooking Tips",
  },
  {
    id: 3,
    title: "Sustainable Shopping: Reducing Your Carbon Footprint",
    excerpt:
      "Explore eco-friendly shopping habits that can help you make a positive impact on the environment.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    date: "May 18, 2023",
    author: "Emily Green",
    comments: 3,
    category: "Sustainability",
  },
  {
    id: 4,
    title: "Seasonal Cooking: Spring Recipes to Try",
    excerpt:
      "Welcome the spring season with these fresh and delicious recipes featuring seasonal produce.",
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    date: "May 10, 2023",
    author: "Chef Michael",
    comments: 12,
    category: "Recipes",
  },
];

export default function Blog() {
  return (
    <main className="pt-20 bg-white min-h-screen">
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8 text-center">
            Grochy Blog
          </h1>
          <div className="grid grid-cols-1 text-black md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    <Link
                      href={`/blog/${post.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaCalendar className="mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <FaUser className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <FaComments className="mr-2" />
                    <span>{post.comments} comments</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-8">
            Stay updated with our latest blog posts, recipes, and exclusive
            offers!
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow py-2 px-4 rounded-l-md focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-secondary hover:bg-secondary-dark text-black py-2 px-6 rounded-r-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

import { FaPaperPlane } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80">
              Get the latest updates about new products and upcoming sales
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <FaPaperPlane />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

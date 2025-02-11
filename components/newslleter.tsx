import { FaPaperPlane } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="py-16 text-black bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-black lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-black">
              Get the latest updates about new products and upcoming sales
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <form className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 min-w-0 px-6 py-4 rounded-md focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-4 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
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

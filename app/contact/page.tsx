import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="pt-20 bg-white text-black min-h-screen">
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="text-primary text-xl mr-4" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-primary text-xl mr-4" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p>support@grochy.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-primary text-xl mr-4" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p>123 Grocery Lane, Fresh City, FC 12345</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="py-2 font-medium">Monday - Friday:</td>
                      <td className="py-2">9:00 AM - 8:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Saturday:</td>
                      <td className="py-2">10:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Sunday:</td>
                      <td className="py-2">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Question?</h2>
          <p className="mb-8">
            Check out our FAQ page for quick answers to common questions.
          </p>
          <a
            href="/pages/faq"
            className="bg-white text-primary py-2 px-6 rounded-md hover:bg-gray-100 transition-colors inline-block"
          >
            View FAQs
          </a>
        </div>
      </section>
    </main>
  );
}

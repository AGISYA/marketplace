import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Colette Daniel",
    role: "Housewife",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco eiusmod tempor incididunt.",
  },
  {
    name: "Alena Huffman",
    role: "Housewife",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco eiusmod tempor incididunt.",
  },
  {
    name: "Sinead Bailey",
    role: "Housewife",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco eiusmod tempor incididunt.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 text-black bg-gray-100">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <FaQuoteLeft className="text-4xl text-primary mb-4" />
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

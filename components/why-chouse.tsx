import { FaTruck, FaLeaf, FaHeadset, FaWallet } from "react-icons/fa";

const features = [
  {
    icon: FaTruck,
    title: "Free Shipping",
    description: "Free shipping on all orders over $100",
  },
  {
    icon: FaLeaf,
    title: "Fresh Products",
    description: "100% organic products from local farmers",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "Dedicated support anytime you need",
  },
  {
    icon: FaWallet,
    title: "Secure Payment",
    description: "Multiple secure payment methods",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer the best service and quality products for our valuable
            customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

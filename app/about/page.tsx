import Image from "next/image";
import { FaLeaf, FaUsers, FaTruck, FaAward } from "react-icons/fa";

const features = [
  {
    icon: FaLeaf,
    title: "Fresh Products",
    description:
      "We source the freshest, highest quality products for our customers.",
  },
  {
    icon: FaUsers,
    title: "Customer First",
    description: "Our customers are at the heart of everything we do.",
  },
  {
    icon: FaTruck,
    title: "Fast Delivery",
    description: "We ensure quick and reliable delivery to your doorstep.",
  },
  {
    icon: FaAward,
    title: "Quality Assured",
    description: "We guarantee the quality of all our products.",
  },
];

export default function About() {
  return (
    <main className="bg-background-light bg-white">
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Grocery store aisle"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Grochy</h1>
          <p className="text-xl">
            Your one-stop shop for fresh and quality groceries
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container text-black mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                Founded in 2020, Grochy was born out of a passion for providing
                high-quality, fresh groceries to our local community. What
                started as a small, family-owned store has now grown into a
                trusted online marketplace, serving customers across the
                country.
              </p>
              <p className="mb-4">
                {`Our mission is simple: to make grocery shopping convenient,
                enjoyable, and affordable for everyone. We believe that access
                to fresh, nutritious food should be easy, and we're committed to
                bringing the best products right to your doorstep.`}
              </p>
              <p>
                {`At Grochy, we work directly with local farmers and suppliers to
                ensure that you get the freshest produce and best quality
                products. We're not just a grocery store; we're your partner in
                creating delicious meals and maintaining a healthy lifestyle.`}
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fresh vegetables"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Grochy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="text-5xl mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Grochy Family</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            {` We're always looking for passionate individuals to join our team. If
            you're excited about fresh food and great customer service, we'd
            love to hear from you!`}
          </p>
          <button className="bg-primary text-black py-2 px-6 rounded-md hover:bg-primary-dark transition-colors">
            View Career Opportunities
          </button>
        </div>
      </section>
    </main>
  );
}

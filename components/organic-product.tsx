import Image from "next/image";

export default function OrganicProduce() {
  return (
    <section className="py-16 text-black">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="/images/produk.jpg"
            alt="Organic Produce"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            We Providing Healthy Super Organic Produce
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dois
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Qauis
            nostrud exercitation ullamco commodo consequat labore et dolore
            magna aliqua.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">$4.46</h3>
              <h4 className="text-xl font-medium mb-2">Canned Fish</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">$2.89</h3>
              <h4 className="text-xl font-medium mb-2">Matcha Soda</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

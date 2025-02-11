export default function BestDeals() {
  const deals = [
    { title: "Healthy Food", discount: "10% OFF", bgColor: "bg-[#b16176]" },
    { title: "Organic Food", discount: "15% OFF", bgColor: "bg-[#6db464]" },
    { title: "Fresh Fruits", discount: "25% OFF", bgColor: "bg-[#cd6363]" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b text-black from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
          Best Deals for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className={`${deal.bgColor} p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <span className="text-white font-semibold text-sm uppercase">
                Best Deal
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white">
                {deal.title}
              </h3>
              <p className="text-white/90 mb-4 text-lg">
                Get Up To {deal.discount}
              </p>
              <button className="bg-white text-gray-800 px-6 py-2 rounded-md hover:bg-gray-100 transition-all shadow-md hover:shadow-lg">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

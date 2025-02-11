import { FaClock } from "react-icons/fa";

export default function SpecialOffers() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Offer */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://templatekit.jegtheme.com/grochy/wp-content/uploads/sites/180/2021/09/fresh-vegetables-in-wicker-basket.jpg"
              alt="Fresh Vegetables Offer"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-end">
              <span className="text-primary bg-white px-4 py-2 rounded-full text-sm font-medium w-fit mb-4">
                Limited Time Offer
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">
                Fresh Vegetables <br />
                Big Discount
              </h3>
              <div className="flex items-center gap-2 text-white mb-4">
                <FaClock />
                <span>Only for Today</span>
              </div>
              <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors w-fit">
                Shop Now
              </button>
            </div>
          </div>

          {/* Second Offer */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://templatekit.jegtheme.com/grochy/wp-content/uploads/sites/180/2021/09/fresh-fruits-in-wicker-basket.jpg"
              alt="Fresh Fruits Offer"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-end">
              <span className="text-primary bg-white px-4 py-2 rounded-full text-sm font-medium w-fit mb-4">
                Super Discount
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">
                Fresh Fruits <br />
                Up to 30% Off
              </h3>
              <div className="flex items-center gap-2 text-white mb-4">
                <FaClock />
                <span>Limited Time Offer</span>
              </div>
              <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors w-fit">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

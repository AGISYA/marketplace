import BestDeals from "@/components/best-deals";
import { CategorySection } from "@/components/category-section";
// import CategorySection from "@/components/categorysection";
import FeaturedProducts from "@/components/featured-product";
import HeroSection from "@/components/hero-section";
import LatestNews from "@/components/latest-news";
import Newsletter from "@/components/newslleter";
import OrganicProduce from "@/components/organic-product";
import Testimonials from "@/components/testimonial";
import WeeklyDiscount from "@/components/weekly-discount";

export default function Home() {
  return (
    <main className="bg-white">
      <CategorySection />
      <HeroSection />
      <BestDeals />
      <FeaturedProducts />
      <OrganicProduce />
      <WeeklyDiscount />
      <Testimonials />
      <LatestNews />
      <Newsletter />
    </main>
  );
}

import { FiPhone, FiMapPin, FiDownload, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

export function TopBanner() {
  return (
    <div className="bg-green-600 text-white py-2.5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="tel:+622864349"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <FiPhone size={16} className="shrink-0" />
              <span>+62-2864-349-1</span>
            </Link>
            <Link
              href="/locations"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <FiMapPin size={16} className="shrink-0" />
              <span>Store Location</span>
            </Link>
            <Link
              href="/app"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <FiDownload size={16} className="shrink-0" />
              <span>Download App</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">(100% Secure)</span>
            <span>delivery without contacting the courier</span>
            <FiChevronRight size={16} className="shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

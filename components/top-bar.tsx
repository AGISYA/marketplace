import { FaPhone, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2">
      <div className="container flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <FaPhone className="text-xs" />
            <span>+62-2864-349-1</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Store Location</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMobileAlt />
            <span>Download App</span>
          </div>
        </div>
        <div>
          <span className="font-semibold">(100% Secure)</span>
          <span className="ml-2">delivery without contacting the courier.</span>
        </div>
      </div>
    </div>
  );
}

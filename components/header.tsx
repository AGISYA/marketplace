import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Pages", href: "/pages" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="Grochy"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  item.href === "/shop" ? "text-green-600" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-green-600">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-green-600">
              <FiShoppingBag className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 hover:text-green-600">
              <FiMenu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

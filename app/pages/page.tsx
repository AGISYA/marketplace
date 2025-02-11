import Link from "next/link";

const pages = [
  { title: "FAQ", path: "/pages/faq" },
  { title: "Terms & Conditions", path: "/pages/terms" },
  { title: "Privacy Policy", path: "/pages/privacy" },
];

export default function Pages() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Pages</h1>
      <ul className="space-y-4">
        {pages.map((page) => (
          <li key={page.path}>
            <Link
              href={page.path}
              className="text-xl text-primary hover:underline"
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

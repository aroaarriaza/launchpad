import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Writing" },
];

export default function Navbar() {
  return (
    <header className="border-b border-neutral-100 dark:border-neutral-800">
      <nav className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight hover:opacity-70 transition-opacity">
          Elena Voss
        </Link>
        <ul className="flex gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

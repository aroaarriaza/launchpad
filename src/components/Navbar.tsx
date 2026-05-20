import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre mí" },
  { href: "/blog", label: "Blog" },
  { href: "/wordle", label: "Wordle" },
  { href: "/tasks", label: "Tareas" },
];

export default function Navbar() {
  return (
    <header className="border-b border-neutral-100 dark:border-neutral-800">
      <nav className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight bg-gradient-to-r from-neutral-900 to-violet-700 dark:from-white dark:to-violet-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Elena Voss
        </Link>
        <ul className="flex gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}

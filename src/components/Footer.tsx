const links = [
  { href: "https://github.com/elenavoss", label: "GitHub" },
  { href: "https://twitter.com/elenavoss", label: "Twitter" },
  { href: "mailto:hello@elenavoss.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 dark:border-neutral-800 mt-auto">
      <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
        <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Elena Voss</p>
        <ul className="flex gap-4">
          {links.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

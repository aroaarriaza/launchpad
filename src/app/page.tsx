import Link from "next/link";

const projects = [
  {
    name: "Chromatic",
    description: "Genera paletas de color accesibles a partir de cualquier imagen.",
    url: "https://chromatic.design",
  },
  {
    name: "Readly",
    description: "Una app de lectura minimalista con soporte offline.",
    url: "https://readly.app",
  },
  {
    name: "Open Hours",
    description: "Un plugin de Figma para gestionar estados de componentes.",
    url: "https://github.com/elenavoss/open-hours",
  },
];

const posts = [
  { slug: "why-spacing-matters", title: "Por qué el espaciado importa más que el color" },
  { slug: "figma-to-code", title: "De Figma a código: mi flujo sin fricciones" },
  { slug: "building-a-plugin", title: "Lo que aprendí construyendo mi primer plugin" },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 space-y-20">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-neutral-900 to-violet-700 dark:from-white dark:to-violet-400 bg-clip-text text-transparent">
          Elena Voss
        </h1>
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          Diseñadora de producto y desarrolladora frontend afincada en Berlín. Trabajo
          en la intersección entre diseño y código, construyendo interfaces que son
          bonitas y funcionales a la vez. Actualmente explorando motion design y
          sistemas de diseño escalables.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-6">
          Proyectos
        </h2>
        <ul className="space-y-4">
          {projects.map((project, i) => (
            <li
              key={project.name}
              className="slide-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 p-4 rounded-xl border border-transparent hover:border-violet-100 dark:hover:border-violet-900 hover:bg-violet-50/50 dark:hover:bg-violet-950/20 transition-all duration-200"
              >
                <div>
                  <span className="font-medium group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                    {project.name}
                  </span>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {project.description}
                  </p>
                </div>
                <span className="text-neutral-300 dark:text-neutral-600 group-hover:text-violet-500 dark:group-hover:text-violet-400 text-sm mt-0.5 shrink-0 transition-colors">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-6">
          Blog
        </h2>
        <ul className="space-y-3">
          {posts.map((post, i) => (
            <li
              key={post.slug}
              className="slide-in"
              style={{ animationDelay: `${(projects.length + i) * 80}ms` }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-center gap-2 text-sm font-medium hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
              >
                <span className="w-1 h-1 rounded-full bg-violet-300 dark:bg-violet-600 group-hover:bg-violet-500 transition-colors shrink-0" />
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

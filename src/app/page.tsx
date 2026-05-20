import Link from "next/link";

const projects = [
  {
    name: "Chromatic",
    description: "Genera paletas de color accesibles a partir de cualquier imagen.",
    url: "https://chromatic.design",
    tag: "Herramienta",
  },
  {
    name: "Readly",
    description: "Una app de lectura minimalista con soporte offline.",
    url: "https://readly.app",
    tag: "App",
  },
  {
    name: "Open Hours",
    description: "Un plugin de Figma para gestionar estados de componentes.",
    url: "https://github.com/elenavoss/open-hours",
    tag: "Plugin",
  },
];

const posts = [
  { slug: "why-spacing-matters", title: "Por qué el espaciado importa más que el color" },
  { slug: "figma-to-code", title: "De Figma a código: mi flujo sin fricciones" },
  { slug: "building-a-plugin", title: "Lo que aprendí construyendo mi primer plugin" },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 space-y-24">
      {/* Hero */}
      <section className="space-y-6">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-800 flex items-center justify-center shadow-lg shadow-violet-500/20">
          <span className="font-display text-white text-lg font-semibold tracking-tight">EV</span>
        </div>

        <div className="space-y-4">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-400">
            <span className="animate-pulse-dot w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            Disponible para proyectos
          </div>

          <h1 className="font-display text-4xl font-semibold tracking-tight leading-tight bg-gradient-to-br from-neutral-900 via-neutral-700 to-violet-700 dark:from-white dark:via-neutral-200 dark:to-violet-400 bg-clip-text text-transparent">
            Elena Voss
          </h1>

          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Diseñadora de producto y desarrolladora frontend afincada en Berlín. Trabajo
            en la intersección entre diseño y código, construyendo interfaces que son
            bonitas y funcionales a la vez. Actualmente explorando motion design y
            sistemas de diseño escalables.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-8">
          Proyectos seleccionados
        </h2>
        <ul className="space-y-3">
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
                className="group flex items-center gap-5 p-4 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-violet-200 dark:hover:border-violet-800 hover:bg-violet-50/60 dark:hover:bg-violet-950/30 transition-all duration-200"
              >
                <span className="text-xs font-mono text-neutral-300 dark:text-neutral-600 w-5 shrink-0 group-hover:text-violet-400 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="font-medium group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                      {project.name}
                    </span>
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 font-normal">
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
                    {project.description}
                  </p>
                </div>
                <span className="text-neutral-300 dark:text-neutral-600 group-hover:text-violet-500 dark:group-hover:text-violet-400 text-sm shrink-0 transition-colors">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Blog */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400">
            Últimas entradas
          </h2>
          <Link
            href="/blog"
            className="text-xs text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Ver todas →
          </Link>
        </div>
        <ul className="space-y-1">
          {posts.map((post, i) => (
            <li
              key={post.slug}
              className="slide-in"
              style={{ animationDelay: `${(projects.length + i) * 80}ms` }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-center gap-3 py-3 px-1 rounded-lg hover:px-3 text-sm font-medium hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-200 border-b border-neutral-100 dark:border-neutral-800/60 last:border-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-200 dark:bg-violet-800 group-hover:bg-violet-500 transition-colors shrink-0" />
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

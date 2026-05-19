import Link from "next/link";

const projects = [
  {
    name: "Chromatic",
    description: "Generate accessible color palettes from any image.",
    url: "https://chromatic.design",
  },
  {
    name: "Readly",
    description: "A minimal reading app with offline support.",
    url: "https://readly.app",
  },
  {
    name: "Open Hours",
    description: "A Figma plugin for managing component states.",
    url: "https://github.com/elenavoss/open-hours",
  },
];

const posts = [
  { slug: "why-spacing-matters", title: "Why spacing matters more than color" },
  { slug: "figma-to-code", title: "From Figma to code: my frictionless workflow" },
  { slug: "building-a-plugin", title: "What I learned building my first plugin" },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 space-y-20">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight mb-4">Elena Voss</h1>
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          Product designer and frontend developer based in Berlin. I work at the
          intersection of design and code, building interfaces that are both
          beautiful and functional. Currently exploring motion design and scalable
          design systems.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-6">
          Projects
        </h2>
        <ul className="space-y-6">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4"
              >
                <div>
                  <span className="font-medium group-hover:underline underline-offset-4">
                    {project.name}
                  </span>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {project.description}
                  </p>
                </div>
                <span className="text-neutral-300 dark:text-neutral-600 text-sm mt-0.5 shrink-0">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-6">
          Writing
        </h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="font-medium hover:underline underline-offset-4"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

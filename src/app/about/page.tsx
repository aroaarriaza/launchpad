import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Diseñadora de producto y desarrolladora frontend afincada en Berlín. Bio, experiencia y habilidades.",
  openGraph: {
    title: "Sobre mí — Elena Voss",
    description: "Diseñadora de producto y desarrolladora frontend afincada en Berlín.",
    url: "/about",
  },
};

const skills = [
  { category: "Diseño", items: ["Figma", "sistemas de diseño", "motion design", "tipografía"] },
  { category: "Desarrollo", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Herramientas", items: ["Git", "Vercel", "Framer", "Notion"] },
];

const experience = [
  {
    role: "Diseñadora de producto senior",
    company: "Lumen Studio",
    period: "2022 — presente",
    description:
      "Lidero el diseño de producto de una plataforma B2B de gestión de equipos creativos. Construyo y mantengo el sistema de diseño, defino patrones de interacción y colaboro directamente con ingeniería.",
  },
  {
    role: "Desarrolladora frontend & diseñadora",
    company: "Freelance",
    period: "2019 — 2022",
    description:
      "Trabajé con startups en etapa temprana para llevar sus productos del concepto al lanzamiento. Diseño y código en el mismo flujo, desde wireframes hasta componentes en producción.",
  },
  {
    role: "Diseñadora UX",
    company: "Hark Digital",
    period: "2017 — 2019",
    description:
      "Primer rol profesional. Investigación de usuario, tests de usabilidad y diseño de interfaces para clientes del sector retail y educación.",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 space-y-20">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight mb-6">Sobre mí</h1>
        <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <p>
            Soy Elena Voss, diseñadora de producto y desarrolladora frontend afincada en Berlín.
            Llevo casi diez años trabajando en la intersección entre diseño y código — un lugar
            que todavía me parece el más interesante del mundo del software.
          </p>
          <p>
            Mi manera de trabajar es simple: diseño en el mismo lenguaje que el código. No entrego
            archivos estáticos esperando que alguien los traduzca. Construyo componentes, defino
            sistemas y escribo el código que los hace funcionar.
          </p>
          <p>
            Fuera del trabajo me interesan la tipografía, la fotografía analógica y los idiomas.
            Actualmente aprendiendo japonés, con resultados modestos.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          Habilidades
        </h2>
        <dl className="space-y-4">
          {skills.map(({ category, items }) => (
            <div key={category} className="flex gap-8">
              <dt className="w-28 shrink-0 text-sm text-neutral-400">{category}</dt>
              <dd className="text-sm text-neutral-700 dark:text-neutral-300">
                {items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          Experiencia
        </h2>
        <ul className="space-y-10">
          {experience.map((job) => (
            <li key={job.company}>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <span className="font-medium">{job.role}</span>
                <span className="text-xs text-neutral-400 shrink-0">{job.period}</span>
              </div>
              <p className="text-sm text-neutral-400 mb-2">{job.company}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {job.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">
          Contacto
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Para proyectos, colaboraciones o simplemente para saludar:{" "}
          <a
            href="mailto:hello@elenavoss.com"
            className="font-medium text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4"
          >
            hello@elenavoss.com
          </a>
        </p>
      </section>
    </main>
  );
}

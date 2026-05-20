import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Artículos sobre diseño, código y la intersección entre ambos.",
  openGraph: {
    title: "Blog — Elena Voss",
    description: "Artículos sobre diseño, código y la intersección entre ambos.",
    url: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl font-semibold tracking-tight mb-10 bg-gradient-to-br from-neutral-900 via-neutral-700 to-violet-700 dark:from-white dark:via-neutral-200 dark:to-violet-400 bg-clip-text text-transparent">
        Blog
      </h1>
      <ul className="space-y-4">
        {posts.map((post, i) => (
          <li
            key={post.slug}
            className="slide-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block p-5 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-violet-200 dark:hover:border-violet-800 hover:bg-violet-50/60 dark:hover:bg-violet-950/30 transition-all duration-200"
            >
              <p className="text-xs text-violet-400 dark:text-violet-500 mb-2 font-mono">{post.date}</p>
              <h2 className="font-display text-xl font-semibold mb-1.5 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

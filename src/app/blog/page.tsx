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
      <h1 className="text-sm font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-10">
        Blog
      </h1>
      <ul className="space-y-8">
        {posts.map((post, i) => (
          <li
            key={post.slug}
            className="slide-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block p-5 rounded-xl border border-transparent hover:border-violet-100 dark:hover:border-violet-900 hover:bg-violet-50/40 dark:hover:bg-violet-950/20 transition-all duration-200"
            >
              <p className="text-xs text-violet-400 dark:text-violet-500 mb-1.5">{post.date}</p>
              <h2 className="font-medium text-lg mb-1 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

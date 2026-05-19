import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Writing — Elena Voss" };

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-10">
        Writing
      </h1>
      <ul className="space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="text-xs text-neutral-400 mb-1">{post.date}</p>
              <h2 className="font-medium text-lg group-hover:underline underline-offset-4 mb-1">
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

import { getAllPosts, getPostBySlug } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `/blog/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return (
      <main className="max-w-2xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 mb-10 block"
        >
          ← Blog
        </Link>
        <p className="text-xs text-neutral-400 mb-2">{post.date}</p>
        <h1 className="text-2xl font-semibold tracking-tight mb-10">{post.title}</h1>
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </main>
    );
  } catch {
    notFound();
  }
}

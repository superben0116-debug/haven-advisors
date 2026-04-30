import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { blogPosts } from "@/lib/site";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} | 栖美 Haven Advisors`,
    description: p.excerpt,
  };
}

// Minimal markdown-ish renderer for the MVP.
function renderBody(body: string) {
  const blocks = body.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("# ")) {
      return (
        <h1
          key={i}
          className="font-display text-4xl text-prussian-700 mt-12 first:mt-0 mb-6"
        >
          {trimmed.slice(2)}
        </h1>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="font-display text-2xl text-prussian-700 mt-10 mb-4"
        >
          {trimmed.slice(3)}
        </h2>
      );
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").map((l) => l.replace(/^-\s/, ""));
      return (
        <ul key={i} className="list-disc pl-5 space-y-2 my-4 text-ink-700">
          {items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    }
    return (
      <p
        key={i}
        className="my-4 text-base leading-relaxed text-ink-700 whitespace-pre-line"
      >
        {trimmed}
      </p>
    );
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <article>
        <section className="pt-10">
          <Container>
            <nav className="flex items-center gap-1 text-xs text-ink-500 tracking-wide">
              <Link href="/" className="transition hover:text-prussian-600">
                首页
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link
                href="/blog"
                className="transition hover:text-prussian-600"
              >
                赴美百科
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-prussian-600">{post.category}</span>
            </nav>
          </Container>
        </section>

        <section className="pt-10 pb-12">
          <Container>
            <FadeIn className="max-w-3xl">
              <div className="flex items-center gap-3 text-xs text-ink-500 tracking-wider">
                <Badge
                  variant={
                    post.category === "政策"
                      ? "forest"
                      : post.category === "案例"
                        ? "accent"
                        : "default"
                  }
                >
                  {post.category}
                </Badge>
                <span>{formatDate(post.publishedAt)}</span>
                <span className="h-1 w-1 rounded-full bg-ink-200" />
                <span>{post.readMinutes} 分钟阅读</span>
                <span className="h-1 w-1 rounded-full bg-ink-200" />
                <span>by {post.author}</span>
              </div>
              <h1 className="mt-4 font-display text-4xl text-prussian-700 leading-tight sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-500">
                {post.excerpt}
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="pb-12">
          <Container>
            <FadeIn>
              <div className="relative aspect-[16/8] overflow-hidden rounded-3xl">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="pb-24">
          <Container>
            <FadeIn className="mx-auto max-w-3xl">
              {renderBody(post.body)}
            </FadeIn>
          </Container>
        </section>
      </article>

      {related.length > 0 && (
        <section className="pb-24">
          <Container>
            <FadeIn className="mb-10 max-w-2xl">
              <Badge variant="default">继续阅读</Badge>
              <h2 className="mt-3 font-display text-3xl text-prussian-700">
                更多{post.category}文章
              </h2>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p, i) => (
                <FadeIn key={p.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block rounded-3xl border border-ink-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,54,93,0.15)]"
                  >
                    <div className="text-xs text-ink-500 tracking-wider">
                      {formatDate(p.publishedAt)}
                    </div>
                    <h3 className="mt-2 font-display text-xl text-prussian-700">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500 line-clamp-2">
                      {p.excerpt}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

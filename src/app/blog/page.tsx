"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { blogPosts, type BlogCategory } from "@/lib/site";
import { formatDate, cn } from "@/lib/utils";

const filters: Array<{ key: BlogCategory | "all"; label: string }> = [
  { key: "all", label: "全部" },
  { key: "攻略", label: "攻略" },
  { key: "案例", label: "案例" },
  { key: "政策", label: "政策" },
];

export default function BlogListPage() {
  const [filter, setFilter] = useState<BlogCategory | "all">("all");

  const posts = useMemo(() => {
    const sorted = [...blogPosts].sort((a, b) =>
      a.publishedAt < b.publishedAt ? 1 : -1
    );
    return filter === "all"
      ? sorted
      : sorted.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <Badge variant="default">Haven Journal</Badge>
            <h1 className="mt-4 font-display text-5xl text-prussian-700 sm:text-6xl">
              赴美百科
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              关于签证、生子、教育、医疗、保险与理财的长期更新。每一篇都来自栖美专家团队的真实案例与最新政策解读。
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="mb-10 flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  filter === f.key
                    ? "bg-prussian-500 text-cream-100 shadow-[0_6px_20px_rgba(27,54,93,0.25)]"
                    : "border border-ink-200 bg-white/60 text-ink-700 hover:border-prussian-300 hover:text-prussian-600"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-ink-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,54,93,0.15)] h-full flex flex-col"
                >
                  <div className="relative aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-3 text-xs text-ink-500 tracking-wider">
                      <Badge
                        variant={
                          p.category === "政策"
                            ? "forest"
                            : p.category === "案例"
                              ? "accent"
                              : "default"
                        }
                      >
                        {p.category}
                      </Badge>
                      <span>{formatDate(p.publishedAt)}</span>
                      <span className="h-1 w-1 rounded-full bg-ink-200" />
                      <span>{p.readMinutes} 分钟</span>
                    </div>
                    <h3 className="font-display text-xl text-prussian-700 transition-colors group-hover:text-champagne-600">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-500 line-clamp-3">
                      {p.excerpt}
                    </p>
                    <div className="mt-auto text-xs text-ink-500">
                      by {p.author}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="rounded-3xl border border-dashed border-ink-200 bg-cream-50 p-16 text-center text-ink-500">
              该分类下暂无文章。
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

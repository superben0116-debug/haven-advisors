import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { caseStudies, services } from "@/lib/site";

export const metadata = {
  title: "客户案例 | 栖美 Haven Advisors",
  description: "栖美服务过的真实家庭故事（脱敏呈现）。",
};

export default function CasesPage() {
  return (
    <>
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <Badge variant="accent">Case Studies</Badge>
            <h1 className="mt-4 font-display text-5xl text-prussian-700 sm:text-6xl">
              客户案例
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              以下案例均经当事家庭授权并脱敏呈现，使用化名。我们希望你从中看到的不是&quot;成功学&quot;，而是每个家庭真实面对的选择与权衡。
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((c, i) => (
              <FadeIn key={c.slug} delay={i * 0.08}>
                <Link
                  href={`/cases/${c.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-ink-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,54,93,0.15)] h-full flex flex-col"
                >
                  <div className="relative aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={c.cover}
                      alt={c.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-8">
                    <div className="flex items-center gap-2 text-xs text-ink-500 tracking-wider">
                      <span>{c.year}</span>
                    </div>
                    <h3 className="font-display text-2xl text-prussian-700 transition-colors group-hover:text-champagne-600">
                      {c.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-500">
                      {c.summary}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {c.tags.map((t) => {
                        const s = services.find((x) => x.slug === t);
                        if (!s) return null;
                        return (
                          <Badge key={t} variant="outline">
                            {s.name}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

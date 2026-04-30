import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { caseStudies, services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} | 栖美客户案例`,
    description: c.summary,
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <section className="pt-10">
        <Container>
          <nav className="flex items-center gap-1 text-xs text-ink-500 tracking-wide">
            <Link href="/" className="transition hover:text-prussian-600">
              首页
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/cases" className="transition hover:text-prussian-600">
              客户案例
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-prussian-600">{c.title}</span>
          </nav>
        </Container>
      </section>

      <section className="pt-10 pb-12">
        <Container>
          <FadeIn className="max-w-3xl">
            <Badge variant="accent">Case Study · {c.year}</Badge>
            <h1 className="mt-4 font-display text-4xl text-prussian-700 leading-tight sm:text-5xl">
              {c.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              {c.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
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
          </FadeIn>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <FadeIn>
            <div className="relative aspect-[16/8] overflow-hidden rounded-3xl">
              <Image
                src={c.cover}
                alt={c.title}
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
            <div className="rounded-3xl border border-dashed border-ink-200 bg-cream-50 p-8">
              <p className="text-sm text-ink-500">
                为保护当事家庭的隐私，本案例采用化名，详细情节经适度模糊处理。
              </p>
            </div>
            <p className="mt-8 text-base leading-relaxed text-ink-700 whitespace-pre-line">
              {c.body}
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-prussian-600 to-forest-500 px-10 py-14 text-cream-100 text-center">
              <h3 className="font-display text-2xl lg:text-3xl">
                你的家庭也正在面对类似的选择吗？
              </h3>
              <p className="mt-3 text-cream-200/80 max-w-xl mx-auto">
                预约一次付费咨询，我们可以把这些经验直接用在你的情况上。
              </p>
              <div className="mt-6">
                <Link
                  href="/consultation"
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  预约付费咨询
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

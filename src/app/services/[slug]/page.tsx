import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { caseStudies, services, type ServiceSlug } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === (slug as ServiceSlug));
  if (!s) return {};
  return {
    title: `${s.name} ${s.nameEn} | 栖美 Haven Advisors`,
    description: s.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((x) => x.slug === (slug as ServiceSlug));
  if (!service) notFound();

  const relatedCases = caseStudies.filter((c) => c.tags.includes(service.slug));

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-10 pb-0">
        <Container>
          <nav className="flex items-center gap-1 text-xs text-ink-500 tracking-wide">
            <Link href="/" className="transition hover:text-prussian-600">
              首页
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/services" className="transition hover:text-prussian-600">
              服务矩阵
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-prussian-600">{service.name}</span>
          </nav>
        </Container>
      </section>

      {/* Hero */}
      <section className="pt-10 pb-20 lg:pt-16 lg:pb-28">
        <Container>
          <FadeIn className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.3em] text-champagne-700">
              {service.nameEn}
            </div>
            <h1 className="mt-3 font-display text-5xl text-prussian-700 leading-tight sm:text-6xl">
              {service.name}
            </h1>
            <p className="mt-6 font-display text-2xl text-ink-700 italic">
              {service.tagline}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-500 max-w-3xl">
              {service.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/consultation"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                预约本板块咨询
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/experts"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                查看负责专家
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-cream-200/60">
        <Container>
          <FadeIn className="mb-10">
            <Badge variant="forest">服务亮点</Badge>
            <h2 className="mt-3 font-display text-3xl text-prussian-700 sm:text-4xl">
              我们具体做什么
            </h2>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {service.highlights.map((h, i) => (
              <FadeIn key={h} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-ink-200">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-forest-500" />
                  <p className="text-base leading-relaxed text-ink-700">{h}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeIn className="mb-14 max-w-3xl">
            <Badge variant="default">服务流程</Badge>
            <h2 className="mt-3 font-display text-3xl text-prussian-700 sm:text-4xl">
              从咨询到交付，每一步都清晰可预期
            </h2>
          </FadeIn>
          <ol className="relative space-y-6 border-l-2 border-champagne-200 pl-8">
            {service.process.map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.06}>
                <li className="relative">
                  <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-prussian-500 font-display text-sm text-champagne-300">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-xl text-prussian-700">
                    {p.step}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500 max-w-2xl">
                    {p.detail}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-prussian-50/50">
        <Container>
          <FadeIn className="mb-10 max-w-3xl">
            <Badge variant="accent">常见问题</Badge>
            <h2 className="mt-3 font-display text-3xl text-prussian-700 sm:text-4xl">
              客户最常问的问题
            </h2>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {service.faq.map((f, i) => (
              <FadeIn key={f.q} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-ink-200 p-6">
                  <h3 className="font-display text-lg text-prussian-700">
                    {f.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {f.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Related cases */}
      {relatedCases.length > 0 && (
        <section className="py-24">
          <Container>
            <FadeIn className="mb-10 max-w-3xl">
              <Badge variant="forest">相关案例</Badge>
              <h2 className="mt-3 font-display text-3xl text-prussian-700 sm:text-4xl">
                我们服务过的家庭
              </h2>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedCases.map((c, i) => (
                <FadeIn key={c.slug} delay={i * 0.08}>
                  <Link
                    href={`/cases/${c.slug}`}
                    className="block rounded-3xl border border-ink-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,54,93,0.15)]"
                  >
                    <div className="text-xs uppercase tracking-[0.2em] text-ink-500">
                      {c.year}
                    </div>
                    <h3 className="mt-3 font-display text-xl text-prussian-700">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500 line-clamp-3">
                      {c.summary}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-prussian-600 to-forest-500 px-10 py-16 text-cream-100 text-center">
              <h3 className="font-display text-3xl lg:text-4xl">
                准备好开启关于「{service.name}」的对话了吗？
              </h3>
              <p className="mt-4 text-cream-200/80 max-w-xl mx-auto">
                付费咨询是我们建立信任的第一步。
              </p>
              <div className="mt-8">
                <Link
                  href="/consultation"
                  className={buttonVariants({
                    variant: "secondary",
                    size: "lg",
                  })}
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

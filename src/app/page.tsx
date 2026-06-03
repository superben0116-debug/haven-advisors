import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Landmark,
  Quote,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { Counter } from "@/components/motion/counter";
import { HeroStagger, HeroItem } from "@/components/motion/hero-text";
import {
  blogPosts,
  caseStudies,
  experts,
  homeContent,
  services,
  siteConfig,
  stats,
  type ServiceSlug,
} from "@/lib/site";
import { formatDate } from "@/lib/utils";

const serviceIcons: Record<ServiceSlug, React.ComponentType<{ className?: string }>> = {
  birth: Baby,
  career: Briefcase,
  education: GraduationCap,
  healthcare: HeartPulse,
  wealth: Landmark,
};

export default function HomePage() {
  const latestPosts = [...blogPosts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 3);
  const heroTitle = homeContent.title || "在美国的每一个人生节点，都值得一位可靠的同行者。";
  const heroHighlight = homeContent.highlight || "人生节点";

  return (
    <>
      {/* ------- Hero ------- */}
      <section className="relative overflow-hidden text-cream-100">
        <div className="absolute inset-0 -z-10">
          <Image
            src={homeContent.heroImage || "/images/hero-bg.svg"}
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-prussian-900/30 via-transparent to-cream-100" />
        </div>

        <Container className="relative flex min-h-[88vh] flex-col justify-center py-28 lg:py-40">
          <HeroStagger>
            <HeroItem>
              <Badge
                variant="accent"
                className="w-fit backdrop-blur-sm bg-champagne-100/25 border-champagne-300/40 text-champagne-200"
              >
                <Sparkles className="h-3 w-3" />
                {homeContent.eyebrow || `自 ${siteConfig.foundedYear} 年以来服务 380+ 中国家庭`}
              </Badge>
            </HeroItem>

            <HeroItem>
              <h1 className="font-display text-[44px] leading-[1.1] sm:text-6xl lg:text-7xl max-w-4xl">
                {heroTitle.includes(heroHighlight) ? (
                  <>
                    {heroTitle.split(heroHighlight)[0]}
                    <span className="text-champagne-400">{heroHighlight}</span>
                    {heroTitle.split(heroHighlight).slice(1).join(heroHighlight)}
                  </>
                ) : (
                  heroTitle
                )}
              </h1>
            </HeroItem>

            <HeroItem>
              <p className="max-w-2xl text-lg leading-relaxed text-cream-200/85 sm:text-xl">
                {homeContent.description}
              </p>
            </HeroItem>

            <HeroItem className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={homeContent.primaryCta?.href || "/consultation"}
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                {homeContent.primaryCta?.label || "预约付费咨询"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={homeContent.secondaryCta?.href || "/services"}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "border-cream-200/50 text-cream-100 hover:bg-cream-100/10 hover:text-cream-100",
                })}
              >
                {homeContent.secondaryCta?.label || "了解服务矩阵"}
              </Link>
            </HeroItem>
          </HeroStagger>
        </Container>
      </section>

      {/* ------- Stats ------- */}
      <section className="relative -mt-20 pb-4">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-prussian-100 bg-prussian-100 shadow-[0_20px_60px_rgba(27,54,93,0.18)] md:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-2 bg-cream-50 px-6 py-10"
                >
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display text-5xl text-prussian-600 tracking-tight"
                  />
                  <div className="text-sm text-ink-500 tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {homeContent.carousel?.length ? (
        <section className="py-16 lg:py-20">
          <Container>
            <div className="grid gap-6 md:grid-cols-3">
              {homeContent.carousel.map((slide, i) => (
                <FadeIn key={slide.title} delay={i * 0.08}>
                  <Link
                    href={slide.href || "/services"}
                    className="group block h-full overflow-hidden rounded-3xl border border-ink-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,54,93,0.15)]"
                  >
                    <div className="relative aspect-[5/3] w-full overflow-hidden">
                      <Image
                        src={slide.image || "/images/hero-bg.svg"}
                        alt={slide.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="font-display text-2xl text-prussian-700">
                        {slide.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-ink-500">
                        {slide.description}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* ------- Service matrix ------- */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeIn className="mb-14 max-w-3xl">
            <Badge variant="default">Service Matrix · 服务矩阵</Badge>
            <h2 className="mt-4 font-display text-4xl text-prussian-700 sm:text-5xl">
              五大板块，覆盖一个家庭在美国的核心决策
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              我们不做大而全的承诺，只深耕五个最影响中国家庭的领域。每一位顾问都是所在领域的全职专家。
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.slug];
              return (
                <FadeIn key={s.slug} delay={i * 0.08}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative block h-full overflow-hidden rounded-3xl border border-ink-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-champagne-300 hover:shadow-[0_20px_50px_rgba(27,54,93,0.15)]"
                  >
                    <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-champagne-100/50 blur-3xl transition-opacity duration-500 group-hover:bg-champagne-200/60" />
                    <div className="relative flex h-full flex-col gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prussian-500 text-champagne-300 transition-colors group-hover:bg-prussian-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.25em] text-ink-500">
                          {s.nameEn}
                        </div>
                        <h3 className="mt-1 font-display text-2xl text-prussian-700">
                          {s.name}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-ink-500">
                        {s.tagline}
                      </p>
                      <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-prussian-600 transition-colors group-hover:text-champagne-600">
                        了解详情
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ------- Experts ------- */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-100 via-cream-200/80 to-cream-100" />
        <Container>
          <FadeIn className="mb-14 max-w-3xl">
            <Badge variant="forest">Our People · 专家团队</Badge>
            <h2 className="mt-4 font-display text-4xl text-prussian-700 sm:text-5xl">
              每一个决策背后，都站着一位真实的专家
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              我们的专家持有美国注册保险员执照、IECA 协会资质、以及哥伦比亚、哈佛、约翰霍普金斯等院校的专业背景，长期旅美生活。
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {experts.map((e, i) => (
              <FadeIn key={e.id} delay={i * 0.1}>
                <Card className="overflow-hidden bg-white/90">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={e.photo}
                      alt={e.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{e.name}</CardTitle>
                    <CardDescription className="text-prussian-600">
                      {e.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-wrap gap-2 mb-4">
                      {e.credentials.slice(0, 2).map((c) => (
                        <li key={c}>
                          <Badge variant="outline">{c.split(" ")[0]}</Badge>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm leading-relaxed text-ink-500 line-clamp-3">
                      {e.bio}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-10 text-center">
            <Link
              href="/experts"
              className={buttonVariants({ variant: "outline", size: "md" })}
            >
              查看完整专家档案
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* ------- Cases ------- */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeIn className="mb-14 max-w-3xl">
            <Badge variant="accent">Case Studies · 客户案例</Badge>
            <h2 className="mt-4 font-display text-4xl text-prussian-700 sm:text-5xl">
              每一个家庭的故事，都是一段独一无二的旅程
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              以下案例均经当事家庭授权并脱敏呈现，为保护隐私使用化名。
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((c, i) => (
              <FadeIn key={c.slug} delay={i * 0.08}>
                <Link
                  href={`/cases/${c.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-ink-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,54,93,0.15)]"
                >
                  <div className="relative aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={c.cover}
                      alt={c.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <div className="flex items-center gap-2 text-xs text-ink-500 tracking-wider">
                      <span>{c.year}</span>
                      <span className="h-1 w-1 rounded-full bg-ink-200" />
                      <span>
                        {c.tags
                          .map((t) => services.find((s) => s.slug === t)?.name)
                          .join(" · ")}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-prussian-700 transition-colors group-hover:text-champagne-600">
                      {c.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-500 line-clamp-3">
                      {c.summary}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ------- Blog teasers ------- */}
      <section className="py-24 lg:py-32 bg-prussian-700 text-cream-100">
        <Container>
          <FadeIn className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Badge
                variant="accent"
                className="bg-champagne-200/20 border-champagne-300/40 text-champagne-200"
              >
                Haven Journal · 赴美百科
              </Badge>
              <h2 className="mt-4 font-display text-4xl text-cream-100 sm:text-5xl">
                从签证到保险，持续更新的深度参考
              </h2>
            </div>
            <Link
              href="/blog"
              className={buttonVariants({
                variant: "outline",
                size: "md",
                className:
                  "border-cream-200/40 text-cream-100 hover:bg-cream-100/10 hover:text-cream-100 self-start md:self-auto",
              })}
            >
              全部文章
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {latestPosts.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-cream-100/10 bg-prussian-600/40 transition-all duration-500 hover:-translate-y-1 hover:border-champagne-300/40 hover:bg-prussian-600/60"
                >
                  <div className="relative aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <div className="flex items-center gap-3 text-xs text-cream-200/70 tracking-wider">
                      <span>{p.category}</span>
                      <span className="h-1 w-1 rounded-full bg-cream-200/40" />
                      <span>{formatDate(p.publishedAt)}</span>
                      <span className="h-1 w-1 rounded-full bg-cream-200/40" />
                      <span>{p.readMinutes} 分钟阅读</span>
                    </div>
                    <h3 className="font-display text-xl text-cream-100 transition-colors group-hover:text-champagne-300">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-cream-200/80 line-clamp-2">
                      {p.excerpt}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ------- Final CTA ------- */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-prussian-600 via-prussian-500 to-forest-500 px-8 py-16 text-cream-100 lg:px-20 lg:py-24">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-champagne-400/15 blur-3xl" />
              <div className="relative grid gap-10 md:grid-cols-3 md:items-center">
                <div className="md:col-span-2 flex flex-col gap-6">
                  <Quote className="h-10 w-10 text-champagne-400" />
                  <p className="font-display text-3xl leading-snug text-cream-100 lg:text-4xl">
                    如果你正在为家庭的下一个赴美决策而犹豫，<br className="hidden lg:block" />
                    不妨让我们先好好聊一次。
                  </p>
                  <p className="text-cream-200/80 max-w-xl">
                    {siteConfig.tagline}——这是我们给每一位客户的承诺。
                  </p>
                </div>
                <div className="md:col-span-1 flex flex-col items-start gap-4 md:items-end">
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
                  <Link
                    href="/about"
                    className="text-sm text-cream-200/70 transition hover:text-champagne-300"
                  >
                    先了解栖美 →
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

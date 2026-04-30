import Link from "next/link";
import { ArrowRight, Baby, Briefcase, GraduationCap, HeartPulse, Landmark } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { services, type ServiceSlug } from "@/lib/site";

export const metadata = {
  title: "服务矩阵 | 栖美 Haven Advisors",
  description: "赴美生子 · 海外职业发展 · 名校教育规划 · 高端医疗预约 · 美国保险与理财",
};

const icons: Record<ServiceSlug, React.ComponentType<{ className?: string }>> = {
  birth: Baby,
  career: Briefcase,
  education: GraduationCap,
  healthcare: HeartPulse,
  wealth: Landmark,
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <Badge variant="default">Service Matrix</Badge>
            <h1 className="mt-4 font-display text-5xl text-prussian-700 sm:text-6xl">
              五大服务板块
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              每一个板块都由对应领域的全职专家负责。我们相信，把专业的事交给专业的人，才能为家庭提供真正可靠的长期陪伴。
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <div className="flex flex-col gap-6">
            {services.map((s, i) => {
              const Icon = icons[s.slug];
              return (
                <FadeIn key={s.slug} delay={i * 0.08}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative grid gap-8 overflow-hidden rounded-3xl border border-ink-200 bg-white p-10 transition-all duration-500 hover:-translate-y-0.5 hover:border-champagne-300 hover:shadow-[0_20px_50px_rgba(27,54,93,0.15)] md:grid-cols-12"
                  >
                    <div className="md:col-span-4 flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-prussian-500 text-champagne-300 transition-colors group-hover:bg-prussian-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.25em] text-ink-500">
                          {s.nameEn}
                        </div>
                        <h2 className="mt-1 font-display text-3xl text-prussian-700">
                          {s.name}
                        </h2>
                      </div>
                    </div>
                    <div className="md:col-span-7 md:col-start-6">
                      <p className="text-base leading-relaxed text-ink-700">
                        {s.description}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {s.highlights.slice(0, 4).map((h) => (
                          <li key={h}>
                            <Badge variant="outline">{h}</Badge>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-prussian-600 transition-colors group-hover:text-champagne-600">
                        进入板块详情
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
    </>
  );
}

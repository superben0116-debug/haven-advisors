import Image from "next/image";
import Link from "next/link";
import { Award, BadgeCheck, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { experts, services } from "@/lib/site";

export const metadata = {
  title: "专家团队 | 栖美 Haven Advisors",
  description: "栖美专家团队的真实档案，包含执照、学历、从业经历与擅长领域。",
};

export default function ExpertsPage() {
  return (
    <>
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <Badge variant="default">Our People</Badge>
            <h1 className="mt-4 font-display text-5xl text-prussian-700 sm:text-6xl">
              专家团队
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              栖美每一位顾问都是所在领域的全职专家。我们用真实的身份、真实的履历、真实的执照，和每一个家庭建立信任。
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="flex flex-col gap-16">
            {experts.map((e, idx) => (
              <FadeIn key={e.id} delay={idx * 0.06}>
                <div
                  className="grid gap-10 rounded-3xl border border-ink-200 bg-white p-8 lg:grid-cols-12 lg:p-12"
                  id={e.id}
                >
                  <div className="lg:col-span-4">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={e.photo}
                        alt={e.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-8 flex flex-col gap-6">
                    <div>
                      <h2 className="font-display text-3xl text-prussian-700">
                        {e.name}
                      </h2>
                      <p className="mt-1 text-prussian-600 font-medium">
                        {e.title}
                      </p>
                    </div>

                    <p className="text-base leading-relaxed text-ink-700 max-w-2xl">
                      {e.bio}
                    </p>

                    <div>
                      <h3 className="inline-flex items-center gap-2 text-sm font-semibold text-prussian-700">
                        <Award className="h-4 w-4 text-champagne-600" />
                        执照 · 学历 · 资质
                      </h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {e.credentials.map((c) => (
                          <li key={c}>
                            <Badge variant="forest">
                              <BadgeCheck className="h-3 w-3" />
                              {c}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="inline-flex items-center gap-2 text-sm font-semibold text-prussian-700">
                        <CalendarClock className="h-4 w-4 text-champagne-600" />
                        从业经历
                      </h3>
                      <ol className="mt-4 relative space-y-4 border-l-2 border-champagne-200 pl-6">
                        {e.timeline.map((t) => (
                          <li key={t.year}>
                            <span className="absolute -left-[9px] h-4 w-4 rounded-full bg-champagne-500 border-4 border-cream-50" />
                            <div className="font-display text-lg text-prussian-700">
                              {t.year}
                            </div>
                            <p className="text-sm text-ink-500 leading-relaxed">
                              {t.event}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-prussian-700">
                        擅长领域
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {e.specialties.map((slug) => {
                          const s = services.find((x) => x.slug === slug);
                          if (!s) return null;
                          return (
                            <Link
                              key={slug}
                              href={`/services/${slug}`}
                              className="transition"
                            >
                              <Badge variant="accent">{s.name}</Badge>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

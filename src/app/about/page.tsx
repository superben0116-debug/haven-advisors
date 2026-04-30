import Link from "next/link";
import { ArrowRight, Compass, Heart, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig, stats } from "@/lib/site";
import { Counter } from "@/components/motion/counter";

export const metadata = {
  title: "关于栖美 | Haven Advisors",
  description:
    "栖美 Haven Advisors 的品牌故事、核心理念与长期愿景。",
};

const values = [
  {
    icon: ShieldCheck,
    title: "合法合规",
    detail:
      "诚实签证、合法月子中心、持牌保险专家——我们只做能长期存在的业务。",
  },
  {
    icon: Heart,
    title: "温馨人文",
    detail:
      "每一个家庭都不是一张工单。我们走进你的人生节点，陪你一起做决定。",
  },
  {
    icon: Compass,
    title: "长期主义",
    detail:
      "教育、保险、资产配置都是十年以上的事。我们用十年的视角来评估每一个建议。",
  },
  {
    icon: Users,
    title: "专业分工",
    detail: "每一个板块都有全职专家。你面对的不是万事通，而是你领域的专业人。",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <Badge variant="default">About · 关于栖美</Badge>
            <h1 className="mt-4 font-display text-5xl text-prussian-700 sm:text-6xl">
              栖息之地，<br />
              美好落定
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              {siteConfig.nameEn}（栖美），自 {siteConfig.foundedYear} 年起扎根于美国东西海岸，为中国高净值家庭提供关于赴美人生的综合顾问服务。
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="pb-16">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-prussian-100 bg-prussian-100 md:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-2 bg-cream-50 px-6 py-8"
                >
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display text-4xl text-prussian-600"
                  />
                  <div className="text-xs text-ink-500 tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <Badge variant="forest">我们的故事</Badge>
              <h2 className="mt-3 font-display text-4xl text-prussian-700">
                一个顾问品牌的十四年
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-7 space-y-5 text-ink-700 leading-relaxed">
              <p>
                栖美的前身成立于 2014 年的纽约。创始人林清和当时还是一位刚刚走出哥伦比亚大学校园的毕业生，偶然为一位想赴美生子的朋友协调了整个流程。那一次经历让她意识到：在美国的每一个人生节点，都缺少一位真正懂中文家庭的专业同行者。
              </p>
              <p>
                十四年来，栖美从一位顾问扩展到今天的 12 人团队，业务从单一的赴美生子扩展到涵盖教育、职业、医疗、保险与理财的综合服务矩阵。
              </p>
              <p>
                2024 年，品牌正式升级为「栖美 Haven Advisors」。我们希望这个名字能传达一种感觉：美国对你来说不只是一个目的地，而是一个可以栖息、可以落定、可以托付下一代的地方。
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream-200/70">
        <Container>
          <FadeIn className="mb-12 max-w-3xl">
            <Badge variant="default">核心理念</Badge>
            <h2 className="mt-3 font-display text-4xl text-prussian-700 sm:text-5xl">
              四件事，从创立那天起没变过
            </h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={v.title} delay={i * 0.06}>
                  <div className="rounded-3xl border border-ink-200 bg-white p-8 h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prussian-500 text-champagne-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-prussian-700">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                      {v.detail}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-prussian-600 to-forest-500 px-10 py-16 text-cream-100 text-center">
              <h3 className="font-display text-3xl lg:text-4xl">
                欢迎来到栖美
              </h3>
              <p className="mt-4 text-cream-200/80 max-w-xl mx-auto">
                {siteConfig.tagline}。我们在等你的故事。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/consultation"
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  预约付费咨询
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/experts"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className:
                      "border-cream-200/40 text-cream-100 hover:bg-cream-100/10 hover:text-cream-100",
                  })}
                >
                  先看看团队
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

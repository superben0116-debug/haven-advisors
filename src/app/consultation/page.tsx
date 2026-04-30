import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { ConsultationForm } from "@/components/consultation-form";
import { CheckCircle2, ShieldCheck, Timer, MessageSquare } from "lucide-react";

export const metadata = {
  title: "预约付费咨询 | 栖美 Haven Advisors",
  description:
    "通过付费咨询，我们开始为你的家庭设计专属方案。提交表单后栖美顾问将在 24 小时内联系你。",
};

export default function ConsultationPage() {
  return (
    <>
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <Badge variant="default">Paid Consultation</Badge>
            <h1 className="mt-4 font-display text-5xl text-prussian-700 sm:text-6xl">
              预约付费咨询
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              官网的所有内容都是免费阅读。当你决定让我们为你的家庭设计专属方案时，付费咨询就是我们建立深度合作的第一步。
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left: payment + why */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <FadeIn>
                <div className="rounded-3xl border border-ink-200 bg-white p-8">
                  <div className="text-xs uppercase tracking-[0.25em] text-ink-500">
                    Step 1
                  </div>
                  <h2 className="mt-2 font-display text-2xl text-prussian-700">
                    扫码完成付款
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    首次咨询费用 <span className="font-display text-xl text-prussian-700">¥ 680</span>（60 分钟 · 微信或 Zoom）。若后续签约正式服务，此费用可 100% 抵扣。
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-ink-200 bg-cream-100 p-4">
                      <Image
                        src="/images/qr-placeholder.svg"
                        alt="付款二维码占位图"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-center text-xs text-ink-500">
                    微信 / 支付宝扫码 · 备注「付费咨询 + 姓名」
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="rounded-3xl border border-ink-200 bg-cream-50 p-8">
                  <h3 className="font-display text-lg text-prussian-700">
                    我们承诺
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-ink-700">
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 shrink-0 text-forest-500" />
                      专家一对一深度咨询，不转交助理
                    </li>
                    <li className="flex items-start gap-3">
                      <Timer className="h-5 w-5 shrink-0 text-forest-500" />
                      提交信息后 24 小时内专属顾问主动联系
                    </li>
                    <li className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 shrink-0 text-forest-500" />
                      咨询前会发问卷，让 60 分钟对谈效率最大化
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-forest-500" />
                      签约正式服务后，咨询费 100% 抵扣
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="rounded-3xl border border-ink-200 bg-white p-8 sm:p-10">
                  <div className="text-xs uppercase tracking-[0.25em] text-ink-500">
                    Step 2
                  </div>
                  <h2 className="mt-2 font-display text-2xl text-prussian-700">
                    留下你的联系方式
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    填完后栖美顾问会在 24 小时内通过你选择的方式与你约定正式咨询时间。
                  </p>
                  <div className="mt-8">
                    <ConsultationForm />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

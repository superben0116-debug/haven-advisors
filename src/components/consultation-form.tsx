"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "请填写姓名（至少 2 个字）"),
  contact: z
    .string()
    .min(5, "请填写手机、微信或邮箱中的一种"),
  preferredChannel: z.enum(["wechat", "phone", "email"]),
  topic: z.string().min(1, "请选择咨询主题"),
  note: z.string().max(1000).optional(),
  paid: z.boolean().refine((v) => v === true, "请确认已完成付款"),
});

type FormValues = z.infer<typeof schema>;

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      preferredChannel: "wechat",
      paid: false,
    },
  });

  async function onSubmit(values: FormValues) {
    setServerError(null);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "提交失败，请稍后重试");
      }
      reset();
      setSubmitted(true);
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "提交失败");
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-forest-100 bg-forest-50/60 p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-500 text-cream-100">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="font-display text-2xl text-prussian-700">
          收到你的信息了
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-ink-500">
          栖美顾问会在 24 小时内通过你选择的方式联系你。我们也会把咨询前的准备问卷发给你。
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm text-prussian-600 underline-offset-4 hover:underline"
        >
          再提交一次
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">姓名 *</Label>
          <Input id="name" placeholder="请填写称呼" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="contact">联系方式 *</Label>
          <Input
            id="contact"
            placeholder="手机 / 微信号 / 邮箱"
            {...register("contact")}
          />
          {errors.contact && (
            <p className="text-xs text-red-600">{errors.contact.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label>偏好联系渠道 *</Label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: "wechat", label: "微信" },
            { value: "phone", label: "电话" },
            { value: "email", label: "邮箱" },
          ].map((c) => (
            <label
              key={c.value}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm transition has-[:checked]:border-prussian-500 has-[:checked]:bg-prussian-50 has-[:checked]:text-prussian-700"
            >
              <input
                type="radio"
                className="sr-only"
                value={c.value}
                {...register("preferredChannel")}
              />
              {c.label}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="topic">咨询主题 *</Label>
        <select
          id="topic"
          {...register("topic")}
          className="h-11 w-full rounded-xl border border-ink-200 bg-white/90 px-4 text-sm text-ink-900 transition focus:outline-none focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400"
          defaultValue=""
        >
          <option value="" disabled>
            请选择你最关心的领域
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}（{s.nameEn}）
            </option>
          ))}
          <option value="综合">综合 / 不确定</option>
        </select>
        {errors.topic && (
          <p className="text-xs text-red-600">{errors.topic.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="note">想提前让顾问了解的背景（可选）</Label>
        <Textarea
          id="note"
          placeholder="例如：家庭状况、孩子年龄、目前在美国 / 国内哪里、最关心的时间节点……"
          {...register("note")}
        />
      </div>

      <label className="flex items-start gap-3 rounded-xl border border-ink-200 bg-cream-50 p-4">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4"
          {...register("paid")}
        />
        <span className="text-sm text-ink-700 leading-relaxed">
          我已完成 ¥ 680 付款（微信 / 支付宝），并已在备注中填写「付费咨询 + 姓名」。
        </span>
      </label>
      {errors.paid && (
        <p className="text-xs text-red-600">{errors.paid.message}</p>
      )}

      {serverError && (
        <p className="text-sm text-red-600">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          buttonVariants({ variant: "primary", size: "lg" }),
          "w-full"
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            提交中…
          </>
        ) : (
          "提交咨询请求"
        )}
      </button>

      <p className="text-xs text-ink-500 text-center">
        我们严格保护您的个人信息，仅用于本次咨询内部对接。
      </p>
    </form>
  );
}

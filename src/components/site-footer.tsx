import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, services } from "@/lib/site";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-prussian-800/40 bg-prussian-700 text-cream-200">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4 flex flex-col gap-5">
          <BrandLogo variant="light" size="md" />
          <p className="text-sm leading-relaxed text-cream-200/80 max-w-sm">
            {siteConfig.description}
          </p>
          <div className="flex flex-col gap-2 text-sm text-cream-200/75">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-champagne-400" />
              {siteConfig.contactEmail}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-champagne-400" />
              {siteConfig.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-champagne-400" />
              {siteConfig.address}
            </span>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-champagne-300">
            服务
          </h4>
          <ul className="space-y-3 text-sm text-cream-200/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="transition-colors hover:text-champagne-200"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-champagne-300">
            了解栖美
          </h4>
          <ul className="space-y-3 text-sm text-cream-200/80">
            <li>
              <Link href="/about" className="transition-colors hover:text-champagne-200">
                关于我们
              </Link>
            </li>
            <li>
              <Link href="/experts" className="transition-colors hover:text-champagne-200">
                专家团队
              </Link>
            </li>
            <li>
              <Link href="/cases" className="transition-colors hover:text-champagne-200">
                客户案例
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-champagne-200">
                赴美百科
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-champagne-300">
            咨询与合作
          </h4>
          <ul className="space-y-3 text-sm text-cream-200/80">
            <li>
              <Link
                href="/consultation"
                className="transition-colors hover:text-champagne-200"
              >
                预约付费咨询
              </Link>
            </li>
            <li>微信：{siteConfig.wechatId}</li>
            <li className="pt-4 text-xs text-cream-200/60 leading-relaxed">
              栖美秉持合法合规与诚实签证原则，所有服务均以真实需求为起点。
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-prussian-600/60">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="text-xs text-cream-200/60">
            © {year} {siteConfig.nameEn}. All rights reserved · 栖美 —
            {siteConfig.tagline}
          </p>
          <p className="text-xs text-cream-200/50">
            {siteConfig.foundedYear} · Los Angeles · New York · Boston
          </p>
        </div>
      </div>
    </footer>
  );
}

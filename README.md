# 栖美 Haven Advisors — Website

专业稳重 + 温馨人文的赴美综合服务顾问品牌官网。

## 技术栈

- **Next.js 16 (App Router) + React 19 + TypeScript**
- **Tailwind CSS v4**（`@theme` 直接在 `globals.css` 声明品牌令牌）
- **Motion (framer-motion 继任者)**：fade-in、Hero stagger、数字 count-up 动画
- **react-hook-form + zod**：咨询表单 + 前后端同一个 schema
- **Next.js API Routes**：`/api/consultation` 表单提交 → 本地 `.data/consultations.jsonl` 落盘

## 快速开始

```bash
cd haven-advisors
pnpm install           # 首次安装依赖
pnpm dev               # http://localhost:3000
pnpm build && pnpm start  # 生产模式
```

## 品牌令牌

位于 `src/app/globals.css` 的 `@theme` 块中，直接作为 Tailwind 工具类使用：

| 令牌 | 色值 | 用途 |
| --- | --- | --- |
| `prussian-500` | `#1B365D` | 主色 · 普鲁士蓝（按钮、标题、深色底） |
| `forest-500` | `#2D4A3E` | 辅助主色 · 森林绿（渐变、Badge） |
| `champagne-500` | `#C9A961` | 点缀金 · 高亮、图标、装饰 |
| `cream-100` / `cream-200` | `#FBF6EA` / `#F5EFE6` | 页面底色（暖米） |
| `ink-*` | 灰阶 | 正文、边框、次要字 |

字体：标题 `font-display` 使用 **Playfair Display**，正文默认 **Inter + PingFang SC**。

## 目录结构

```
src/
├── app/                           # App Router 页面
│   ├── page.tsx                   # 首页（Hero / 服务矩阵 / 数字 / 专家 / 案例 / 博客 / CTA）
│   ├── services/
│   │   ├── page.tsx               # 五大服务矩阵概览
│   │   └── [slug]/page.tsx        # 服务详情（介绍/亮点/流程/FAQ/相关案例）
│   ├── experts/page.tsx           # 专家档案（执照、学历、时间线、擅长）
│   ├── cases/
│   │   ├── page.tsx               # 客户案例列表
│   │   └── [slug]/page.tsx        # 案例详情（脱敏叙述）
│   ├── blog/
│   │   ├── page.tsx               # 赴美百科（按 攻略/案例/政策 筛选）
│   │   └── [slug]/page.tsx        # 博客详情（Markdown-lite 渲染）
│   ├── consultation/page.tsx      # 预约付费咨询（收款码 + 表单）
│   ├── about/page.tsx             # 关于栖美
│   ├── api/consultation/route.ts  # 表单接收 API
│   └── globals.css                # Tailwind v4 主题令牌
├── components/
│   ├── ui/                        # Button, Card, Input, Textarea, Label, Badge, Container
│   ├── motion/                    # FadeIn, Counter, HeroStagger
│   ├── brand-logo.tsx             # Haven·Advisors 文字 Logo（Playfair）
│   ├── site-header.tsx            # 顶部导航（含移动端抽屉）
│   ├── site-footer.tsx            # 页脚
│   └── consultation-form.tsx      # 咨询表单（RHF + Zod）
├── lib/
│   ├── site.ts                    # ★ 所有文案和结构化数据在这里（MVP 阶段）
│   └── utils.ts                   # cn()、formatDate()
```

## 内容管理

**MVP 阶段所有内容都在 `src/lib/site.ts` 里**——5 个服务、3 个专家、4 篇博客、3 个案例、品牌配置、导航、统计数字。直接编辑这个文件即可修改文案。

后续要接 Payload CMS：

1. `pnpm add payload @payloadcms/next @payloadcms/db-mongodb @payloadcms/richtext-lexical`
2. 新建 `payload.config.ts` 和 `collections/`（Services / Experts / BlogPosts / CaseStudies / Consultations）
3. 把 `src/lib/site.ts` 里的常量替换成 `payload.find({ collection: 'services' })` 等调用
4. 路由 `src/app/(payload)/admin/[...segments]/page.tsx` 挂 Payload 后台

## 咨询表单

- 前端：`src/components/consultation-form.tsx`（React Hook Form + Zod）
- 后端：`src/app/api/consultation/route.ts`
- 落盘：开发期数据写入 `.data/consultations.jsonl`（已 gitignore）。生产请改为 Payload Collection 或 DB。
- 通知：**TODO** — 目前没有邮件/微信通知。接入 Resend 或企业微信 Webhook：在 `route.ts` 的 `// TODO` 注释处加几行即可。

## 待办（以后处理）

- [ ] 替换 `public/images/qr-placeholder.svg` 为真实微信/支付宝收款码
- [ ] 替换 3 位专家的头像 SVG 为真实照片（保留 `4:5` 宽高比）
- [ ] 替换 4 张博客封面、3 张案例封面为真实视觉素材
- [ ] 接 Payload CMS（参见上文「内容管理」）
- [ ] 表单提交后发邮件 / 企业微信通知
- [ ] 替换 Logo 文字版本为设计稿矢量
- [ ] 补充真实的 OG 图（`/public/og.png`）
- [ ] 站点部署 —— 推荐 Vercel；Payload 若自托管推荐 Railway / Render + MongoDB Atlas

## 品牌规范速查

- 调性：**温暖略重于专业**。页面留白充足，动画舒缓（durations ≥ 0.7s，ease `[0.22, 1, 0.36, 1]`）
- 不用 emoji，不用炫技型渐变
- CTA 按钮只有两种：`variant="primary"`（普鲁士蓝）用于主动作；`variant="secondary"`（香槟金）用于全页最重要的 CTA
- 所有插画都用 SVG 占位 + Playfair 排版，保留升级到真实素材的替换点

## 构建状态

最近一次 `pnpm build`：23 个页面全部成功生成
（1 静态首页 + 5 服务页 + 4 博客页 + 3 案例页 + experts + cases 列表 + blog 列表 + services 列表 + consultation + about + /api/consultation 动态路由）。

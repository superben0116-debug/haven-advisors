// Central content source for the MVP (will move to Payload CMS later).
// Keeping it all in one file so Ben can eyeball structure and edit copy fast.

export const siteConfig = {
  name: "栖美",
  nameEn: "Haven Advisors",
  tagline: "温馨人文 · 专业稳重",
  description:
    "为中国高净值家庭提供赴美生子、海外职业发展、名校教育规划、高端医疗预约、美国保险与理财的一站式顾问服务。",
  contactEmail: "concierge@havenadvisors.us",
  wechatId: "HavenAdvisorsUS",
  phone: "+1 (626) 000-0000",
  address: "Los Angeles · New York · Boston",
  foundedYear: 2011,
  socials: {
    xiaohongshu: "#",
    wechat: "#",
    linkedin: "#",
  },
};

export type ServiceSlug =
  | "birth"
  | "career"
  | "education"
  | "healthcare"
  | "wealth";

export const services: Array<{
  slug: ServiceSlug;
  name: string;
  nameEn: string;
  tagline: string;
  description: string;
  highlights: string[];
  process: { step: string; detail: string }[];
  faq: { q: string; a: string }[];
}> = [
  {
    slug: "birth",
    name: "赴美生子",
    nameEn: "Birth in USA",
    tagline: "从备孕到返程，一家人的安稳落地",
    description:
      "为准爸妈提供合法合规的赴美生子全流程服务，从签证策略、月子中心甄选、在美医疗对接到宝宝证件办理、回国衔接，一站式陪伴每一个家庭。",
    highlights: [
      "合法合规 DS-160 诚实签证策略",
      "加州 / 纽约 白名单月子中心对接",
      "全美妇产专科医生预约",
      "宝宝五大证件办理全程协助",
      "家政 · 餐饮 · 翻译 · 接送一站式",
    ],
    process: [
      { step: "前期咨询", detail: "评估家庭情况，设计时间线和预算方案。" },
      { step: "签证准备", detail: "辅导面签、材料审核，确保诚实签顺利通过。" },
      { step: "抵美安置", detail: "接机、入住月子中心、建档医院。" },
      { step: "产检分娩", detail: "对接专科医生，陪同产检与分娩流程。" },
      { step: "月子照护", detail: "中式月子餐 + 专业月嫂，为新妈妈调理身体。" },
      { step: "证件办理", detail: "出生纸、SSN、中国旅行证、护照、认证全包。" },
      { step: "回国衔接", detail: "返程机票、海关引导、国内上户协助。" },
    ],
    faq: [
      {
        q: "诚实签证真的能过吗？",
        a: "可以。我们坚持诚实签证原则，提供完备的经济材料、医疗资金证明和回国约束，近年通过率保持 95% 以上。",
      },
      {
        q: "选加州还是纽约？",
        a: "加州气候温和、中文资源成熟，适合首次赴美；纽约医疗顶尖、交通便利，适合需要顶级专科支持的家庭。我们会根据具体情况建议。",
      },
      {
        q: "总费用大概多少？",
        a: "以常规自然分娩为例，包含月子中心 3 个月套餐、医生医院费用、证件办理，预算区间约 25–45 万人民币。首次咨询后出具详细报价。",
      },
    ],
  },
  {
    slug: "career",
    name: "海外职业发展",
    nameEn: "Career Abroad",
    tagline: "用结构化方法，在异国他乡重建事业",
    description:
      "为已登陆或计划登陆美国的专业人士提供职业路径规划、简历优化、面试辅导、雇主 sponsorship 协调等服务，让职业不因跨越太平洋而中断。",
    highlights: [
      "行业对标的美式简历与 LinkedIn 重构",
      "模拟面试（英文 / 行为面 / 技术面）",
      "H-1B / O-1 / EB-1 身份路径推演",
      "Networking 与内推资源对接",
      "跨文化职场适应教练",
    ],
    process: [
      { step: "职业画像", detail: "梳理过往经验，定位美国市场的匹配岗位。" },
      { step: "材料打磨", detail: "简历 / LinkedIn / Cover Letter 全套重构。" },
      { step: "面试模拟", detail: "行为面、案例面、技术面的分轮训练。" },
      { step: "投递执行", detail: "定向投递 + 内推，跟进每一条反馈。" },
      { step: "Offer 谈判", detail: "薪资、股权、身份 sponsorship 谈判辅导。" },
      { step: "长期陪伴", detail: "入职后 90 天内持续跟进适应情况。" },
    ],
    faq: [
      {
        q: "不是名校毕业也能找到好工作吗？",
        a: "可以。学历是起点之一，但美国企业更看重结构化经验和清晰的 impact 叙事。我们协助你把真实经历讲成对方听得懂的故事。",
      },
      {
        q: "没有身份能投哪些公司？",
        a: "大厂（FAANG、头部金融、咨询）通常都有 sponsorship 项目；我们会筛出对身份友好的目标名单，避免无效投递。",
      },
    ],
  },
  {
    slug: "education",
    name: "名校教育规划",
    nameEn: "Education Planning",
    tagline: "把教育当作一场十年的家族工程",
    description:
      "从幼儿园插班到本科申请，覆盖整个美国升学通路。以长期主义的视角为家庭设计教育路径，让每个阶段的选择都在为下一个阶段铺路。",
    highlights: [
      "K–12 择校 / 插班 / Boarding 全栈咨询",
      "标化考试（SAT / ACT / AP / IB）路径规划",
      "科研 / 竞赛 / 公益活动策展",
      "本科 / 硕士 申请全流程",
      "留学期间家长远程陪伴顾问",
    ],
    process: [
      { step: "家庭访谈", detail: "理解家庭价值观、孩子兴趣、学业现状。" },
      { step: "长期规划", detail: "出具 3–10 年教育路径图与关键节点。" },
      { step: "择校匹配", detail: "基于孩子画像筛选 target / reach / safe 组合。" },
      { step: "过程培养", detail: "学科、标化、课外活动的阶段性执行方案。" },
      { step: "申请冲刺", detail: "文书、面试、推荐信、选校终选。" },
      { step: "入学过渡", detail: "住宿、签证、生活、学业衔接全方位护航。" },
    ],
    faq: [
      {
        q: "什么时候开始规划合适？",
        a: "初中及以前开始最理想，有充足时间发展学术、活动、兴趣。高中阶段进入我们体系的，我们会调整节奏做最大化。",
      },
      {
        q: "只做申请冲刺不做长期规划可以吗？",
        a: "可以。高三的申请冲刺服务独立存在，但我们始终建议至少 24 个月的准备窗口才能让文书和活动线有厚度。",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "高端医疗预约",
    nameEn: "Premium Healthcare",
    tagline: "顶级医疗资源，不再被距离隔开",
    description:
      "为有重症治疗、健康管理、高端体检需求的家庭，对接美国顶级医院与专科医生，协调就医流程与跨国医疗翻译。",
    highlights: [
      "梅奥 · 麻省总医院 · MD Anderson 等顶级医院对接",
      "专家二次诊疗意见（Second Opinion）",
      "年度高端体检套餐预约",
      "全程医疗翻译与病历整理",
      "赴美就医的签证 / 住宿 / 陪护协助",
    ],
    process: [
      { step: "病历整理", detail: "收集并翻译既往病历，对接美方专家审阅。" },
      { step: "医生匹配", detail: "根据病情推荐专科医生与医院。" },
      { step: "预约安排", detail: "协调门诊、检查、住院时间表。" },
      { step: "就医陪同", detail: "医疗翻译、就诊陪同、手续协助。" },
      { step: "后续随访", detail: "返回国内后的远程复诊与用药跟进。" },
    ],
    faq: [
      {
        q: "没有购买美国医疗保险也能用你们的服务吗？",
        a: "可以。我们协助对接自费患者的就医流程，并可根据需要推荐短期医疗保险或就医资金托管方案。",
      },
    ],
  },
  {
    slug: "wealth",
    name: "美国保险与理财",
    nameEn: "Insurance & Wealth",
    tagline: "用美国工具，守护家族的下一个三十年",
    description:
      "由持有加州注册保险员执照的专家提供美国人寿保险、储蓄险、医疗保险，以及跨国资产配置、税务规划、信托设立等综合方案。",
    highlights: [
      "持牌专家 1 对 1 咨询",
      "终身寿险 / IUL / 年金规划",
      "家族信托 & 跨国资产继承",
      "美国税务居民与非居民方案",
      "保单年度审阅与再平衡",
    ],
    process: [
      { step: "家庭财务诊断", detail: "资产、收入、支出、目标四维度画像。" },
      { step: "税务与身份梳理", detail: "区分美国税务居民 / 非居民适用方案。" },
      { step: "方案设计", detail: "保险、信托、投资组合的综合建议。" },
      { step: "落地执行", detail: "协助投保、开户、信托设立。" },
      { step: "长期复盘", detail: "每年至少一次全面审阅并调整。" },
    ],
    faq: [
      {
        q: "保险和投资哪个优先？",
        a: "先保障，再增长。保险是承担下行风险的底座，资产配置的进攻性策略建立在底座之上。",
      },
      {
        q: "非美籍人士可以购买美国保险吗？",
        a: "可以。非居民赴美投保有完整的合规流程，需要提前准备资金来源、健康核保等材料，我们全程协助。",
      },
    ],
  },
];

export const experts: Array<{
  id: string;
  name: string;
  title: string;
  photo: string;
  credentials: string[];
  bio: string;
  timeline: { year: string; event: string }[];
  specialties: ServiceSlug[];
}> = [
  {
    id: "founder",
    name: "林清和",
    title: "创始人 / 首席顾问",
    photo: "/images/expert-1.svg",
    credentials: [
      "加州注册保险员 (California Life Agent Lic #0000000)",
      "CFP® 候选人",
      "哥伦比亚大学教育学硕士",
    ],
    bio:
      "旅美十四年，从一位独自抵达纽约的留学生，到陪伴百余个中国家庭完成赴美安家。她相信每一份专业服务的背后，都是一个真实家庭的信任。",
    timeline: [
      { year: "2011", event: "哥伦比亚大学教育学硕士毕业，定居纽约。" },
      { year: "2014", event: "创立 Haven Advisors 前身，服务首批赴美生子家庭。" },
      { year: "2018", event: "考取加州注册保险员执照，开展保险与财务规划。" },
      { year: "2021", event: "迁址洛杉矶，业务扩展至教育与医疗预约。" },
      { year: "2024", event: "栖美 Haven Advisors 品牌升级，团队扩展到 12 人。" },
    ],
    specialties: ["birth", "education", "wealth"],
  },
  {
    id: "edu-director",
    name: "周安",
    title: "教育规划总监",
    photo: "/images/expert-2.svg",
    credentials: [
      "哈佛大学教育学院 Ed.M.",
      "IECA 独立教育顾问协会会员",
    ],
    bio:
      "前私立寄宿学校招生官，擅长将每一个孩子独特的成长脉络，翻译成招生官读得懂的叙事。",
    timeline: [
      { year: "2015", event: "哈佛大学教育学院毕业。" },
      { year: "2016", event: "加入新英格兰某寄宿中学招生办公室。" },
      { year: "2020", event: "加入 Haven Advisors，负责 K–12 与本科申请方向。" },
    ],
    specialties: ["education"],
  },
  {
    id: "healthcare-lead",
    name: "Dr. Emily Chen",
    title: "医疗资源负责人",
    photo: "/images/expert-3.svg",
    credentials: ["M.D., Johns Hopkins University", "ATA 认证医疗翻译"],
    bio:
      "临床医学背景出身，专注为亚裔家庭在美国医疗体系中搭建值得信赖的跨文化桥梁。",
    timeline: [
      { year: "2013", event: "约翰霍普金斯大学医学院毕业。" },
      { year: "2017", event: "加入某综合医院内科，服务大量亚裔患者。" },
      { year: "2022", event: "全职加入 Haven Advisors，负责医疗资源整合。" },
    ],
    specialties: ["healthcare"],
  },
];

export type BlogCategory = "攻略" | "案例" | "政策";

export const blogPosts: Array<{
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  readMinutes: number;
  cover: string;
  body: string; // Markdown-lite plain text for MVP
  author: string;
}> = [
  {
    slug: "honest-visa-2026",
    title: "2026 诚实签证：签证官真正在看的是什么",
    excerpt:
      "从近年面签反馈出发，拆解诚实签证下签证官关注的六个关键点，以及准爸妈最容易忽略的准备细节。",
    category: "攻略",
    publishedAt: "2026-04-12",
    readMinutes: 8,
    cover: "/images/blog-1.svg",
    author: "林清和",
    body: `# 2026 诚实签证：签证官真正在看的是什么

\n
签证官不是在找"赴美生子"这四个字，他们在找的是一个完整、可信、有回国约束的故事。\n
\n## 一、行程的合理性\n
为什么是现在？为什么是这个城市？为什么是这家月子中心？每一个选择都应该有自洽的理由。\n
\n## 二、经济能力的匹配\n
预算远超你日常消费水平的行程，会让签证官停下来。账户流水、纳税记录、工作证明，缺一不可。\n
\n## 三、回国约束的真实\n
国内的房、车、工作、长辈——这些不是道具，是你愿意回来的理由。面签时能真诚讲述的，才是有力的约束。\n
\n（以下内容省略，正式版会由专家团队撰写完整长文。）`,
  },
  {
    slug: "la-vs-ny-maternity",
    title: "月子中心在加州还是纽约？一篇对比说清楚",
    excerpt:
      "气候、医疗资源、华人生态、成本结构，四个维度拆解加州和纽约的赴美生子选择。",
    category: "攻略",
    publishedAt: "2026-03-28",
    readMinutes: 6,
    cover: "/images/blog-2.svg",
    author: "周安",
    body: `# 月子中心在加州还是纽约？\n\n先说结论：如果家庭第一次赴美，加州更友好；如果医疗诉求很具体或事业已在纽约有基础，纽约更高效。\n\n## 气候\n加州冬天不冷、晒得到太阳，产后恢复对母亲的身心都更温和。\n\n## 医疗资源\n两地都有顶级的产科医院。纽约医学中心更密集，加州在"中文友好医生"数量上更多。\n\n（以下内容省略。）`,
  },
  {
    slug: "case-bay-area-family",
    title: "案例｜一位旧金山工程师家庭的五年规划",
    excerpt:
      "从 H-1B 到绿卡、从学区选择到保险配置，记录一个典型湾区中产家庭的五年 journey。",
    category: "案例",
    publishedAt: "2026-03-15",
    readMinutes: 10,
    cover: "/images/blog-3.svg",
    author: "林清和",
    body: `# 一位旧金山工程师家庭的五年规划\n\n（化名案例）\n\n张先生一家落地湾区时，孩子 4 岁，夫妻双方都持 H-1B。他们找到我们时，关心的问题并不复杂：\n\n1. 孩子的教育路径要怎么排？\n2. 房子要不要在绿卡前买？\n3. 保险配置从哪里开始？\n\n我们用了四次深度咨询完成了初步规划……\n\n（以下内容省略。）`,
  },
  {
    slug: "policy-ssn-update",
    title: "政策更新｜2026 年 SSN 申请流程调整",
    excerpt:
      "社安卡申请流程在 2026 年 Q1 有若干细微但关键的更新，涉及出生证明的提交方式。",
    category: "政策",
    publishedAt: "2026-02-22",
    readMinutes: 4,
    cover: "/images/blog-4.svg",
    author: "Dr. Emily Chen",
    body: `# 2026 年 SSN 申请流程调整\n\n2026 年 Q1，美国社安局对新生儿 SSN 申请流程做了以下调整：\n\n- 出生证明需在州卫生部加急通道办理\n- 社安局部分分局恢复线下预约\n\n（正式版会持续更新官方文件链接。）`,
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  cover: string;
  summary: string;
  tags: ServiceSlug[];
  body: string;
  year: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "beijing-family-birth",
    title: "北京 L 女士：诚实签下的第一次赴美",
    cover: "/images/case-1.svg",
    summary:
      "首次出境即申请旅游签 + 赴美生子，我们用 11 个月协助家庭完成从面签到归国的完整闭环。",
    tags: ["birth"],
    year: "2024–2025",
    body: `L 女士是一位在北京工作的设计师……（脱敏案例详情）`,
  },
  {
    slug: "shanghai-boarding",
    title: "上海 C 同学：从沪上初中到新英格兰寄宿高中",
    cover: "/images/case-2.svg",
    summary:
      "两年准备期 + 一次关键面试辅导，帮助 C 同学拿到三所 top-tier boarding school 的 offer。",
    tags: ["education"],
    year: "2023–2025",
    body: `C 同学家庭最初的诉求只是"想走出去看看"……（脱敏案例详情）`,
  },
  {
    slug: "shenzhen-exec-relocation",
    title: "深圳 W 先生：跨国高管的家庭三件套",
    cover: "/images/case-3.svg",
    summary:
      "保险 + 教育 + 医疗三线并进，为一位深圳科技公司高管落地美国设计综合方案。",
    tags: ["wealth", "education", "healthcare"],
    year: "2024",
    body: `W 先生是深圳某上市科技公司的高管……（脱敏案例详情）`,
  },
];

export const stats = [
  { label: "服务家庭", value: 380, suffix: "+" },
  { label: "累计从业年限", value: 14, suffix: "年" },
  { label: "诚实签通过率", value: 95, suffix: "%" },
  { label: "合作医院与机构", value: 60, suffix: "+" },
];

export const navItems = [
  { label: "首页", href: "/" },
  { label: "服务矩阵", href: "/services" },
  { label: "专家团队", href: "/experts" },
  { label: "客户案例", href: "/cases" },
  { label: "赴美百科", href: "/blog" },
  { label: "关于栖美", href: "/about" },
];

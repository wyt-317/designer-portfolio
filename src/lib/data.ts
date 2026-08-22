// 项目数据 & 作品集信息
export type ProjectKey = 'uc' | 'maoer';

export interface ProjectSummary {
  slug: ProjectKey;
  name: string;
  subtitle: string;
  category: string;
  period: string;
  role: string;
  brandColor: 'orange' | 'blue';
  cover: string;
  tags: string[];
  summary: string;
}

// 作品集 PDF 链接（Case Study 页直接嵌入预览）
export const UC_PDF =
  'https://coze-coding-project.tos.coze.site/create_attachment/2026-08-21/727225961284219_2a781a489b16f2ff3481df07d9ac5928_UC%E5%B0%8F%E8%AF%B4%E4%BD%9C%E5%93%81%E9%9B%86.pdf?sign=4909372194-2b5881ff30-0-6f0c52b614f0ecd6d6ecb9e8e5463d68b0b2c82dd5c8105d4c8bd4ec5cc3c91a';

export const MAOER_PDF =
  'https://coze-coding-project.tos.coze.site/create_attachment/2026-08-21/727225961284219_24055868a573ad75b9a3594d36995f42_%E7%8C%AB%E8%80%B3FM%E6%B8%B8%E6%88%8F%E5%8C%96%E8%BF%90%E8%90%A5%E4%BD%9C%E5%93%81%E9%9B%86.pdf?sign=4909372235-922f2105d7-0-aa1b09c70025a0a5fbc0d00f171bf87f00796e90592d125a03aaafedefa7b525';

export const PORTFOLIO_PDF =
  'https://coze-coding-project.tos.coze.site/create_attachment/2026-08-21/727225961284219_092e1fbe6d66fee883fbe8d5488dff94_%E4%BD%9C%E5%93%81%E9%9B%86.pdf?sign=4909369654-c581247089-0-b91aac27fa80f4a1c51af1cfd5cfe8977ccdea618345dee4de2aa2d984c2723b';

export const RESUME_PDF =
  'https://coze-coding-project.tos.coze.site/create_attachment/2026-08-21/727225961284219_980ca7deabbcff7bba1be8c1ab2d03a3_%E4%B8%AA%E4%BA%BA%E7%AE%80%E5%8E%86.pdf?sign=4909369653-d4677c713c-0-a97f0c3d328da0e2dd2f55395a45079db313128cc3237ed5187ee6780cfe6c00';

export const HERO_VIDEO =
  'https://coze-coding-project.tos.coze.site/create_attachment/2026-08-21/727225961284219_1dc7da7120fb024036fe5f038ddcd111_%E8%A7%86%E9%A2%91.mp4?sign=4909369616-ec7f49014a-0-021be8804b8b74a9541c17c1c8bd996ac22884065c3341f4ac15c3e0bd8674a9';

// 项目封面：使用作品集开头的主视觉图（本地 public/covers，完整展示不裁切）
export const UC_COVER = '/covers/uc-cover.jpg';
export const MAOER_COVER = '/covers/maoer-cover.jpg';

export const CONTACT = {
  wechat: 'W18014914981',
  email: '3555029529@qq.com',
  phone: '17798504928',
};

export const PROJECTS: ProjectSummary[] = [
  {
    slug: 'uc',
    name: 'UC小说 · C端体验设计',
    subtitle: '让阅读，不止于阅读',
    category: 'Product / UX / UI Design',
    period: '2026.05 - 2026.07',
    role: 'UX/UI Designer',
    brandColor: 'orange',
    cover: UC_COVER,
    tags: ['用户研究', '交互设计', '高保真视觉', '品牌IP'],
    summary:
      '针对用户找书效率低、阅读体验差等核心问题，从用户调研到界面落地进行完整体验优化，旨在提升内容分发效率与用户留存。',
  },
  {
    slug: 'maoer',
    name: '猫耳FM · 游戏化运营设计',
    subtitle: '夏日消消乐 · 闯关听剧赢大奖',
    category: 'Visual / Gamification / Campaign',
    period: '2026.07 - 2026.08',
    role: 'Visual / Campaign Designer',
    brandColor: 'blue',
    cover: MAOER_COVER,
    tags: ['运营设计', '游戏化', '品牌IP', 'AIGC'],
    summary:
      '暑期三消游戏化运营活动，通过游戏化视觉提升用户参与度与消费转化，从感知、转化、留存三个维度搭建视觉策略框架。',
  },
];

export const UC_PROJECT = PROJECTS[0];
export const MAOER_PROJECT = PROJECTS[1];

// UC小说 Case Study 页面：每一页一屏的作品集图片（本地 public/uc-case）
export interface CaseStudyImage {
  src: string;
  alt: string;
}

export const UC_CASE_IMAGES: CaseStudyImage[] = [
  { src: '/uc-case/uc-1.jpg', alt: 'UC小说设计专项封面' },
  { src: '/uc-case/uc-2.jpg', alt: '项目背景与产品现状' },
  { src: '/uc-case/uc-3.jpg', alt: '用户访谈研究' },
  { src: '/uc-case/uc-4.jpg', alt: '用户调研方式' },
  { src: '/uc-case/uc-5.jpg', alt: '调研问题框架与用户类型' },
  { src: '/uc-case/uc-6.jpg', alt: '用户旅程图' },
  { src: '/uc-case/uc-7.jpg', alt: '产品自查 · 首页' },
  { src: '/uc-case/uc-8.jpg', alt: '产品自查 · 详情页与阅读器' },
  { src: '/uc-case/uc-9.jpg', alt: '问题聚焦总结' },
  { src: '/uc-case/uc-10.jpg', alt: '竞品分析目的与选择' },
  { src: '/uc-case/uc-11.jpg', alt: '竞品界面分析（一）' },
  { src: '/uc-case/uc-12.jpg', alt: '竞品界面分析（二）' },
  { src: '/uc-case/uc-13.jpg', alt: '竞品对标与差异化机会分析' },
  { src: '/uc-case/uc-14.jpg', alt: '设计策略：找书 / 决策 / 阅读' },
  { src: '/uc-case/uc-15.jpg', alt: '设计目标' },
  { src: '/uc-case/uc-16.jpg', alt: '设计目标一：构建高效分发生态' },
  { src: '/uc-case/uc-17.jpg', alt: '首页结构布局 old vs new' },
  { src: '/uc-case/uc-18.jpg', alt: '构建小说频道专属 Tap' },
  { src: '/uc-case/uc-19.jpg', alt: '首页多分发体系搭建 · Banner' },
  { src: '/uc-case/uc-20.jpg', alt: '金刚位图标设计' },
  { src: '/uc-case/uc-21.jpg', alt: '排行榜优化 · 品牌色强化与标签升级' },
  { src: '/uc-case/uc-22.jpg', alt: '榜单卡片标签 · 按内容类型差异化分发' },
  { src: '/uc-case/uc-23.jpg', alt: '卡片多元分发 · 卡片式与瓷片式' },
  { src: '/uc-case/uc-24.jpg', alt: 'Feed 流多元内容分发' },
  { src: '/uc-case/uc-25.jpg', alt: '智能搜索体验升级 · 多维检索与智能辅助' },
  { src: '/uc-case/uc-26.jpg', alt: '设计目标二：驱动用户留存转化' },
  { src: '/uc-case/uc-27.jpg', alt: '书籍详情页优化 · 看点提炼与商业转化' },
  { src: '/uc-case/uc-28.jpg', alt: '阅读互动体验升级 · 段评编辑器' },
  { src: '/uc-case/uc-29.jpg', alt: 'AI 生图 · 让文字活起来' },
  { src: '/uc-case/uc-30.jpg', alt: '书摘分享 · 分享每一刻' },
  { src: '/uc-case/uc-31.jpg', alt: '互动新玩法 · UC 松鼠 IP 表情合集' },
  { src: '/uc-case/uc-32.jpg', alt: '打造 UC 小说专属表情包' },
  { src: '/uc-case/uc-33.jpg', alt: '互动玩法标签卡片合集' },
  { src: '/uc-case/uc-34.jpg', alt: '礼物打赏互动体验 · 创作激励与互动反馈' },
  { src: '/uc-case/uc-35.jpg', alt: '设计目标三：焕新品牌视觉感知' },
  { src: '/uc-case/uc-36.jpg', alt: '品牌视觉规范 · 色彩与圆角' },
  { src: '/uc-case/uc-37.jpg', alt: '打造 IP+AI 全场景视觉渗透' },
  { src: '/uc-case/uc-38.jpg', alt: 'AIGC 辅助生成 IP 交互形态' },
  { src: '/uc-case/uc-39.jpg', alt: 'IP 延展 · 多场景适配' },
  { src: '/uc-case/uc-40.jpg', alt: '趣玩 Novel Reading · 阅读伙伴 IP 群像' },
  { src: '/uc-case/uc-41.jpg', alt: '用户初始个性化头像设计 · 以阅读偏好为锚的人设头像' },
  { src: '/uc-case/uc-42.jpg', alt: '所有界面展示 · All Pages' },
  { src: '/uc-case/uc-43.jpg', alt: '个人思考沉淀 · 个人收获 / 实践短板 / 成长方向' },
];

// 猫耳FM游戏化运营 Case Study：每一页一屏的作品集图片（本地 public/maoer-case）
export const MAOER_CASE_IMAGES: CaseStudyImage[] = [
  { src: '/maoer-case/maoer-1.jpg', alt: '猫耳FM × 消除一夏 · 活动封面' },
  { src: '/maoer-case/maoer-2.jpg', alt: '活动背景与目标分析' },
  { src: '/maoer-case/maoer-3.jpg', alt: '设计策略：感知 / 转化 / 留存' },
  { src: '/maoer-case/maoer-4.jpg', alt: '视觉定义与色彩体系' },
  { src: '/maoer-case/maoer-5.jpg', alt: '多主题主视觉展示' },
  { src: '/maoer-case/maoer-6.jpg', alt: '主视觉规范 · 背景/中景/前景分层' },
  { src: '/maoer-case/maoer-7.jpg', alt: '元素生成过程与组件化逻辑' },
  { src: '/maoer-case/maoer-8.jpg', alt: '消消乐棋子元素体系' },
  { src: '/maoer-case/maoer-9.jpg', alt: 'H5 玩法活动链路' },
  { src: '/maoer-case/maoer-10.jpg', alt: '游戏界面展示' },
  { src: '/maoer-case/maoer-11.jpg', alt: '多触达路径' },
  { src: '/maoer-case/maoer-12.jpg', alt: '触达入口 Banner' },
  { src: '/maoer-case/maoer-13.jpg', alt: '主视觉设计过程：草稿 / AIGC / PS后期' },
  { src: '/maoer-case/maoer-14.jpg', alt: '弹窗展示' },
  { src: '/maoer-case/maoer-15.jpg', alt: '奖励弹窗与助力弹窗' },
  { src: '/maoer-case/maoer-16.jpg', alt: '闪屏页展示' },
  { src: '/maoer-case/maoer-17.jpg', alt: '所有页面总览' },
];

// 作品墙图片（本地 public/works，完整展示不裁切）
export const GALLERY_IMAGES = [
  { src: '/works/uc-1.jpg', alt: 'UC小说 · 主视觉与玩法定义', project: 'uc' as const },
  { src: '/works/uc-2.jpg', alt: 'UC小说 · 多主题消除一夏', project: 'uc' as const },
  { src: '/works/uc-3.jpg', alt: 'UC小说 · 消消乐棋子体系', project: 'uc' as const },
  { src: '/works/uc-4.jpg', alt: 'UC小说 · 触达 Banner 体系', project: 'uc' as const },
  { src: '/works/uc-5.jpg', alt: 'UC小说 · 主视觉设计过程', project: 'uc' as const },
  { src: '/works/uc-6.jpg', alt: 'UC小说 · 闪屏页矩阵', project: 'uc' as const },
  { src: '/works/maoer-1.jpg', alt: '猫耳FM · 松鼠 IP 互动表情包', project: 'maoer' as const },
  { src: '/works/maoer-2.jpg', alt: '猫耳FM · 评论互动与专属表情', project: 'maoer' as const },
  { src: '/works/maoer-3.jpg', alt: '猫耳FM · 情绪票券互动玩法', project: 'maoer' as const },
  { src: '/works/maoer-4.jpg', alt: '猫耳FM · IP 多场景延展', project: 'maoer' as const },
  { src: '/works/maoer-5.jpg', alt: '猫耳FM · 趣玩阅读伙伴天团', project: 'maoer' as const },
  { src: '/works/maoer-6.jpg', alt: '猫耳FM · 个性化头像体系', project: 'maoer' as const },
];

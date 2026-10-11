# Piggy 的个人作品集

基于 Vue 3 + Nuxt 4 的中文个人介绍网站，展示专业技能和过往项目经历，适配手机与电脑。

## 本地开发

建议使用 Node.js 22 LTS。

```bash
npm ci
npm run dev
```

## 静态构建

```bash
npm run build
```

静态文件输出到 `.output/public`。

## 内容与交互

- 首页：个人介绍、专业技能、精选项目、工作经历、联系方式。
- 项目详情：动态路由 `/projects/[slug]`。
- 手机菜单展开、收起动画与菜单图标变形。
- 项目分类选中背景滑动与列表切换过渡。
- 尊重系统减少动画设置。

项目内容位于 `app/data/projects.js`，样式位于 `app/assets/main.css`。当前项目配图为界面示意，后续可替换为真实截图。

站点预览：https://piggy-frontend-portfolio.piggy0595.chatgpt.site

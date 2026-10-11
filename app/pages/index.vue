<script setup>
import { projects } from '~/data/projects'
const filter = ref('全部项目')
const filters = ['全部项目', '移动端', '网站']
const visibleProjects = computed(() => projects.filter(p => filter.value === '全部项目' || p.type === filter.value))
const filterGroup = ref(null)
const indicatorReady = ref(false)
const indicatorStyle = ref({})
let filterResizeObserver
function updateIndicator() {
  const button = filterGroup.value?.querySelector('button.selected')
  if (!button) return
  indicatorStyle.value = { width: `${button.offsetWidth}px`, transform: `translateX(${button.offsetLeft}px)` }
  indicatorReady.value = true
}
watch(filter, () => nextTick(updateIndicator))
onMounted(() => {
  updateIndicator()
  filterResizeObserver = new ResizeObserver(updateIndicator)
  filterResizeObserver.observe(filterGroup.value)
  window.addEventListener('resize', updateIndicator)
})
onBeforeUnmount(() => {
  filterResizeObserver?.disconnect()
  window.removeEventListener('resize', updateIndicator)
})
const skills = [
  { icon: '</>', name: '网站与界面开发', text: '从组件到完整页面，组织清晰、可维护的前端界面。', tags: ['Vue2 / Vue3', 'Nuxt', 'JavaScript', 'TypeScript', 'HTML / CSS'], proof: '实践于科之乎 PC 网站', project: 'kezhi' },
  { icon: '▣', name: '移动端与跨端', text: '理解平台差异，让业务在小程序、H5 和 App 中顺畅运行。', tags: ['UniApp', 'Uview / uvui', '微信小程序', 'Android 打包'], proof: '实践于东来易购、慧购车联', project: 'donglai' },
  { icon: '⌁', name: '业务交互与通信', text: '把接口、状态和设备反馈串成完整的用户流程。', tags: ['Axios', 'Pinia / Vuex', 'WebSocket', 'WebView'], proof: '实践于慧购车联设备通信', project: 'huigou' },
  { icon: '▥', name: '后台与数据展示', text: '处理业务表单、管理页面与数据可视化。', tags: ['Element UI', 'ECharts', 'FastAdmin', 'ThinkPHP / SQL'], proof: '慧购云后台、垃圾分类大屏' }
]
useSeoMeta({ title: 'Piggy · 前端开发工程师', description: '专注 Vue 生态，探索网站、小程序与 Android App 的开发。了解 Piggy 的专业技能与项目经历。' })
</script>
<template>
  <section class="hero container">
    <div class="hero-copy"><p class="intro-line"><span class="blue-line"></span>你好，我是 Piggy</p><h1>把想法，<br />做成可用的<span class="last-line">界面<span class="title-period">。</span></span></h1><p class="hero-description">一名前端开发工程师，专注 Vue 生态。<br class="desktop-break" />从网站、小程序到 Android App，<br class="desktop-break" />在真实业务中打磨细节，让交互更自然。</p><div class="hero-actions"><a class="button primary" href="#projects">看看我的项目 <span aria-hidden="true">↗</span></a><a class="text-link" href="#about">认识一下我 <span aria-hidden="true">↓</span></a></div><div class="hero-location"><span aria-hidden="true">◎</span> 厦门，福建 <span class="location-divider"></span> Vue · Nuxt · UniApp</div></div>
    <div class="hero-art" role="img" aria-label="前端开发示意：代码编辑器与应用界面"><div class="art-grid"></div><div class="art-note">从代码，到体验。</div><div class="code-window"><div class="code-bar"><span class="traffic">● ● ●</span><span>hello.vue</span><span>Vue</span></div><div class="code-content"><p><em>01</em><span class="code-muted">&lt;script setup&gt;</span></p><p><em>02</em><span class="code-pink">const</span> developer = {</p><p><em>03</em>　name: <span class="code-green">'Piggy'</span>,</p><p><em>04</em>　focus: <span class="code-green">'Frontend'</span>,</p><p><em>05</em>　build: <span class="code-green">'With care'</span></p><p><em>06</em>}</p><p><em>07</em><span class="code-muted">&lt;/script&gt;</span></p></div></div><div class="art-ui"><div class="art-ui-nav"><img src="/favicon.svg" width="25" height="25" alt="" /><span>我的创作空间</span><i>•••</i></div><div class="art-ui-content"><span class="tiny-label">灵感落地</span><strong>让好想法<br />拥有好体验。</strong><div class="ui-row"><span></span><span></span><span></span></div><div class="ui-pill">每一个细节，都值得认真</div></div></div><div class="art-vue">V<span>Vue</span></div><div class="art-bracket" aria-hidden="true">{ }</div><span class="art-caption">界面与代码创意示意</span></div>
  </section>
  <div class="specialties"><div class="container specialties-inner"><span>关注体验，也关注实现</span><b>网站开发</b><i></i><b>跨端应用</b><i></i><b>业务交互</b><i></i><b>数据可视化</b></div></div>
  <section id="projects" class="section container projects-section">
    <div class="section-heading"><div><p class="section-kicker">项目经历</p><h2>在业务中，解决具体问题。</h2></div><p class="section-aside">从页面实现到流程衔接，<br />每个项目都有不同的挑战。</p></div>
    <div class="project-controls"><div ref="filterGroup" class="filter-group" :class="{ 'indicator-ready': indicatorReady }" role="group" aria-label="项目筛选"><span class="filter-indicator" :style="indicatorStyle" aria-hidden="true"></span><button v-for="f in filters" :key="f" :class="{ selected: filter === f }" @click="filter = f" :aria-pressed="filter === f">{{ f }}</button></div><span class="result-count" aria-live="polite">{{ visibleProjects.length }} 个项目</span></div>
    <Transition name="project-results" mode="out-in"><div class="project-list" :key="filter"><article class="project-row" v-for="project in visibleProjects" :key="project.slug"><NuxtLink class="project-image-link" :to="'/projects/' + project.slug" :aria-label="'查看' + project.name + '项目详情'"><ProjectVisual :kind="project.visual" /></NuxtLink><div class="project-copy"><div class="project-category"><span>{{ project.number }}</span>{{ project.category }}</div><h3><NuxtLink :to="'/projects/' + project.slug">{{ project.name }}</NuxtLink></h3><h4>{{ project.subtitle }}</h4><p>{{ project.description }}</p><div class="tags"><span v-for="tag in project.stack" :key="tag">{{ tag }}</span></div><p class="project-focus">{{ project.focus }}</p><NuxtLink class="project-link" :to="'/projects/' + project.slug">了解项目 <span aria-hidden="true">↗</span></NuxtLink></div></article></div></Transition>
  </section>
  <section id="skills" class="skills-section section"><div class="container"><div class="section-heading"><div><p class="section-kicker">专业技能</p><h2>技术是工具，<br />解决问题是目标。</h2></div><p class="section-aside">围绕实际项目积累能力，<br />在实践中持续学习。</p></div><div class="skills-grid"><article class="skill-item" v-for="skill in skills" :key="skill.name"><div class="skill-title"><span class="skill-icon" aria-hidden="true">{{ skill.icon }}</span><h3>{{ skill.name }}</h3></div><p>{{ skill.text }}</p><div class="skill-tags"><span v-for="tag in skill.tags" :key="tag">{{ tag }}</span></div><NuxtLink v-if="skill.project" :to="'/projects/' + skill.project" class="skill-proof">{{ skill.proof }} <span aria-hidden="true">↗</span></NuxtLink><span v-else class="skill-proof">{{ skill.proof }}</span></article></div></div></section>
  <section id="about" class="section container about-section"><div class="about-portrait"><div class="portrait-top">一点关于我</div><svg viewBox="0 0 300 280" aria-label="Piggy 小猪线条插画" role="img"><g fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M81 110 60 56q43-4 66 36m92 18 20-54q-43-4-66 36"/><ellipse cx="149" cy="153" rx="86" ry="71"/><rect x="115" y="160" width="68" height="43" rx="21"/><path d="M137 181h1m25 0h1m-61-41h1m91 0h1"/><path d="m48 223 16-4m181-4 15 5m-202-68-16 1m215 0 16 1"/><path d="M114 232q33 14 69 0"/></g></svg><strong>Piggy<span>.</span></strong><span class="portrait-note">认真做事，保持好奇。</span></div><div class="about-copy"><p class="section-kicker">关于我</p><h2>写代码，<br />也理解代码背后的需求。</h2><p>我是一名前端开发工程师，主要使用 Vue、Nuxt 和 UniApp。做过内容网站、管理后台、小程序与 Android App，也接触过设备通信和数据可视化。</p><p>我喜欢把复杂流程拆成清晰的步骤：理解需求，组织页面和状态，再把接口与交互连接起来。希望做出来的东西既好用，也便于后续维护。</p><div class="experience"><span>2023.07</span><div><strong>开启前端开发工作</strong><p>在网站、跨端应用与业务系统中积累实践经验。</p></div></div><a class="button outline" href="https://github.com/Kuma0595" target="_blank" rel="noopener noreferrer">在 GitHub 认识我 <span aria-hidden="true">↗</span></a></div></section>
  <section class="contact-section"><div class="container contact-inner"><div><p>谢谢你看到这里</p><h2>下一次，一起把想法做出来。</h2></div><a class="button primary" href="https://github.com/Kuma0595" target="_blank" rel="noopener noreferrer">访问我的 GitHub <span aria-hidden="true">↗</span></a></div></section>
</template>

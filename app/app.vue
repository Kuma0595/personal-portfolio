<script setup>
const menuOpen = ref(false)
const route = useRoute()
const isMobile = ref(false)
const menuButton = ref(null)
let mobileQuery
function syncViewport() {
  isMobile.value = mobileQuery.matches
  if (!isMobile.value) menuOpen.value = false
}
function closeMenu(event) {
  if (event?.type === 'click' && !event.target.closest('a')) return
  menuOpen.value = false
  if (event?.key === 'Escape') menuButton.value?.focus()
}
onMounted(() => {
  mobileQuery = window.matchMedia('(max-width: 760px)')
  syncViewport()
  mobileQuery.addEventListener('change', syncViewport)
})
onBeforeUnmount(() => mobileQuery?.removeEventListener('change', syncViewport))
watch(() => route.fullPath, () => menuOpen.value = false)
</script>
<template>
  <a class="skip" href="#main">跳到主要内容</a>
  <header class="site-header" @keydown.esc="closeMenu">
    <div class="container header-inner">
      <NuxtLink class="brand" to="/" aria-label="Piggy 首页"><img src="/favicon.svg" alt="" width="34" height="34" /><span>Piggy<span class="brand-dot">.</span></span></NuxtLink>
      <button ref="menuButton" class="menu-toggle" :class="{ 'is-open': menuOpen }" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-controls="site-nav">{{ menuOpen ? '关闭菜单' : '菜单' }}<span class="menu-icon" aria-hidden="true"><i></i><i></i><i></i></span></button>
      <nav id="site-nav" :class="{ open: menuOpen }" :inert="isMobile && !menuOpen" aria-label="主导航" @click="closeMenu">
        <div class="nav-clip"><div class="nav-links">
        <NuxtLink to="/" :class="{ active: route.path === '/' && !route.hash }">首页</NuxtLink>
        <NuxtLink to="/#projects" :class="{ active: route.path.startsWith('/projects') || route.hash === '#projects' }">项目经历</NuxtLink>
        <NuxtLink to="/#skills" :class="{ active: route.hash === '#skills' }">专业技能</NuxtLink>
        <NuxtLink to="/#about" :class="{ active: route.hash === '#about' }">关于我</NuxtLink>
        <a class="nav-github" href="https://github.com/Kuma0595" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div></div>
      </nav>
    </div>
  </header>
  <main id="main"><NuxtPage /></main>
  <footer class="site-footer"><div class="container footer-inner"><span>© {{ new Date().getFullYear() }} Piggy</span><span>用心做界面，也认真解决问题。</span><a href="https://github.com/Kuma0595" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></footer>
</template>

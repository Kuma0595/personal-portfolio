<script setup>
import { projects } from '~/data/projects'
const route = useRoute()
const project = projects.find(p => p.slug === route.params.slug)
if (!project) throw createError({ statusCode: 404, statusMessage: '项目不存在' })
const others = projects.filter(p => p.slug !== project.slug)
useSeoMeta({ title: project.name + ' · Piggy 的项目经历', description: project.description })
</script>
<template>
  <div class="container detail-page"><NuxtLink class="back-link" to="/#projects">← 返回项目经历</NuxtLink><div class="detail-header"><p class="section-kicker">{{ project.category }}</p><h1>{{ project.name }}</h1><p class="detail-subtitle">{{ project.subtitle }}</p><div class="tags"><span v-for="tag in project.stack" :key="tag">{{ tag }}</span></div></div><ProjectVisual :kind="project.visual" /><div class="detail-layout"><aside class="detail-sidebar"><strong>项目导航</strong><a href="#overview">项目概览</a><a href="#role">我的工作</a><a href="#challenges">实践与难点</a><div class="detail-role"><small>参与角色</small><b>{{ project.role }}</b></div></aside><div class="detail-content"><section id="overview"><h2>项目概览</h2><p>{{ project.overview }}</p></section><section id="role"><h2>我的工作</h2><ul><li v-for="item in project.responsibilities" :key="item">{{ item }}</li></ul></section><section id="challenges"><h2>实践与难点</h2><article v-for="item in project.challenges" :key="item.title"><h3>{{ item.title }}</h3><p>{{ item.text }}</p></article></section><div class="content-note">当前配图为界面示意。真实项目截图与具体成果将在后续补充。</div></div></div><section class="related-projects"><h2>继续了解其他项目</h2><div class="related-grid"><NuxtLink v-for="item in others" :key="item.slug" :to="'/projects/' + item.slug"><small>{{ item.category }}</small><h3>{{ item.name }} <span>↗</span></h3><p>{{ item.subtitle }}</p></NuxtLink></div></section></div>
</template>

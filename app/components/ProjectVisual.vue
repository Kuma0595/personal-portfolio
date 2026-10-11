<script setup>
defineProps({ kind: { type: String, default: 'shop' } })
</script>
<template>
  <div class="project-visual" :class="'visual-' + kind" role="img" :aria-label="kind === 'shop' ? '移动购物界面示意' : kind === 'content' ? '内容网站界面示意' : '小程序与设备连接界面示意'">
    <template v-if="kind === 'shop'">
      <div class="shop-word">日常好物<br />触手可及<span>生活，从一份好选择开始</span></div>
      <div class="phone shop-phone"><div class="phone-status">9:41 <span>● ▰</span></div><div class="phone-heading">东来易购 <i>⌕</i></div><div class="shop-banner"><small>发现生活灵感</small><strong>把喜欢的<br />带回家。</strong><div class="vase"><span></span></div></div><div class="phone-tabs"><span>精选推荐</span><span>每日上新</span><span>生活家居</span></div><div class="goods"><div><div class="goods-image cup"></div><b>日常陶瓷杯</b><small>¥ 39.00</small></div><div><div class="goods-image lamp"></div><b>简约桌面灯</b><small>¥ 89.00</small></div></div><div class="phone-bottom">⌂ 首页 <span>▦ 分类</span><span>♡ 我的</span></div></div>
      <span class="visual-label">界面示意 · 非项目截图</span>
    </template>
    <template v-else-if="kind === 'content'">
      <div class="browser-window"><div class="browser-chrome"><span class="traffic">● ● ●</span><span>科之乎 · 内容发现</span><span>⌕</span></div><div class="content-top"><b>科之乎<span>.</span></b><small>发现　专题　我的关注</small><i>登录</i></div><div class="content-body"><small>探索与思考</small><h3>每一次好奇，<br />都是新的开始。</h3><div class="content-article"><div class="abstract-art"><span></span><i></i></div><div><small>技术与生活</small><b>把复杂的问题<br />拆成简单的实践</b><p>记录想法，分享经验。</p></div></div><div class="content-lines"><span></span><span></span><span></span></div></div></div><span class="visual-label">界面示意 · 非项目截图</span>
    </template>
    <template v-else>
      <div class="device-tv"><div class="tv-inner"><small>慧购车联</small><div class="connection-symbol">⌁</div><strong>设备已连接</strong><p>在小程序继续操作</p></div><span></span></div><div class="phone device-phone"><div class="phone-status">9:41 <span>● ▰</span></div><div class="phone-heading">我的设备</div><div class="device-icon">⌁</div><strong>连接，让操作更简单</strong><p>小程序与设备协同</p><div class="device-state"><i></i> 连接成功</div><div class="device-button">进入设备</div><div class="device-list">我的设备 <span>1 台</span></div></div><span class="visual-label">交互示意 · 非项目截图</span>
    </template>
  </div>
</template>

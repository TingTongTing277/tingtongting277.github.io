import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({

  lang: 'zh-CN',
  theme: plumeTheme({
    // 主题配置
    
  }),
  
  bundler: viteBundler(),
})

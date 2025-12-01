import { defineThemeConfig } from 'vuepress-theme-plume'
import collections from './collections'
import navbar from './navbar'

export default defineThemeConfig({
    logo: '/profile.jpg',

    // 个人简介
    profile: {
        avatar: 'profile.jpg',
        name: '听筒听筒听',
        description: '做些关于未来的工作',
        circle: true,
        layout: 'right',
    },

    // 合集设置
    collections: [
        {type: 'post', dir: 'blog', title: '博客', link: '/blog/'},
        {type: 'doc', dir: 'wiki', linkPrefix: '/wiki/', title: '听筒百科', sidebar: 'auto'},
    ],
})
import { defineCollections } from 'vuepress-theme-plume'

export default defineCollections([
  {
    type: 'post',
    dir: 'blog',
    title: '博客',
    link: '/blog/',

    postList: true,
    linkPrefix: '/blog/',
    
    tags: true,
    tagsLink: '/blog/tags/',
    tagsTheme: 'colored',
    tagsText: '标签',

    archives: true,
    archivesLink: '/blog/archives/',
    archivesText: '归档',

    categories: true,
    categoriesLink: '/blog/categories/',
    categoriesText: '分类',
    categoriesExpand: 'deep',
    categoriesTransform: categories => categories,

    include: ['**/*.md'],
    exclude: ['**/*.snippet.md']
  },
  {
    type: 'doc',
    dir: 'wiki',
    linkPrefix: '/wiki/',
    title: '听筒百科',
    sidebar: 'auto'
  },
])
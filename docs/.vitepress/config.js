import { defineConfig } from "vitepress"

export default defineConfig({
    lang: "zh-CN",
    title: 'fvfvgb Blog',
    description: "fvfvgb的博客",
    lastUpdated: true,
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/index' },
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/fvfvgb' },
        ],
        footer: {
            message: 'fvfvgb Blog Website',
            copyright: 'Copyright © 2022-present fvfvgb'
        },
        lastUpdatedText: "上次更新时间",
    }
})
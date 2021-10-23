const cdnSettings = {
    dist: {
        externals: {
            'vue': 'Vue',
            'vuex': 'Vuex',
            'vue-router': 'VueRouter',
            'element-plus': 'ELEMENT',
            'axios': 'axios',
        },
        css: [
            'https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.24/dist/index.css',
            'https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css',
        ],
        js: [
            'https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.24/dist/index.full.min.js',
            'https://cdn.jsdelivr.net/npm/vue@3.2.19/dist/vue.global.min.js',
            'https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.min.js',
            'https://cdn.jsdelivr.net/npm/vue-router@4.0.11/dist/vue-router.global.min.js',
            'https://cdn.jsdelivr.net/npm/axios@0.23.0/dist/axios.min.js'
        ]
    }
}

module.exports = {
    publicPath: "/",
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            if (process.env.NODE_ENV === 'production') {
                args[0].cdn = cdnSettings.dist
            }
            return args
        })
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.externals = cdnSettings.dist.externals
        } else {
            config.externals = {}
        }
    }
}
<template>
<pro-layout v-model:collapsed="state.collapsed" 
            v-model:selectedKeys="state.selectedKeys" 
            v-model:openKeys="state.openKeys" 
            v-bind="config"
            :menu-data="menuData"
            :breadcrumb="{ routes: breadcrumb }"
            iconfont-url="//at.alicdn.com/t/font_3158751_htu8zfg5h2g.js">
    
    <template #menuHeaderRender>
        <router-link :to="{ path: '/' }">
            <img title="logo" src="https://v3.cn.vuejs.org/logo.png" />
            <h1>个人主页</h1>
        </router-link>
    </template>

    <template #rightContentRender>
        <!-- TEST -->
    </template>

    <template #breadcrumbRender="{ route, params, routes }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
            {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="{ path: route.path, params }">
            {{ route.breadcrumbName }}
        </router-link>
    </template>

    <template #menuFooterRender>
        <!-- TEST -->
    </template>
    
    <router-view v-slot="{ Component }">
        <transition>
            <component :is="Component" />
        </transition>
    </router-view>

</pro-layout>
</template>

<script setup lang="ts">
import { clearMenuItem, getMenuData } from '@ant-design-vue/pro-layout';
import { computed, reactive, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const { menuData } = getMenuData(clearMenuItem(router.getRoutes()))

const state = reactive({
    collapsed: true,
    selectedKeys: [] as string[],
    openKeys: [] as string[]
})

const config = reactive({
    layout: 'side',
    headerHeight: 65,

    // 侧边栏选项
    navTheme: 'light',
    fixSiderbar: true,
    splitMenus: false,

    // 顶栏选项
    headerTheme: 'light',
    fixedHeader: true,
})

const breadcrumb = computed(() => 
    router.currentRoute.value.matched.concat().map(item => {
        return {
            path: item.path,
            breadcrumbName: item.meta.title || ''
        }
    })
)

watchEffect(() => {
    if (router.currentRoute) {
        const matched = router.currentRoute.value.matched.concat()
        state.selectedKeys = matched
            .filter(r => r.name !== 'index')
            .map(r => r.path);
        state.openKeys = matched
            .filter(r => r.path !== router.currentRoute.value.path)
            .map(r => r.path)
    }
})
</script>
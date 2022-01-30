<template>
<div class="page-home">
    <img title="logo" src="https://v3.cn.vuejs.org/logo.png">
    <hello-world :msg="message" />
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from '~/components/HelloWorld.vue';

const message = ref('Hello Vue 3 + TypeScript + Vite')
</script>

<style scoped>
.page-home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
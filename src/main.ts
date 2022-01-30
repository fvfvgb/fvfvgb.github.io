import { createApp } from "vue"

import App from '~/App.vue'
import VueRouter from '~/router'
import PiniaStore from '~/store'

import 'ant-design-vue/es/modal/style'
import 'ant-design-vue/es/message/style'
import 'ant-design-vue/es/notification/style'

import { ConfigProvider } from "ant-design-vue"
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout'
import '@ant-design-vue/pro-layout/dist/style.less'

const app = createApp(App)

app.use(VueRouter)
app.use(PiniaStore)
app.use(ConfigProvider)
app.use(ProLayout)
app.use(PageContainer)

app.mount('#app')

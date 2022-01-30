import path from 'path'
import { defineConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
import AutoImportPlugin from 'unplugin-auto-import/vite'
import ComponentsPlugin from 'unplugin-vue-components/vite'
import OptimizationPlugin from 'vite-plugin-optimize-persist'
import PackageConfigPlugin from 'vite-plugin-package-config'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            hack: `true; @import 'ant-design-vue/es/style/themes/default.less'`,
          }
        }
      }
    },
    plugins: [
      VuePlugin(),
      OptimizationPlugin(),
      PackageConfigPlugin(),
      AutoImportPlugin({
        dts: 'src/auto-imports.d.ts',
        imports: ['vue', 'vue-router', 'pinia']
      }),
      ComponentsPlugin({
        dts: 'src/components.d.ts',
        deep: true,
        dirs: ['src/components', 'src/layouts', 'src/views'],
        extensions: ['vue', 'tsx'],
        resolvers: [
          AntDesignVueResolver({importStyle: 'less'})
        ]
      }),
    ],
  }
})

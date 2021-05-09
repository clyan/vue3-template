import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteMockServe from './plugins/vite-plugin-mock';
// import autoprefixer from 'autoprefixer';
// import {vueI18n} from '@intlify/vite-plugin-vue-i18n'
import vueI19n from './plugins/vite-plugin-vue-v19n'
import path from 'path'
import vitePluginVirtualFile from './plugins/vite-plugin-virtual-file'
import vitePluginLifycle from './plugins/vite-plugin-lifycle'
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      '@': path.resolve(__dirname, 'src'),
      'comp': path.resolve(__dirname, 'src/components'),
      'views': path.resolve(__dirname, 'src/views'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'plugins': path.resolve(__dirname, 'src/plugins'),
      'layouts': path.resolve(__dirname, 'src/layouts'),
      'utils': path.resolve(__dirname, 'src/utils'),
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      mockPath: 'mock',
      supportTs: false,
    }),
    vitePluginVirtualFile(),
    vitePluginLifycle(),
    // vueI18n({
    //   include: path.resolve(__dirname, './src/locales/**')
    // })
    vueI19n
  ]
})

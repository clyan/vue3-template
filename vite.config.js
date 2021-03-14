import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path'
import vitePluginVirtualFile from './plugins/vite-plugin-virtual-file'
import vitePluginLifycle from './plugins/vite-plugin-lifycle'
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
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
   vitePluginLifycle()]
})

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import 'styles/index.scss';
import { createI18n } from 'vue-i18n'
// import messages from '@intlify/vite-plugin-vue-i18n/messages'
// const i18n = createI18n({
//     legacy:false,
//     locale: 'en',
//     messages
//   })
  
import Element3 from 'plugins/element3';
// 自定义插件处理虚拟包
import { msg } from '@my-virtual-file';

const app = createApp(App)

app.component('button-counter', {
    data() {
      return {
        count: 0
      }
    },
    template: `
      <button @click="count++">
        You clicked me {{ count }} times.
      </button>`
})
app.use(router).use(store).use(Element3);
app.mount('#app')
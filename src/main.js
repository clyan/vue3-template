import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import 'styles/index.scss';
import Element3 from 'plugins/element3';
// 自定义插件处理虚拟包
import { msg } from '@my-virtual-file'
console.log(msg)
const app = createApp(App)
            .use(router)
            .use(store)
            .use(Element3)
            .mount('#app')

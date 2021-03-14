import { createRouter,createWebHashHistory} from 'vue-router';
import Layout from 'layouts/index.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path:'/',
            component:Layout,
            children:[
                {
                    path:"/", component: () => import('views/home.vue') 
                }
            ]
        }
    ]
})
export default router
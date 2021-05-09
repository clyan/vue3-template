import axios from 'axios';
import { Message, Msgbox } from 'element3';
import store from '@/store';
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000,
})
service.interceptors.request.use((config) => {
    config.headers['X-token'] = 'my token';
    return config;
}, (error) => {
    return Promise.reject(error);
})  

service.interceptors.response.use((response) => {
    const res = response.data;
    if(res.code !== 20000) {
        Message.error({
            message: res.message || 'Error',
            duration: 5 * 1000,
        })
        if(res.code === 50008 || res.code === 50012 || res.code === 50014) {
            Msgbox.confirm('您已登出，请重新登录', '确定', {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(()=> {
                store.dispatch('user/resetToken').then(()=> {
                    location.reload();
                })
            })
        }
        return Promise.reject(new Error(res.message || 'Error'));
    } else {
        return res;
    }
}, (error) => {
    Message.error({
        message: error || 'Error',
        duration: 5 * 1000,
    });
    return Promise.reject(error);
})  
export default service;
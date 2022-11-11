import axios from 'axios'
import Vue from "vue";
import router from "@/router/index";

const instance = axios.create({
    // 开发环境和生产环境的地址
    // 生产环境只需要带绝对路径就可以访问
    baseURL: process.env.VUE_APP_API_URL || '/admin/api',
    timeout: 5000
})


instance.interceptors.request.use((config) => {
    if (localStorage.token) config.headers.Authorization = `Bearer ${localStorage.token}`
    return config;
}, (err) => {
    return Promise.reject(err);
});

instance.interceptors.response.use((res) => {
    return res;
}, (err) => {
    if (err.response.data.message) {
        Vue.prototype.$message({
            type: 'error',
            message: err.response.data.message
        })
    }
    if (err.response.status === 401) {
        router.push('/login')
    }
    return Promise.reject(err);
});

export default instance
import axios from 'axios'
import Vue from "vue";

const instance = axios.create({
    baseURL: 'http://localhost:3000/admin/api',
    timeout: 5000
})


instance.interceptors.request.use((config) => {
    return config;
}, (err) => {
    return Promise.reject(err);
});

instance.interceptors.response.use((res) => {
    return res;
}, (err) => {
    if (err.response.data.message) Vue.prototype.$message({
        type: 'error',
        message: err.response.data.message
    })
    return Promise.reject(err);
});

export default instance
import axios from 'axios'
 
   
 
// import { Loading,Message } from 'element-ui'

// // 添加请求拦截器

// let loading;
// function startLoading() {    //使用Element loading-start 方法
//   loading = Loading.service({
//     lock: true,
//     text: '拼命加载中...',
//     background:'rgba(255,255,255,0)',
//   })
// }
// function endLoading() {    //使用Element loading-close 方法
//   loading.close()
// }


axios.interceptors.request.use(function (config) {
　　// 在发送请求之前做些什么
// startLoading()
// Message('加载中');

// startLoading();
// config.headers['Content-Type']="application/json";
// config.data=JSON.stringify(config.data); 
config.headers.Authorization = window.sessionStorage.getItem('token')
　　return config
}, function (error) {
　　// 对请求错误做些什么
return Promise.reject(error)
});
 
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
　　// 对响应数据做点什么
    // endLoading()
    
    
    // endLoading();
   
　　return response
}, function (error) {
　　// 对响应错误做点什么
　　return Promise.reject(error)
});
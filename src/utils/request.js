import axios from 'axios'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
const http =axios.create({
    baseURL:'http://localhost:3000',
    timeout:60000
})
// http.interceptors.request.use()
http.interceptors.response.use(
    response => {
       
      return response.data.result ||response.data
    },
    err => {
      if(/timeout/.test(err.message))
     {
        Toast('请求超时，请检查网络');
     }
      return Promise.reject(err) // 返回接口返回的错误信息
    }
  )
  // 请求处理
export default http
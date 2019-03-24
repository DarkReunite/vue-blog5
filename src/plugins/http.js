/**
 * @description 封装axios API
 */

"use strict";

import axios from "axios";
import {getStore, setStore, removeStore} from '@/config/localstorage';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//用来处理刷新token后重新请求的自定义变量
axios.defaults.isRetryRequest = false;

let config = {
  baseURL: process.env.VUE_APP_baseURL || process.env.apiUrl || "",
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

function getRefreshToken() {
  let refresh_token = getStore('refresh_token');
  return _axios.post('/refresh_token', {
    refresh_token
  })
}

// 请求拦截器
_axios.interceptors.request.use(
  function (config) {
    
    let token = getStore('token');

    //添加Authorization 字段
    config.headers.Authorization = 'Bearer ' +  token;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 相应拦截器
_axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    switch (error.response.status) {
      case 400:
        alert(error.response.data.msg)
        break;
      case 401: {
        //token过期 ，需要发送刷新token的请求
        let config  = error.config;
        return !config.isRetryRequest &&
          getRefreshToken().then(res => {
            let data = res.data.data;
            //修改flag
            config.isRetryRequest = true;
            //替换过期的token和refresh_token
            setStore('token', data.token);
            setStore('refresh_token', data.refresh_token);
            //修改原请求的token
            config.headers.Authorization = 'Bearer ' + getStore('token');
            //重新请求
            console.log('重新发送请求');

            return axios(config);

          }).catch(function () {
              //刷新token失败只能跳转到登录页重新登录
              //删除token和refresh_token
              removeStore('token');
              removeStore('refresh_token');
              //跳转到登录页
              alert('该操作需要重新登陆！')
              window.location.href = '/login'

          })
      }
      case 404:
        alert("无法连接后端API")
        break;
      // case 406: //refresh_token过期或者不合法，需要重新登录
      //   removeStore('token');
      //   removeStore('refresh_token');
      //   router.replace({
      //     path: '/login'
      //   })
      //   break;
    }
    return Promise.reject(error);
  }
);

export default _axios;

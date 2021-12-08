import type { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import axios from 'axios';
import qs from 'qs';
import { set } from 'lodash-es';

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map();

/**
 * 添加请求
 * @param {Object} config
 */
const addPending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data),
  ].join('&');
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pending.set(url, cancel);
      }
    });
};

/**
 * 移除请求
 * @param {Object} config
 */
const removePending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data),
  ].join('&');
  if (pending.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url);
    cancel(url);
    pending.delete(url);
  }
};

/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
// 可以在路由跳转前清除到全部的未完成的请求
export const clearPending = () => {
  for (const [url, cancel] of pending) {
    cancel(url);
  }
  pending.clear();
};

const showStatus = (status: number) => {
  let message = '';
  switch (status) {
    case 400:
      message = '请求错误(400)';
      break;
    case 401:
      message = '未授权，请重新登录(401)';
      break;
    case 403:
      message = '拒绝访问(403)';
      break;
    case 404:
      message = '请求出错(404)';
      break;
    case 408:
      message = '请求超时(408)';
      break;
    case 500:
      message = '服务器错误(500)';
      break;
    case 501:
      message = '服务未实现(501)';
      break;
    case 502:
      message = '网络错误(502)';
      break;
    case 503:
      message = '服务不可用(503)';
      break;
    case 504:
      message = '网络超时(504)';
      break;
    case 505:
      message = 'HTTP版本不受支持(505)';
      break;
    default:
      message = `连接出错(${status})!`;
  }
  return `${message}，请检查网络或联系管理员！`;
};

const service: AxiosInstance = axios.create({
  baseURL: '/',
  // 是否跨站点访问控制请求
  withCredentials: true,
  timeout: 30000,
  // transformRequest: [
  //   (data) => {
  //     const result = JSON.stringify(data);
  //     return result;
  //   },
  // ],
  validateStatus() {
    // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
    return true;
  },
  // transformResponse: [
  //   (data) => {
  //     let result = data;
  //     if (typeof data === 'string' && data.startsWith('{')) {
  //       result = JSON.parse(data);
  //     }
  //     return result;
  //   },
  // ],
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    removePending(config); // 在请求开始前，对之前的请求做检查取消操作
    addPending(config); // 将当前请求添加到 pending 中
    // 获取token，并将其添加至请求头中
    // const token = localStorage.getItem('token');
    const token = 'rocket-admin';
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    set(config, 'headers.rocket-token', token);
    // if (token) {
    //   set(config, 'headers.Authorization', token);
    // }
    return config;
  },
  (error) => {
    // 错误抛到业务代码
    set(error, 'data', {});
    set(error, 'data.msg', '服务器异常，请联系管理员！');
    return Promise.resolve(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('response', response);
    removePending(response); // 在请求结束后，移除本次请求
    const { status } = response;
    let msg = '';
    if (status < 200 || status >= 300) {
      // 处理http错误，抛到业务代码
      msg = showStatus(status);
      if (typeof response.data === 'string') {
        set(response, 'data', { msg });
      } else {
        set(response, 'data', msg);
      }
    }
    return response.data.data;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.log(`repeated request: ${error.message}`);
    } else {
      // handle error code
      // 错误抛到业务代码
      set(error, 'data', {});
      set(error, 'data.msg', '请求超时或服务器异常，请检查网络或联系管理员！');
      console.error(error.data.msg);
    }
    return Promise.reject(error);
  }
);

export type { AxiosInstance } from 'axios';

export default service;

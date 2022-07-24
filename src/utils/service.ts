import axios from "axios";
import { ElLoading } from "element-plus";
const service = axios.create({
  baseURL: "",
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    startLoading();
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    endLoading();
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    endLoading();
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    endLoading();
    return Promise.reject(error);
  }
);

// 请求全局loading
let loadingInstance: { close: () => void };
function startLoading() {
  loadingInstance = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
}

function endLoading() {
  loadingInstance.close();
}

export default service;

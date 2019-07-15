import axios from "axios";
import { Toast } from "antd-mobile";

axios.interceptors.request.use(function(config) {
  // console.log('before')
  Toast.loading("Loading...", 3);
  return config;
});

axios.interceptors.response.use(function(config) {
  // console.log('after')
  Toast.hide();
  return config;
});

export default axios;

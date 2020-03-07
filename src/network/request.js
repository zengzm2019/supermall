import axios from 'axios'
export function request(config) {
  //创建实例
  const instance = axios.create({
    baseURL: "http://xxx:8000/api/wh",
    timeout: 5000
  })
  //拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {})
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {})
  return instance(config)
}

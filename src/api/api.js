
import server from './server';
import url from './serviceAPI.config';

//接口1方法
export function histBanner(data) {
  return server({
    url: url.histBanner,
    method: 'get',
    dataType: "json",
    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
    data: data
  })
}

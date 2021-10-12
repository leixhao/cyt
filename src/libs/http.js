import axios from 'axios'
import { Message } from 'element-ui'
// axios.defaults.withCredentials=true;//让ajax携带cookie
let $http = axios.create({
  //请求host
  baseURL: '/satp-api',
  changeOrigin: true,
  // pathRewrite: {
  //     '^/satp-api': ''
  // },
  headers: {
    "Content-Type": "application/json",
    // 跨过登陆验证
    // "token": 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMTkyQ0JDLUhTMzg0IiwiYWxnIjoiZGlyIn0..emgxZGR2FdI0sDls8PJSRA.Mrssc107SlCMBV9-A931GNz84i17QfrGBLyh22vwxL5ESpFG-eX3ixTnm4VKDTvR8bTNouSO6G4KYfWXVcU7grU2UclfsyJwextbLlNxakwu1LZpIlW8aODVWsYP3rPwNUNIenm1eG7FJZKJoAFbQWk-6ZuPVtst6kuEv-OYym0uGm024PuboMf8ZCKJnWcYLNvzp4nIx49tLufFoh6-rtDXxRqHYhYIoc-C1f7J-80ptCUbCsLK4ZzeOWCErWapJ1JDIXMYLGnmQE9ensuOoTZoopAt32jZ7J0d2lL-SFbmez3N9749g8k8StszS5fmqpVaLXozGpCgRajCfySDkh0QpdiTRNKk6K6_ral213qWDGZJLZgjuEyZJUVZDUc8_SQXqW1FSSGw72EqSk56l2bLsdF03sQ0FqElowdxZdRBQEds1K9vTDsYgvgBdpBb5bGUTcwzevLQsgSVcJUYuFnSrRQtKm__Kq8aBNMIwiXO0inZJ7VbtQxglmtrciM4-yyp72m1AfpgMPe79n8nOtIF_I-eSJm1Mslp--GcmaZJYsDI5Xp2Tic9Ynty0hLSQvTU6IkENaD0OBnEw5bV78-A_GCqjxTRE2zm4wMa7OGGhlbWt_SDeCGGXWOoex-0Zcxc5Me7lloGVQj6Et1qdExVeL74H-ipgbj0KzyGlffIGfsWQ60TiiY6IG7jGaXWqv4UAIIT2Q7w86mPoki6tw.cv_tozNdHbz5RHm9i1_FYBC5y6r5btwT'
  }
})

//http request 拦截器
$http.interceptors.request.use(
  request => {
    //请求前操作写在这里
    return request
  }, error => {
    return Promise.reject(error)
  }
);

//http response 拦截器
$http.interceptors.response.use(
  response => {
    if (['JSON/MENU.json', 'user/getUser', 'user/logout', 'spa-dtgn-dataset-excel-export', 'spa-dtgn-dispatch-task-log-export'].some(url => {
      return response.config.url.includes(url);
    })) {
      return response;
    }


    if (response.status == 200) {

      return response.data
    } else {    // 非200
      Message.error(response.data.spaMessage);
      throw new Error(response.data.spaMessage);
    }

  },
  error => {
    Message.error('请求出错');
    const statusCode = error.response.status;
    const data = error.response.data;
    if (statusCode === 401) {
      console.log(`${data.service}${document.location.origin}${data.redirect}${document.location.href}`);
      location.href = `${data.service}${document.location.origin}${data.redirect}${document.location.href}`;
    }
    return Promise.reject(error.response)
  }
);


export default $http
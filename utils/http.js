import {
      config
} from '../config.js'
export class HTTP {
      request(params) {
            if (!params.method) {
                  params.method = "GET"
            }
            wx.request({
                  url: `${config.api_base_url}${params.url}`,
                  method: params.method,
                  data: params.data,
                  header: {
                        'content-typs': 'application/json',
                        'appkey': config.appkey
                  },
                  success: (res) => {
                        let code = res.statusCode.toString()
                        if (code.startsWith('2')) {
                              params.success && params.success(res.data)
                        }
                  },
                  fail: error => {

                  }
            })
      }
}
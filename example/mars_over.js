/**
 * 火星漫游车请求DEMO
 * 请将AccessKeyId ,AccessKeySecret 替换成自己的
 */

const Request = require("../tools/Request")
const request = new Request({
    AccessKeyId: "5ceffbb0abbe632b648316c6",
    AccessKeySecret: "91df9d44659ae913d7ce6ddaa2f96e5b",
    ServerAddress: "https://account.getlove.cn/apiGetWay/5c889fded32e2a105ab0aaf3"
})

request.http({
    url: "/api/mars/rover/curiosity",
    method:"GET",
    params:{
        earthDate:"2019-01-01"
    }
}).then(function (response) {
    console.log(response.data)
}).catch(function (err) {
    console.log(err)
})
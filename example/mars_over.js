/**
 * 火星漫游车请求DEMO
 * 请将AccessKeyId ,AccessKeySecret,ServerAddress 替换成自己的
 */

const Request = require("../tools/Request")
const request = new Request({
    AccessKeyId: "5b010b6c45657b2b64ada7a1",
    AccessKeySecret: "0283f49d819b7679a80cb47353de8671",
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
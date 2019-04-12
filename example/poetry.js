/**
 * 诗词接口请求DEMO
 * 请将AccessKeyId ,AccessKeySecret,ServerAddress 替换成自己的
 */


const Request = require("../tools/Request")

const request = new Request({
    AccessKeyId: "5b010b6c45657b2b64ada7a1",
    AccessKeySecret: "0283f49d819b7679a80cb47353de8671",
    ServerAddress: "https://account.getlove.cn/apiGetWay/5b010c7445657b2b64ada7a2"
})

request.http({
    url: "/api/v1/poetry/search",
    method: "GET",
    params: {
        keywords: "李白",
        type: "author",
        page: "1"
    }
}).then(function (response) {
    console.log(response.data)
})
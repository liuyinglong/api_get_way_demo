/**
 * 诗词接口请求DEMO
 * 请将AccessKeyId ,AccessKeySecret 替换成自己的
 */


const Request = require("../tools/Request")

const request = new Request({
    AccessKeyId: "5ceffbb0abbe632b648316c6",
    AccessKeySecret: "91df9d44659ae913d7ce6ddaa2f96e5b",
    ServerAddress: "https://account.getlove.cn/apiGetWay/5b010c7445657b2b64ada7a2"
})

request.http({
    url: "/api/v1/poetry/search",
    method: "GET",
    params: {
        keywords: "李白",
        type: "author",
        size:2,
        page: 1
    }
}).then(function (response) {
    // console.log(response)
    console.log("------返回值--------")
    console.log(response.data)
})
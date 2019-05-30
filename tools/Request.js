const ApiGetWay = require("./ApiGetwaySign")
const axios = require("axios")


module.exports = class Request {
    constructor({AccessKeyId, AccessKeySecret, ServerAddress}) {
        this.ServerAddress = ServerAddress
        this._apiGetWay = new ApiGetWay({AccessKeyId, AccessKeySecret})
    }

    /**
     *
     * @param options
     * @returns Promise
     */
    http(options) {
        const method = options.method || "GET"
        const params = options.params || {}
        const data = options.data || {}

        const body = Object.assign({}, params, data)



        const signQuery = this._apiGetWay.sign({
            method,
            body,
            path: options.url
        })

        switch (method.toLocaleUpperCase()) {
            case "GET":
                options.params = signQuery
                break
            case "POST":
                options.data = signQuery
                break
        }
        options.url=this.ServerAddress+options.url
        return axios(options)
    }
}



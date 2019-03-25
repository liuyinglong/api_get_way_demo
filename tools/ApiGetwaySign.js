/**
 * create by focus on 2018/5/29 10:05
 */

let crypto = require("crypto");
let ApiGetwaySign = function ({AccessKeyId, AccessKeySecret}) {
    this.AccessKeyId = AccessKeyId;
    this.AccessKeySecret = AccessKeySecret;
};

ApiGetwaySign.prototype = {
    /**
     * Obj转为param
     * @param obj
     * @param encode
     * @returns {string}
     */
    objToUrl: function (obj, encode = false) {
        let strAry = [];
        for (let k in obj) {
            if (encode) {
                strAry.push(encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]));
            } else {
                strAry.push(k + "=" + obj[k])
            }
        }
        return strAry.join("&");
    },
    /**
     * @return {string}
     */
    HmacSHA1: function (str, key) {
        let hmac = crypto.createHmac('sha1', key);
        hmac.update(str,"utf8");
        return hmac.digest("hex");
    },
    sign: function ({method, body = {}, query = {}, path}) {
        let date = new Date();
        let commonQuery = {
            AccessKeyId: this.AccessKeyId,
            SignatureNonce: String(date.getTime()),	//随机字符串
            Timestamp: date.toISOString().replace(/\.\d{3}/, '')
        };
        let tempQuery = Object.assign(commonQuery, query, body);
        let signQuery = {};
        Object.keys(tempQuery).sort().forEach(function (k) {
            signQuery[k] = tempQuery[k];
        });

        let str = method.toUpperCase() + "&" + encodeURIComponent(path) + "&" + (this.objToUrl(signQuery, true));
        signQuery.Signature = this.HmacSHA1(str, "&" + this.AccessKeySecret);
        return signQuery;
    }
};

module.exports = ApiGetwaySign;
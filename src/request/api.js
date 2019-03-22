import {
    wxRequest
} from './request';

const globalApi = '#'

/**
 * 获取发现好商品接口
 * @param  {[type]} params  包含请求方式，query参数（query为对象，包含需要传递的参数）
 * @param  {[type]} query   query为对象（包含需要传递的参数）
 * @param  {[type]} id      传递的id参数
 */

//授权
const getToken = (params) => wxRequest(params, globalApi + "api/mp/login", 1);
// 个人信息
const myInfo = () => wxRequest({}, globalApi + "api/my")
// 更新个人信息
const updateMyInfo = (params) => wxRequest(params, globalApi + "api/updateinfo")
// 获取验证码
const getCode = (params) => wxRequest(params, globalApi + "sms/verify-code")
// 验证验证码
const verifyCode = (params) => wxRequest(params, globalApi + "api/verify_xcx")

export default {
    getToken,
    myInfo,
    updateMyInfo,
    getCode,
    verifyCode,
}

import ajax from "./ajax"

//通过mock获得推荐信息
export const reqCatelist = () => ajax('/catelist')

//退货，退款
export const reqPolicydesclist = () => ajax('/policydesclist')

//居家鞋包服装10个
export const reqKingkongmodule = () => ajax('/kingkongmodule')

// 四个爱吃社
export const reqShopping = () => ajax('/shopping')

//新品首发 大米 牛奶
export const reqNewitemlist = () => ajax('/newitemlist')

//限时
export const reqBigpromotion = () => ajax('/bigpromotion')

//第二页分类
export const reqCategory = () => ajax('/category')

//三轮播
export const reqPersonal = () => ajax('/personal')

//识物 推究

export const reqGeneralThings = () =>ajax('/topic/v1/find/getTabs.json')

//识物的列表
export const reqGetTabs = () => ajax('/topic/v1/find/recManual.json')

//更新识物内容
const data = 2;
export const reqGeneralThingList = (data) => ajax(`/topic/v1/find/recAuto.json?page=${data}&size=5&exceptIds=5507,5286,4746,4745,5213,5252,518,5446,5288,4037,4035,4210,5339,4635,4640,3583,3860,4040,3438,4648,4489,4364,4513,2747,3882,4168,3773`)

const HTTP = "/api"

//获取一次性短信验证码
export const reqSendCode = (phone) => ajax(HTTP + '/sendcode',{phone})

//短信验证码登录
export const reqSmsLogin = (phone,code) => ajax(HTTP + '/login_sms',{phone,code},'POST')

//账号密码登录
export const reqPwdLogin =({name,pwd,captcha}) => ajax(HTTP+'/login_pwd',{name,pwd,captcha},'POST')


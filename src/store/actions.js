/*包含多个action的对象*/
import {
  reqKingkongmodule,
  reqNewitemlist,
  reqBigpromotion,
  reqPersonal,
  reqCategory,
  reqGeneralThings,
  reqGetTabs,
  reqGeneralThingList
} from "../api"

import {
  RECEIVE_KINGKONGMODULE,
  RECEIVE_NEWITEMLIST,
  RECEIVE_BIGPROMOTION,
  RECEIVE_PERSONAL,
  RECEIVE_CATEGORY,
  RECEIVE_GENERALTHINGS,
  RECEIVE_GETTABS,
  RECEIVE_GENERALTHINGLIST
} from "./action-types"  //每个action 对应一个同步的action

const kingkongmodule = (kingkongs) => ({type:RECEIVE_KINGKONGMODULE,data:kingkongs})
const bigpromotions = (bigpromotion) => ({type:RECEIVE_BIGPROMOTION,data:bigpromotion})
const personalist = (personal) => ({type:RECEIVE_PERSONAL,data:personal})
const newitemlist = (newitem) => ({type:RECEIVE_NEWITEMLIST,data:newitem})
const categorys = (category) => ({type:RECEIVE_CATEGORY,data:category})
const generalThings = (generalThing) => ({type:RECEIVE_GENERALTHINGS,data:generalThing})
const Tablist = (tabs) => ({type:RECEIVE_GETTABS,data:tabs})
const thinglists = (thinglist) => ({type:RECEIVE_GENERALTHINGLIST,data:thinglist})

//居家鞋包服装10个
export function getkingkong(fn) {
  return async dispatch => {
    //1.发送异步的ajax请求
    const result = await reqKingkongmodule()
    //2.根据结果分发对应的同步action
    if(result.code===0){
      //成功
      const kingkongs = result.data
       dispatch(kingkongmodule(kingkongs))
       typeof fn==='function' && fn()
    }else {
      //失败
      console.log("发送失败")
    }
  }
}

export function getbigpromotion() {
  return async dispatch => {
    const result =await  reqBigpromotion()
    if(result.code===0){
      const bigpromotion = result.data
      dispatch(bigpromotions(bigpromotion))
    }else {
      console.log("发送失败")
    }
  }
}

export function getpersonal(fn) {
  return async dispatch =>{
    const result = await reqPersonal()
    if(result.code===0){
      const personal = result.data
      dispatch(personalist(personal))
      typeof fn === "function" && fn()
    }else {
      console.log("发送失败")
    }
  }
}

export function getnewitemlist() {
  return async dispatch =>{
    const result = await reqNewitemlist()
    if(result.code===0){
      const newitem = result.data
      dispatch(newitemlist(newitem))
    }else {
      console.log("发送失败")
    }
  }
}

export function getcategory(fn) {
  return async dispatch =>{
    const result = await reqCategory()
    if(result.code===0){
      const category = result.data
      dispatch(categorys(category))
      typeof fn ==="function" && fn()
    }else {
      console.log("发送失败")
    }
  }
}

export function getgeneralThings() {
  return async dispatch =>{
    const rusult =await reqGeneralThings()
    if(rusult.code==='200'){
      const generalThing = rusult.data
      dispatch(generalThings(generalThing))
    }else {
      console.log("发送失败")
    }
  }
}

export function getTabs(fn) {
  return async  dispatch => {
    const result =await reqGetTabs()
    if(result.code==='200'){
     const tabs = result.data
      dispatch(Tablist(tabs))
      typeof fn === "function" && fn()
    }else {
      console.log("发送失败")
    }
  }
}

export function generalthinglist (fn,data){
  return async dispatch =>{
    console.log("ss",data)
    const result = await reqGeneralThingList(data)
    if(result.code==='200'){
      const thinglist = result.data.result
      dispatch(thinglists(thinglist))
      typeof fn === "function" && fn()
    }else {
      console.log("发送失败")
    }
  }
}

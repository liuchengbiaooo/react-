/*
包含多个用于生成新的state的reducer函数的模块
*/
import {combineReducers} from "redux"

import {
  RECEIVE_KINGKONGMODULE,
  RECEIVE_NEWITEMLIST,
  RECEIVE_BIGPROMOTION,
  RECEIVE_PERSONAL,
  RECEIVE_CATEGORY,
  RECEIVE_GENERALTHINGS,
  RECEIVE_GETTABS,
  RECEIVE_GENERALTHINGLIST
} from "./action-types"

const kingkongs = {}
function kingkong(state=kingkongs,action) {
  switch (action.type){
    case RECEIVE_KINGKONGMODULE:
      const kingkongs = action.data
      return kingkongs
    default:
      return state
  }
}

const bigpromotion = {}
function bigpromotions(state=bigpromotion,action) {
  switch (action.type){
    case RECEIVE_BIGPROMOTION:
      const bigpromotion = action.data
      return bigpromotion
    default:
      return state
  }
}

const personal = []
function personals(state=personal,action) {
  switch (action.type){
    case RECEIVE_PERSONAL:
      const personal = action.data
      return personal
    default:
      return state
  }
}

const newitem = []
function newitemlist(state=newitem,action){
  switch (action.type){
    case RECEIVE_NEWITEMLIST:
      const newitem = action.data
      return newitem
    default:
      return state
  }
}

const category=[]
function categorys(state=category,action) {
  switch (action.type){
    case RECEIVE_CATEGORY:
      const category = action.data
      return category
    default:
      return state
  }
}

const generalThing=[]
function generalThings(state=generalThing,action){
   switch (action.type){
     case RECEIVE_GENERALTHINGS:
       const generalThing = action.data
       return generalThing
     default:
       return state
   }
}

const tabs =[]
function Tablist(state=tabs,action) {
  switch (action.type){
    case RECEIVE_GETTABS:
      const tabs = action.data
      return tabs
    default:
      return state
  }
}

const thinglist=[]
function thinglists(state=thinglist,action) {
  switch (action.type){
    case RECEIVE_GENERALTHINGLIST:
      const thinglist = action.data
      return thinglist
    default:
      return state
  }
}

/*向外暴露是整合后的reducer产生的新的reducer*/
export default combineReducers({
  kingkong,
  bigpromotions,
  personals,
  newitemlist,
  categorys,
  generalThings,
  Tablist,
  thinglists
})
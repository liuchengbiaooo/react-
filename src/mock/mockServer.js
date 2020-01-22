import Mock from "mockjs"
import apiData from "./msite.json"
import apiCate from "./category.json"

Mock.mock('/catelist',{code:0,data:apiData.cateList})

Mock.mock('/policydesclist',{code:0,data:apiData.policyDescList})

Mock.mock('/kingkongmodule',{code:0,data:apiData.kingKongModule})

Mock.mock('/shopping',{code:0,data:apiData.sceneLightShoppingGuideModule})

Mock.mock('/newitemlist',{code:0,data:apiData.newItemList})

Mock.mock('/bigpromotion',{code:0,data:apiData.flashSaleModule})

Mock.mock('/personal',{code:0,data:apiData.personalTailorModule})

Mock.mock('/category',{code:0,data:apiCate})


console.log("执行Mock")

import React, {Component} from "react"
import "./GouWuChe.styl"
export default class GouWuChe extends Component {
  render() {
    return (
      <div>
        <div className="wrap">
        <span className="wrapleft">
          购物车
        </span>
          <span className="wrapright">
          领劵
        </span>
        </div>
        <div className="app">
          <div className="appty">
            <ul className="txt">
              <li className="item">30天无忧退货</li>
              <li className="item">48小时快速退款</li>
              <li className="item">满88元免邮费</li>
            </ul>
          </div>
          <div className="shopping">
            <img/>
            <span className="go">去添加点什么吧</span>
          </div>
          <div className="login">
            登录
          </div>
        </div>
      </div>
    )
  }
}
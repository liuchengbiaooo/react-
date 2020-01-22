import React, {Component} from "react"
import "./GeRen.styl"

export default class GeRen extends Component {
  handleClick = (path) => {
    this.props.history.replace(path)
  }

  render() {
    return (
      <div>
        <div className="row">
          <a className="u-icon u-icon-home" onClick={() => this.handleClick('/shouye')}>
          </a>
          <a className="logo u-icon u-icon-logo"></a>
          <div className="right">
      <span className="search">
        <i className="u-icon u-icon-searchl"></i>
      </span>
            <span className="cart">
        <i className="u-icon u-icon-cart"></i>
      </span>
          </div>
        </div>
        <div className="wrap">
          <div className="logowrap">
            <div className="login">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
            </div>
          </div>
          <div className="btnWrap">
            <div className="button">
              <i className="icon"></i>
              <span className="txt">手机号码登录</span>
            </div>
            <div className="button" id="to">
              <i id="togo"></i>
              <span className="txt" id="todo">短信验证登录</span>
            </div>
            <div className="btn">
              <span className="zhuce">手机号快捷注册</span>
              <i className="tupan"></i>
            </div>
          </div>
          <div className="thirdWrap">
            <div className="wx">
              <i className="u-pan weixin"></i>
              <span>微信</span>
            </div>
            <div className="wx">
              <i className="u-pan qq"></i>
              <span>QQ</span>
            </div>
            <div className="wx">
              <i className="u-pan weibo"></i>
              <span>微博</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
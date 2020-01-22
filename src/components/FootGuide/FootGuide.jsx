import React, {Component} from 'react'
import './foot-guide.styl'
import {withRouter} from 'react-router-dom'

class FootGuide extends Component {

  handleClick = (path) => {
    // 跳转到指定的路由路径
    this.props.history.replace(path)
  }

  render() {
    const path = this.props.location.pathname
    return (
      <footer className="footer_guide border-1px">
        <span className={path==='/shouye' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/shouye')}>
          <span className="item_icon">
            <i className="icon icon_home"></i>
          </span>
          <span>首页</span>
        </span>
        <span className={path==='/fenlei' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/fenlei')}>
          <span className="item_icon">
            <i className="icon icon_classify"></i>
          </span>
          <span>分类</span>
        </span>
        <span className={path==='/shiwu' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/shiwu')}>
          <span className="item_icon">
            <i className="icon icon_topic"></i>
          </span>
          <span>识物</span>
        </span>
        <span className={path==='/gouwuche' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/gouwuche')}>
          <span className="item_icon">
            <i className="icon icon_shopcart"></i>
          </span>
          <span>购物车</span>
        </span>
        <span className={path==='/geren' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/geren')}>
          <span className="item_icon">
            <i className="icon icon_login"></i>
          </span>
          <span>我的</span>
        </span>
      </footer>
    )
  }
}

export default withRouter(FootGuide)
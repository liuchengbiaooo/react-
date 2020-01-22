import React, {Component} from "react"
import "./ShouYeHeader.styl"
import {connect} from "react-redux"
import {
  getkingkong
} from "../../store/actions"
import BScroll from "better-scroll"

class ShouYeHeader extends Component {
  componentDidMount() {
    this.props.getkingkong(()=>{
       new BScroll(".inner",{
         click:true,
         scrollX:true  //水平滑动
       })
    })
  }

  render() {
    const kingkongs = this.props.kingkongs.kingKongList
    return (
      <div className="g-row">
        <div className="m-indexHd">
          <div className="line">
            <a href="#" className="logo"></a>
            <div className="m-topSearchIpt ipt">
              <i className="icon"></i>
              <span className="placeholder">
                搜索商品, 共19915款好物
              </span>
            </div>
            <div className="loginBtn">登录</div>
          </div>
          <div className="tabWrap">
            <div className="m-tabs scroll">
              <header>
                <div className="inner">
                  <div className="list">
                    {
                      kingkongs ?
                        kingkongs.map((kingkong, index) => {
                          return (
                            <div className="tab" key={index}> {/*active*/}
                                 <span className="txt">
                                   {kingkong.text}
                                 </span>
                            </div>
                          )
                        }) :null
                    }
                  </div>
                </div>
              </header>
            </div>
            <div className="toggleWrap">
              <div className="linear"></div>
              <div className="toggle">
                <div className="icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    kingkongs: state.kingkong
  }),
  {getkingkong}
)(ShouYeHeader)
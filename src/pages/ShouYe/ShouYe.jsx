import React, {Component} from "react"
import ShouYeHeader from "../../components/ShouYeHeader/ShouYeHeader"
import Swiper from "swiper"
import "./ShouYe.styl"
import {connect} from "react-redux"
import {
  getbigpromotion,
  getnewitemlist,
  getpersonal
} from "../../store/actions"

class ShouYe extends Component {
  componentDidMount() {
    this.props.getnewitemlist();
    this.props.getbigpromotion();
    this.props.getpersonal(()=>{
      new Swiper('#swiper1', {
        //direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 3000, //循环时间
        }
      })
    })
  }

  render() {
    const itemList = this.props.bigpromotion.itemList
    const {personal, newitem} = this.props
    const kingkong = this.props.kingkongs.kingKongList
    return (
      <div>
        <ShouYeHeader/>
        <div className="swiper-container" id="swiper1">
           <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/850c005113e5becbfd98d797b8a2101a.jpg?imageView&quality=75&thumbnail=750x0"/>
            </div>
            <div className="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/1d66a50452354fa28b045853c078cbe3.jpg?imageView&quality=75&thumbnail=750x0"/>
            </div>
            <div className="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/e0c3e253dcfdb170bda823ac5b71247e.jpg?imageView&quality=75&thumbnail=750x0"/>
            </div>
            <div className="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/850c005113e5becbfd98d797b8a2101a.jpg?imageView&quality=75&thumbnail=750x0"/>
            </div>
            <div className="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/fda101d5e6beeb56d0ff8245139ff30b.jpg?imageView&quality=75&thumbnail=750x0"/>
            </div>
            <div className="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/018b7902a3fb1e48dbdd8b7bb42674aa.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YTRhMmIzYmI1Y2I1YTc4ZGM5MmE3Nzk2NzAwYTFiNjgucG5n|imageView&quality=75&thumbnail=750x0"/>
            </div>
            <div className="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/5a2289149a59ca24ef2256674542e4cb.jpg?imageView&quality=75&thumbnail=750x0"/>
            </div>
          </div>
           <div className="swiper-pagination"></div>

           <div className="swiper-scrollbar"></div>
        </div>
        <div className="m-indexServicePolicy active">
          <ul className="g-grow">
            <li className="item">
              <a>
                <i className="u-icon u-icon-servicePolicy-index"
                   style={{backgroundImage: 'url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)'}}></i>
                <span className="text">
                网易自营品牌
               </span>
              </a>
            </li>
            <li className="item">
              <a>
                <i className="u-icon u-icon-servicePolicy-index"
                   style={{backgroundImage: 'url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)'}}></i>
                <span className="text">
                30天无忧退货
            </span>
              </a>
            </li>
            <li className="item">
              <a>
                <i className="u-icon u-icon-servicePolicy-index"
                   style={{backgroundImage: 'url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)'}}></i>
                <span className="text">
                48小时快速退款
            </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="wrapper">
            {
              kingkong ?
                kingkong.map((item,index)=>{
                  return(
                    <div className="list" key={index}>
                      <div className="icon">
                        <img src={item.picUrl}/>
                      </div>
                      <span className="txt">{item.text}</span>
                    </div>
                  )
                })
                :null
            }
          </div>
        </div>
        <div className="m-lazyload img m-lazyload-loaded">
          <img className="swiper-lazy" src="https://yanxuan.nosdn.127.net/15435895031254332.gif"/>
        </div>
        <div className="onimg">
          <div>
            <img src="https://yanxuan.nosdn.127.net/15439062209423716.png"/>
            <img src="https://yanxuan.nosdn.127.net/15439062418853717.png"/>
          </div>
        </div>
        <div className="onimg">
          <div>
            <img src="https://yanxuan.nosdn.127.net/15438948939222563.png"/>
            <img src="https://yanxuan.nosdn.127.net/15439062784443718.png"/>
          </div>
        </div>
        <div className="m-bossRecommendModule active">
          <img src="https://yanxuan.nosdn.127.net/b36b6e2c6132b5980c047005f7520795.png"/>
        </div>
        <div className="m-sceneLightShoppingGuideModule active">
          <div>
            <a className="m-styleBanner">
              <div className="title">
                12.12爱吃福利社
              </div>
              <div className="desc">
                暖冬美食荟萃
              </div>
              <div className="picList">
                <img className="pic" src="http://yanxuan.nosdn.127.net/c24d528dfc4c043cad7cdb560d2b7764.png"/>
                <img className="pic" src="http://yanxuan.nosdn.127.net/d36dc48ac4456816e60f1592f02e034d.png"/>
              </div>
            </a>
          </div>
          <div>
            <a className="m-styleBanner">
              <div className="title">
                12.12爱吃福利社
              </div>
              <div className="desc">
                暖冬美食荟萃
              </div>
              <div className="picList">
                <img className="pic" src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png"/>
                <img className="pic" src="http://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png"/>
              </div>
            </a>
          </div>
          <div>
            <a className="m-styleBanner">
              <div className="title">
                12.12爱吃福利社
              </div>
              <div className="desc">
                暖冬美食荟萃
              </div>
              <div className="picList">
                <img className="pic" src="http://yanxuan.nosdn.127.net/71536ef8ebef1a6bb8ba88b2b8107b85.png"/>
                <img className="pic" src="http://yanxuan.nosdn.127.net/abf8da82c5363f6b31bfdc2de8caa496.png"/>
              </div>
            </a>
          </div>
          <div>
            <a className="m-styleBanner">
              <div className="title">
                12.12爱吃福利社
              </div>
              <div className="desc">
                暖冬美食荟萃
              </div>
              <div className="picList">
                <img className="pic" src="http://yanxuan.nosdn.127.net/855a0c57ab058ee6c41c1b11a6e594d4.png"/>
                <img className="pic" src="http://yanxuan.nosdn.127.net/04763003a311710e58da2539bf573949.png"/>
              </div>
            </a>
          </div>
        </div>
        <div className="m-indexFloor">
          <div className="moduleTitle">
            <span>私人订制</span>
          </div>
          <div className="m-carousel ">
            <div className="swiper-container" id="swiper2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  {
                    personal[0] ?
                      personal[0].map((item, index) => {
                        return (
                          <div className="item" key={index}>
                            <img
                              src={item.scenePicUrl}/>
                            <div>
                            <span className="up">
                              {item.name}
                            </span>
                              <span className="down">
                                    ￥{item.counterPrice}
                              </span>
                            </div>
                          </div>
                        )
                      })
                      : null
                  }
                </div>
              {/*  <div className="swiper-slide">
                  {
                    personal[1] ?
                      personal[1].map((item, index) => {
                        return (
                          <div className="item" key={index}>
                            <img
                              src={item.scenePicUrl}/>
                            <div>
                            <span className="up">
                              {item.name}
                            </span>
                              <span className="down">
                                    ￥{item.counterPrice}
                              </span>
                            </div>
                          </div>
                        )
                      })
                      : null
                  }
                </div>
                <div className="swiper-slide">
                  {
                    personal[2] ?
                      personal[2].map((item, index) => {
                        return (
                          <div className="item" key={index}>
                            <img
                              src={item.scenePicUrl}/>
                            <div>
                            <span className="up">
                              {item.name}
                            </span>
                              <span className="down">
                                    ￥{item.counterPrice}
                              </span>
                            </div>
                          </div>
                        )
                      })
                      : null
                  }
                </div>
                <div className="swiper-slide">
                  {
                    personal[3] ?
                      personal[3].map((item, index) => {
                        return (
                          <div className="item" key={index}>
                            <img
                              src={item.scenePicUrl}/>
                            <div>
                            <span className="up">
                              {item.name}
                            </span>
                              <span className="down">
                                    ￥{item.counterPrice}
                              </span>
                            </div>
                          </div>
                        )
                      })
                      : null
                  }
                </div>*/}
              </div>

              <div className="swiper-pagination" id="p2"></div>

              <div className="swiper-scrollbar"></div>
            </div>
          </div>
        </div>
        <div className="m-flashSaleModule m-indexFloor">
          <div className="moduleTitle">
            <div className="left">
              <span>限时购</span>
              <div className="m-countdown ">
                <span className="hours">00</span>
                <span className="colon">:</span>
                <span className="mins">00</span>
                <span className="colon">:</span>
                <span className="secs">00</span>
              </div>
            </div>
            <a href="#" className="right">
              <span>更多</span>
              <i className="icon u-icon u-icon-index-titleArrow"></i>
            </a>
          </div>
          <div>
            <div className="cnt">
              {
                itemList ?
                  itemList.map((item, index) => {
                    return (
                      <a href="#" className="m-indexFlashSaleItem" key={index}>
                        <div className="imgWrap">
                          <img src={item.picUrl}/>
                        </div>
                        <div className="price">
                          <span className="actualPrice">￥{item.originPrice}</span>
                          <span className="retailPrice">{item.activityPrice}</span>
                        </div>
                      </a>
                    )
                  })
                  : null
              }
            </div>
          </div>
        </div>

        <div className="m-newItemModule m-indexFloor">
          <div className="moduleTitle">
            <div className="left">
              <span>新品首发</span>
            </div>
            <a href="#" className="right">
              <span>更多</span>
              <i className="icon u-icon u-icon-index-titleArrow"></i>
            </a>
          </div>
          <div className="m-indexItem m-goodGrid">
            <ul className="list">
              {
                newitem ?
                  newitem.map((item, index) => {
                    return (
                      <li className="item" key={index}>
                        <a href="#" className="good">
                          <div className="hd">
                            <img
                              src={item.scenePicUrl}/>
                          </div>
                          <div className="name">
                            <span>{item.simpleDesc}</span>
                            <span className="mani">￥{item.counterPrice}</span>
                          </div>
                          <div className="tagWraper">
                            <p className="status gradientPrice">{item.promTag}</p>
                          </div>
                        </a>
                      </li>
                    )
                  })
                  : null
              }
            </ul>
          </div>
        </div>

        <div className="m-ft g-row">
          <div>
            <span>下载app</span>
          </div>
          <div>
            电脑版
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    bigpromotion: state.bigpromotions,
    personal: state.personals,
    newitem: state.newitemlist,
    kingkongs: state.kingkong
  }),
  {
    getbigpromotion,
    getnewitemlist,
    getpersonal
  }
)(ShouYe)
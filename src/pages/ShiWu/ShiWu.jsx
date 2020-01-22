import React, {Component} from "react"
import {connect} from "react-redux"
import {
  getgeneralThings,
  getTabs,
  generalthinglist
} from "../../store/actions"
import PersonHeader from "../../components/PersonHeader/PersonHeader"
import "./ShiWu.styl"

import BScroll from "better-scroll"

class ShiWu extends Component {
  componentDidMount() {
    this.props.getgeneralThings();
    this.props.getTabs(() => {
      this.setState({
        ...this.state
      }, () => {
        this.scroll = new BScroll(".content", {
          click: true,
          pullUpLoad: true,
        });
        this.scroll.on('pullingUp', () => {
          let {data} = this.state
          data = data + 1
          this.setState({
            ...this.state,
            data
          });
          this.props.generalthinglist(() => {
            this.scroll.finishPullUp();
            this.scroll.refresh();
          },data)
        })
      })
    });
  }

  state = {
    todoindex: 0,
    data: 1
  };
  todo = (index) => {
    this.setState({
      todoindex: index
    });
  };
  groomList = () => {
    const {tabs, thinglist} = this.props
    var arr = [] //将返回的数据进行整合，放入一个数组里面
    tabs.forEach((general, index) => {
      arr = arr.concat(general.topics)
    });
    thinglist.forEach((generalthing, index) => {
      arr = arr.concat(generalthing.topics)
    });
    return arr
  };

  render() {
    const generalThing = this.props.generalThing;
    const groomList = this.groomList();
    return (
      <div className="APP">
        <PersonHeader></PersonHeader>
        <div className="m-main-tab">
          <ul className="flexbox">
            {
              generalThing ?
                generalThing.map((item, index) => {
                  return (
                    <li className={this.state.todoindex === index ? "text active" : "text"} key={index}
                        onClick={() => this.todo(index)}>
                      {item.tabName}
                    </li>
                  )
                })
                : null
            }
          </ul>
        </div>
        <div className="content">
          <div className="data">
            {
              groomList ?
                groomList.map((groom, index) => {
                  return (
                    <div key={index}>
                      {
                        groom.type === 1 ?
                          (<div className="m-tpls">
                            <div>
                              <div className="info">
                                <div className="u-name">
                                    <span className="ava">
                                      <img src={groom.avatar}/>
                                    </span>
                                  <span>
                                     {groom.nickname}
                                   </span>
                                </div>
                                <div className="title">
                                  {groom.title}
                                </div>
                                <div className="desc">
                                  {groom.subTitle}
                                </div>
                                <div className="u-rcount">
                                  <span>{groom.readCount}人看过</span>
                                </div>
                              </div>
                              <div className="u-pic">
                                <img src={groom.picUrl}/>
                              </div>
                            </div>
                          </div>)
                          :
                          (<div className="m-tpls2">
                            <div className="info2">
                              <div className="u-name">
                                <span className="ava">
                                  <img src={groom.avatar}/>
                                </span>
                                <span>{groom.nickname}</span>
                              </div>
                            </div>
                            <div className="title2">
                              {groom.title}
                            </div>
                            <div className="u-pic2">
                              <img src={groom.picUrl}/>
                            </div>
                            <div className="u-rcount2">
                              <span>
                                {groom.readCount}人看过
                              </span>
                            </div>
                          </div>)
                      }
                    </div>
                  )
                })
                : null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    generalThing: state.generalThings,
    tabs: state.Tablist,
    thinglist: state.thinglists
  }),
  {getgeneralThings, getTabs, generalthinglist}
)(ShiWu)
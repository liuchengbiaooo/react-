import React, {Component} from "react"
import "./FenLei.styl"
import {connect} from "react-redux"
import {getcategory} from "../../store/actions"
import BScroll from "better-scroll"

class FenLei extends Component {
  componentDidMount() {
    this.props.getcategory(()=>{
      new BScroll(".m-cateNavVertWrap",{
        click:true
      });
      new BScroll(".m-subCateList",{
          click:true
        })
    })
  }

  state = {
    todoindex: 0
  }
  todo = (index) => {
    this.setState({
      todoindex: index
    });

  }
  imgs = () => {
    const index = this.state.todoindex
    const category = this.props.category[index]
    return category
  }


  render() {
    const imgList = this.imgs()
    const categorys = this.props.category
    return (
      <div>
        <div className="m-itemCateListHd">
          <div className="m-topSearchIpt ipt">
            <i className="icon"></i>
            <span className="placeholder">搜索商品, 共19971款好物</span>
          </div>
        </div>
        <div>
          <div className="m-cateNavVertWrap">
            <ul className="m-cateNavVert">
              {
                categorys ?
                  categorys.map((item, index) => {
                    return (
                      <li key={index} className={this.state.todoindex === index ? "item active" : "item"}
                          onClick={() => this.todo(index)}> {/*className="item" */}
                        <a href="#" className="txt">
                          {item.name}
                        </a>
                      </li>
                    )
                  })
                  : null
              }
            </ul>
          </div>
          <div className="m-subCateList">
            <div>
                {
                  this.imgs() ?
                    (<div className="banner" style={{backgroundImage:`url('${imgList.wapBannerUrl}')`}}>

                    </div>)
                    :null
                }
                <div className="cnt"></div>
              </div>
            <div className="cateList">
                <ul className="list">
                  {
                    imgList?
                      imgList.subCateList.map((item,index)=>{
                        return(
                          item.categoryList ?
                            (<div className="cateListcao" key={index}>
                                <div className="nima">
                                  {item.name}
                                </div>
                                <div>
                                  <ul className="uls">
                                    {
                                      imgList ?
                                        item.categoryList.map((category,index)=>{
                                          return (
                                            <li className="lis" key={index}>
                                              <div className="dag">
                                                <img src={category.wapBannerUrl}/>
                                              </div>
                                              <div className="name">
                                                {category.name}
                                              </div>
                                            </li>
                                          )
                                        })
                                        :null
                                    }
                                  </ul>
                                </div>
                              </div>
                            )
                            :
                            (<div className="icon" key={index}>
                              <div className="cateImgWrapper">
                                <img src={item.bannerUrl}/>
                              </div>
                              <div className="name">
                                {item.name}
                              </div>
                            </div>)
                        )
                      })
                      :null
                  }






                  {/*



                     <li className="cateItem" v-for="(cate,index) in categorys.subCateList" :key="index">
                    <div className="cateListcao" v-if="cate.categoryList">
                      <div className="nima">{{cate.name}}
                        <ul className="uls">
                          <li className="lis" v-for="(category,index) in cate.categoryList" :key="index">
                            <div className="dag">
                              <img className="mg" :src="category.wapBannerUrl"/>
                            </div>
                            <div className="name">{{category.name}}</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div v-else>
                      <div className="cateImgWrapper">
                        <img :src="cate.bannerUrl"/>
                      </div>
                      <div className="name">{{cate.name}}</div>
                    </div>
                  </li>

                */}


                </ul>
              </div>

          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    category: state.categorys
  }),
  {getcategory}
)(FenLei)
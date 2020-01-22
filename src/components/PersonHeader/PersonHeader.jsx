import React, {Component} from "react"
import "./PersonHeader.styl"
export default class Add extends Component {
  render() {
    return (
      <div className="row">
        <a className="u-icon u-icon-home"></a>
        <div className="wrap">
          <span className="wrapfa">发现</span>
          <span className="wrapz">甄选家</span>
        </div>
        <div className="right">
              <span className="search">
                 <i className="u-icon-searchl"></i>
              </span>
             <span className="cart">
                <i className="u-icon-cart"></i>
             </span>
        </div>
      </div>
    )
  }
}
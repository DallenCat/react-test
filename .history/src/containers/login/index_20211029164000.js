/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-29 15:24:14
 * @LastEditors: dal
 * @LastEditTime: 2021-10-29 16:39:37
 */
import { Component } from "react";


class LOGIN extends Component {
  render(h) {
    let bgImg = require("@/assets/images/login-background.jpg")
    return (
      <div>
        <div className="bg">
          <img alt="bg-img" className="bg-img" src={bgImg}></img>
        </div>
      </div>
    )
  }
}
export default LOGIN
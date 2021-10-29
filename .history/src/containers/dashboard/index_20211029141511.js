/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-27 11:00:04
 * @LastEditors: dal
 * @LastEditTime: 2021-10-29 14:15:11
 */
import { Component, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  selectCount
} from '@/reducers/counterSlice'


class Dashboard extends Component {

  render() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    return (
      <div>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())} > - </button>
        <div>{count}</div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())} > + </button>

      </div>

    )
  }
}
export default Dashboard
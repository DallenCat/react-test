/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-27 11:00:04
 * @LastEditors: dal
 * @LastEditTime: 2021-10-29 14:10:15
 */
import { Component, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  selectCount
} from '@/reducers/counterSlice'

const count = useSelector(selectCount)
const dispatch = useDispatch()
class Dashboard extends Component {
  render() {
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
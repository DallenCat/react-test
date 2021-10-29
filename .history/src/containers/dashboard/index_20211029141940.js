/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-27 11:00:04
 * @LastEditors: dal
 * @LastEditTime: 2021-10-29 14:19:40
 */
import { Component, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  selectCount
} from '@/reducers/counterReducer'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <div>
      <div>{count}</div>
    </div>
  )
}


class Dashboard extends Component {

  render() {

    return (
      <div>
      </div>

    )
  }
}
export default Dashboard
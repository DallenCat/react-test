/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-27 11:00:04
 * @LastEditors: dal
 * @LastEditTime: 2021-10-29 14:32:38
 */
import { Component } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from '@/reducers/counterReducer'

export function Counter() {
  const count = useSelector(
    (state) => ({
      value: state.counter.value,
    })
  )
  console.log(count)
  const dispatch = useDispatch()
  return (
    <div>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())} > - </button>
      <div>{count.value}</div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())} > + </button>

    </div>
  )
}


class Dashboard extends Component {

  render() {

    return (
      <div>
        <Counter ></Counter>
      </div>

    )
  }
}
export default Dashboard
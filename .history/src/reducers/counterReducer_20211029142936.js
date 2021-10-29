/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-28 17:35:16
 * @LastEditors: dal
 * @LastEditTime: 2021-10-29 14:29:32
 */
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    selectCount: state => state.counter.value
  }
})

export const { increment, decrement, incrementByAmount, selectCount } = counterSlice.actions
export default counterSlice.reducer
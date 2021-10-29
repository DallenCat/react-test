/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-29 14:58:26
 * @LastEditors: dal
 * @LastEditTime: 2021-10-29 15:12:01
 */
import { createSlice } from "@reduxjs/toolkit"

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    value: []
  },
  reducers: {
    setMenu: (state, action) => {
      state.value = action.payload
    }
  }
})
export const { setMenu } = menuSlice.actions
export const getMenu = state => state.menu.value
export default menuSlice.reducer
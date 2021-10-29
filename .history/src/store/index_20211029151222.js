/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-28 17:32:00
 * @LastEditors: dal
 * @LastEditTime: 2021-10-29 15:12:22
 */
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '@/reducers/counterReducer'
import menuReducer from '@/reducers/menuReducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
    menu: menuReducer
  }
})
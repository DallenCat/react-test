/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-28 17:32:00
 * @LastEditors: dal
 * @LastEditTime: 2021-10-28 17:35:35
 */
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '@/reducers/counterReducer'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
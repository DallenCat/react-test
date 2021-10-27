/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-26 17:34:53
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 11:21:56
 */
import { render } from "react"
import { Router } from "react-router"
import Layout from "@/components/layout"
const routes = {
  path: "/",
  component: Layout,
  childRouters: [
    { path: "dashboard", component: () => require("@/containers/dashboard") },
    { path: "personal", component: () => require("@/containers/personal") }
  ]
}
render(<Router routes={routes} />, document.body)
/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-26 17:34:53
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 13:36:10
 */
import { render } from "react"
import { Router } from "react-router-dom"
import Layout from "@/components/layout"
import Dashboard from "@/containers/dashboard"
import Personal from "@/containers/personal"
const routes = {
  path: "/",
  component: Layout,
  childRouters: [
    { path: "dashboard", component: Dashboard },
    { path: "personal", component: Personal }
  ]
}
render(<Router routes={routes} />, document.body)
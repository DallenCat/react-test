/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-26 17:34:53
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 11:01:06
 */
import Layout from "@/components/layout"
const routes = {
  path: "/",
  component: Layout,
  childRouters: [
    { path: "dashboard", component: () => require("@/containers/dashboard") },
    { path: "personal", component: () => require("@/containers/personal") }
  ]
}
export default routes
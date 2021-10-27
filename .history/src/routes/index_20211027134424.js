/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-26 17:34:53
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 13:44:24
 */
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

export default routes
// render(<Router routes={routes} />, document.body)
/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-26 17:34:53
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 14:00:08
 */
import Layout from "@/components/layout"
import Dashboard from "@/containers/dashboard"
import Personal from "@/containers/personal"
import reactDom from "react-dom"
// const routes = {
//   path: "/",
//   component: Layout,
//   childRouters: [
//     { path: "dashboard", component: Dashboard },
//     { path: "personal", component: Personal }
//   ]
// }
const routes =
  reactDom.render((
    <Router>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="inbox" component={Inbox} />
      </Route>
    </Router>
  )
}
export default routes
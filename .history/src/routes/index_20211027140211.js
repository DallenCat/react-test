/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-26 17:34:53
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 14:01:34
 */
import Layout from "@/components/layout"
import Dashboard from "@/containers/dashboard"
import Personal from "@/containers/personal"
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      <Route path="/" component={Layout}>
        <Route path="dashboard" component={Dashboard} />
        <Route path="personal" component={Personal} />
      </Route>
    </Router>
  ), document.body)
export default routes
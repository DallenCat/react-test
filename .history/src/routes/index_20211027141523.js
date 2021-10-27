/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-26 17:34:53
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 14:14:29
 */
import Dashboard from "@/containers/dashboard"
import Personal from "@/containers/personal"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// const routes = {
//   path: "/",
//   childRouters: [
//     { path: "/dashboard", component: Dashboard },
//     { path: "/personal", component: Personal }
//   ]
// }
const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/personal" component={Personal} />
      </Switch>
    </Router>
  )
}
export default routes
/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-26 17:34:53
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 14:14:29
 */
import Layout from "@/components/layout"
import Dashboard from "@/containers/dashboard"
import Personal from "@/containers/personal"
import { BrowserRouter as Router, Route } from 'react-router-dom';
const routes = {
  path: "/",
  childRouters: [
    { path: "/dashboard", component: Dashboard },
    { path: "/personal", component: Personal }
  ]
}
// const routes = () => {
//   return (
//     <Router>
//       <Route path="/" component={Layout}>
//         <Route path="/dashboard" component={Dashboard} />
//         <Route path="/personal" component={Personal} />
//       </Route>
//     </Router>
//   )
// }
export default routes
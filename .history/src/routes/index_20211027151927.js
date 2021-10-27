/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-26 17:34:53
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 15:19:27
 */
import Dashboard from "@/containers/dashboard"
import Personal from "@/containers/personal"
import { Route, Switch, withRouter } from 'react-router-dom';

const routes = () => {
  return (
    <Switch>
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/personal"} component={Personal} />
    </Switch>
  )
}
export default withRouter(routes)
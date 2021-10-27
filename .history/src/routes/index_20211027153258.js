/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-26 17:34:53
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 15:32:58
 */
import Dashboard from "@/containers/dashboard"
import Personal from "@/containers/personal"
import { Route, Switch, withRouter } from 'react-router-dom';

const routes = () => {
  return (
    <Switch>
      <Route exact path={"/dashboard"} component={Dashboard} />
      <Route exact path={"/personal"} component={Personal} />
    </Switch>
  )
}
export default withRouter(routes)
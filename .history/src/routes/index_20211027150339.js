/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-26 17:34:53
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 15:03:09
 */
import Dashboard from "@/containers/dashboard"
import Personal from "@/containers/personal"
import { Route, Switch, withRouter } from 'react-router-dom';

const routes = () => {
  return (
    <div key={this.props.location.key}>
      <Switch>
        <Route exact path={"/dashboard"} component={Dashboard} />
        <Route exact path={"/personal"} component={Personal} />
      </Switch>
    </div>

  )
}
export default withRouter(routes)
/*
 * @Descripttion: 
 * @version: 
 * @Author: dal
 * @Date: 2021-10-26 17:14:54
 * @LastEditors: dal
 * @LastEditTime: 2021-10-29 16:36:06
 */

import './App.css';
import Routes from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SiderDemo from "@/components/layout/index.js"
import { Component } from 'react';
class App extends Component {
  render() {
    let staticPage = ['/login']
    let LayoutRouter = (props) => {
      console.log(props)
      if (staticPage.includes(props.location.pathname)) {
        return (
          <Routes />
        )
      } else {
        return (
          <SiderDemo>
            <Routes />
          </SiderDemo>
        )
      }

    }
    return (
      <Router>
        <Switch>
          <Route path="/" component={LayoutRouter} />
        </Switch>
      </Router>
    )
  }

}
// render(<Router routes={routes} />, document.body)
export default App;

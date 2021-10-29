/*
 * @Descripttion: 
 * @version: 
 * @Author: dal
 * @Date: 2021-10-26 17:14:54
 * @LastEditors: dal
 * @LastEditTime: 2021-10-29 16:22:11
 */

import './App.css';
import Routes from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SiderDemo from "@/components/layout/index.js"
import { Component } from 'react';
class App extends Component {
  componentDidMount() {
  }
  render() {
    let LayoutRouter = (props) => {
      console.log(props)

      return (
        <SiderDemo>
          <Routes />
        </SiderDemo>
      )
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

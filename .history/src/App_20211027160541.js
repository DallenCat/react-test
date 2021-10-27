
import './App.css';
import Routes from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SiderDemo from "@/components/layout/index.js"
import { Component } from 'react';
class App extends Component {
  render() {
    let LayoutRouter = (props) => {
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

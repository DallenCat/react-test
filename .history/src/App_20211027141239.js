
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from "@/containers/dashboard"
import Personal from "@/containers/personal"
import SiderDemo from "@/components/layout/index.js"
function App() {
  return (
    <div className="App">
      <SiderDemo >
        <Router>
          <Switch >
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/personal" component={Personal} />
          </Switch>
        </Router>
      </SiderDemo>
    </div>
  );
}
export default App;

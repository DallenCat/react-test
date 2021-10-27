
import './App.css';
import Routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from "@/containers/dashboard"
import Personal from "@/containers/personal"
import SiderDemo from "@/components/layout/index.js"
function App() {
  return (
    <div className="App">
      <SiderDemo >
        <Router
          forceRefresh={false}
          keyLength={12}
        >
          <Switch>
            <Route exact path={"/dashboard"} component={Dashboard} />
            <Route exact path={"/personal"} component={Personal} />
          </Switch>
        </Router>
      </SiderDemo>
    </div>
  );
}
// render(<Router routes={routes} />, document.body)
export default App;

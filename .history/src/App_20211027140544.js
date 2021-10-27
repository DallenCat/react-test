
import './App.css';
import routes from './routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from "@/components/layout"
import Dashboard from "@/containers/dashboard"
import Personal from "@/containers/personal"
import SiderDemo from "@/components/layout/index.js"
function App() {
  return (
    <div className="App">
      <SiderDemo >
        <Router>
          <Route path="dashboard" component={Dashboard} />
          <Route path="personal" component={Personal} />
        </Router>
      </SiderDemo>
    </div>
  );
}
export default App;


import './App.css';
import Routes from './routes';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import SiderDemo from "@/components/layout/index.js"
function App() {
  return (
    <div className="App">
      <SiderDemo >
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </SiderDemo>
    </div>
  );
}
// render(<Router routes={routes} />, document.body)
export default App;

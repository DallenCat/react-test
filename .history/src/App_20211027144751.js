
import './App.css';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import SiderDemo from "@/components/layout/index.js"
const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <SiderDemo >
        <Router history={history}>
          <Routes />
        </Router>
      </SiderDemo>
    </div >
  );
}
// render(<Router routes={routes} />, document.body)
export default App;

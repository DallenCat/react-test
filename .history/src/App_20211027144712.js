
import './App.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import SiderDemo from "@/components/layout/index.js"
const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <SiderDemo >
        <BrowserRouter history={history}>
          <Routes />
        </BrowserRouter>
      </SiderDemo>
    </div >
  );
}
// render(<Router routes={routes} />, document.body)
export default App;

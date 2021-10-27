
import './App.css';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import SiderDemo from "@/components/layout/index.js"
function App() {
  return (
    <div className="App">
      <SiderDemo >
        <Router
          forceRefresh={false}
          keyLength={12}
        >
          <Routes />
        </Router>
      </SiderDemo>
    </div>
  );
}
// render(<Router routes={routes} />, document.body)
export default App;

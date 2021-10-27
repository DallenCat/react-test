
import './App.css';
import routes from './routes';
import { Router } from 'react-router'
import SiderDemo from "@/components/layout/index.js"
function App() {
  return (
    <div className="App">
      <SiderDemo >
        <Router routes={routes} />
      </SiderDemo>
    </div>
  );
}
// render(<Router routes={routes} />, document.body)
export default App;


import './App.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import SiderDemo from "@/components/layout/index.js"
function App() {
  return (
    <div className="App">
      <SiderDemo >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </SiderDemo>
    </div>
  );
}
// render(<Router routes={routes} />, document.body)
export default App;

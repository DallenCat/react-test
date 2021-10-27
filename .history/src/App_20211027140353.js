
import './App.css';
import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import SiderDemo from "@/components/layout/index.js"
function App() {
  return (
    <div className="App">
      <SiderDemo >
        <routes></routes>
      </SiderDemo>
    </div>
  );
}
export default App;
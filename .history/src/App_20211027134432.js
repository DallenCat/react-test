import { render } from "react"
import { Router } from "react-router-dom"
import './App.css';
import routes from './routes';
import SiderDemo from "@/components/layout/index.js"
function App() {
  return (
    <div className="App">
      <SiderDemo />
    </div>
  );
}
// render(<Router routes={routes} />, document.body)
export default App;

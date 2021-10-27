import { render } from "react"
import { Router } from "react-router"
import './App.css';
import routes from './routes';
import SiderDemo from "@/components/layout/index.js"
function App() {
  return (
    <div className="App">
      <SiderDemo />
      <Router routes={routes} />
    </div>
  );
}
// render(<Router routes={routes} />, document.body)
export default App;

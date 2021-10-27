
import './App.css';
import Routes from './routes';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import SiderDemo from "@/components/layout/index.js"
function App() {
  return (
    <div className="App">
      <SiderDemo >
        <Router key={this.props.location.key}>
          <Routes />
        </Router>
      </SiderDemo>
    </div>
  );
}
// render(<Router routes={routes} />, document.body)
export default withRouter(App);

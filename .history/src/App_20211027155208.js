
import './App.css';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router
          forceRefresh={false}
          keyLength={12}
        >
          <Routes />
        </Router>
      </div>
    )
  }

}
// render(<Router routes={routes} />, document.body)
export default App;

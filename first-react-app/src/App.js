import './App.css';
import Home from './components/Home';
import User from './components/User';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// put home path at the bottom as a default and we do not have to put exact
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/users/:user" component={User} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

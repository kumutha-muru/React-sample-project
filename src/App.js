import Layout from './components/layout';
import 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
function App() {
  return (
    <Router>    <div>
      {/* <Route exact path="/" component={Layout} /> */}
      <div>
        <ul>
          <li> <Link to={'/'}>Home</Link></li>
          <li> <Link to={'/about'}>About</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </div>
    </Router>

  );
}

export default App;

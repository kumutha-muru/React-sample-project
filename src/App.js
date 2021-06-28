import Layout from './components/layout';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'react-bootstrap'
function App() {
  return (
    <Router>    <div>
      <Route exact path="/" component={Layout} />
    </div>
    </Router>

  );
}

export default App;

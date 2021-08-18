import HireDeveloper from './components/views/hireDeveloper';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/hire-developers" component={HireDeveloper}/>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;

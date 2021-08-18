import './App.css';
import ODC_banner from './components/views/ODCPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/ODC" exact component={ODC_banner} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import './App.css';
import ODC_banner from './components/views/ODCPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Route path="/ODC" exact component={ODC_banner} />
      </Router>
    </>
  );
}

export default App;

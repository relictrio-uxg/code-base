import './App.css';
import ODC_banner from './components/views/ODCPage';
import RecruitmentBody from './components/views/RecruitmentPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/ODC" exact component={ODC_banner} />
        <Route path="/recruitment" exact component={RecruitmentBody} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

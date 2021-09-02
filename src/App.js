import './App.css';
import ODCPage from './components/views/ODCPage';
import RecruitmentPage from './components/views/RecruitmentPage';
import BlogPage from './components/views/BlogPage';
import HomePage from './components/views/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/ODC" exact component={ODCPage} />
        <Route path="/recruitment" exact component={RecruitmentPage} />
        <Route path="/blog" exact component={BlogPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

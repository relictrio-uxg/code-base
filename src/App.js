import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { HireDeveloper } from './components';
import { AboutUs, Footer, Header } from './components/organisms';



function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/hire-developers" exact component={HireDeveloper}/>
           <Route path="/aboutus" component={AboutUs} /> 
        </Switch>
      </Router>
    <Footer />
    </div>
  );
}

export default App;

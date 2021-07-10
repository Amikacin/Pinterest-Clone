import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './component/homepage';
import Landingpage from './component/landingpage';
import Login from './component/login';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landingpage}/>
          <Route path="/login" component={Login}/>
          <Route path='/home' component={Homepage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

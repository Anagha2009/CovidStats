import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './layout/home'
import Dashboard from './dashboard/dashboard';
import Precautions from './dashboard/precautions';
import Global from './dashboard/global';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
     <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/precautions" component={Precautions} />
      <Route path="/global" component={Global} />


    </Switch>
    </div>
    </Router>
  );
  }
}

export default App;

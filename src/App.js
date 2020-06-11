import React,{Component} from 'react';
import Bmicalculator from './bmicalculator/Bmicalculator';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import { createBrowserHistory as history} from 'history';

class App extends Component {
  render(){
  return (
    <Router history={history }>
    <div>
    <Switch>
<Route path="/" exact component={Bmicalculator}/>
</Switch>
</div>
</Router>
  );
  }
}

export default App;

import LoginContainer from "./containers/login_container";
import HomeContainer from "./containers/home_container";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import CreateBug from "./components/create_bug";
import Signup from './components/signup';



class App extends React.Component {
  constructor(){
    super()
    if(!localStorage.logged_in){
      localStorage.logged_in = false}; 
    this.state = {
      logged_in: localStorage.logged_in
    }
  }
  
  render(){
  return (

    <div>
      <Router>
        <Switch>
          <Route exact path ='/' component= {HomeContainer} />
          <Route path='/login' component = {LoginContainer} />
          <Route path='/new' component = {CreateBug} />
          <Route path='/signup' component = {Signup} />
        </Switch>
      </Router>
    </div>
  )};
}

export default App;

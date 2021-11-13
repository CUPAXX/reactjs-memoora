import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

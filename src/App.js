import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RouteWithHeader from './components/Layout/RouteWithHeader';
import Declaration from "./components/declaration/declaration";
import Reminders from "./components/reminders/reminders";
import AddDeclaration from "./components/add_declaration/add_declaration";
import Filtr from "./components/filtr/filtr";
import PersonalData from "./personal_data/PersonalData";
import Home from "./home/home";
import Product from './containers/Product';
import NotFound from './components/NotFound';
import './App.css';
import Login from "./containers/login/login";
import ProfilMenu from "./components/ProfilMenu/index.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <RouteWithHeader exact path='/' component={Home}/>
        <RouteWithHeader exact path='/my_declaration' component={Declaration}/>
        <RouteWithHeader exact path='/reminders' component={Reminders}/>
        <RouteWithHeader exact path='/add_declaration' component={AddDeclaration}/>
        <RouteWithHeader exact path='/filtred' component={Filtr}/>
        <RouteWithHeader exact path='/edit' component={PersonalData}/>
        <RouteWithHeader exact path='/prof-menu' component={ProfilMenu}/>
        <Route exact path='/login' component={Login}/>
        <Route path='/product/:id' component={Product}/>
        <NotFound />
      </Switch>
    </Router>
  );
}

export default App;

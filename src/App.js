import RouteWithHeader from './components/Layout/RouteWithHeader';
import NotFound from './components/NotFound';
import './App.css';
import ProfilMenu from "./components/ProfilMenu/index.jsx";
import React ,{ useState, useEffect }from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./home/home"
import Login from "./containers/login/login";
import PersonalData from "./personal_data/PersonalData";
import AddDeclaration from "./components/add_declaration/add_declaration";
import Declaration from "./components/declaration/declaration";
 import Reminders from "./components/reminders/reminders";

function App() {
  const [valid, setValid] = useState(false);
  let acces = window.localStorage.getItem('login');
  console.log(acces,typeof acces)
  const isValid = () => {
    if(acces != null){
      if(acces.charAt(1)=='o'){
        setValid(false)
      }else{
        setValid(true)
      }

    }
  }
  useEffect(() => {
    isValid();
  });
  return (
    <Router>
      <Switch>
         <Route exact path='/' component={Home}/>
        {valid && <RouteWithHeader exact path='/my_declaration' component={Declaration}/>}
        {valid && <RouteWithHeader exact path='/reminders' component={Reminders}/>}
        {valid && <RouteWithHeader exact path='/add_declaration' component={AddDeclaration}/>}
        {valid && <RouteWithHeader exact path='/edit' component={PersonalData}/>}
        {valid && <RouteWithHeader exact path='/prof-menu' component={ProfilMenu}/>}
        {valid &&  <RouteWithHeader exact path='/login' component={Login}/> }
        {/*<Route path='/product/:id' component={Product}/>*/}
        <NotFound />
      </Switch>
    </Router>
  );
}

export default App;

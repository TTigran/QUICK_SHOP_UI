import RouteWithHeader from './components/Layout/RouteWithHeader';
import NotFound from './components/NotFound';
import './App.css';
import React ,{ useState, useEffect }from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./home/home"
import Comments from "./containers/Comments/Comments";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Updates from "./components/Updates/Updates";
import Contacts from "./components/Contacts/Contacts";

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
        <RouteWithHeader exact path='/' component={Home}/>
        <RouteWithHeader exact path='/comments' component={Comments}/>
        <RouteWithHeader exact path='/about' component={About}/>
        <RouteWithHeader exact path='/gallery' component={Gallery}/>
        <RouteWithHeader exact path='/updates' component={Updates}/>
        <RouteWithHeader exact path='/contacts' component={Contacts}/>
        <NotFound />
      </Switch>
    </Router>
  );
}

export default App;

import React, {Component} from 'react';
import img_login from './img-login/bg.png'
import './login.css';
import Range from "./input_range/range";

class Login extends Component {
  componentDidMount() {
    window.localStorage.removeItem('login');
  }
  render() {
    return (
        <div className='container-login'>

        </div>
    );
  }
}

export default Login;

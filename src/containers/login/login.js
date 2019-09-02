import React, {Component} from 'react';
import img_login from './img-login/bg.png'
import './login.css';
import Range from "./input_range/range";

class Login extends Component {
  render() {
    return (
        <div className='container-login'>
          <div className='title-login'>
            <div className='line-left'></div>
            <h1> BUY YOUR CAR </h1>
            <div className='line-rigth'></div>
          </div>
          <div className='image-div'>
            <img className='image' src={img_login}/>
          </div>
          <Range/>
          <p className='message-info'>Choose a taxi to your style and color. Meet new people. Download application.</p>
          <div className='buttons'>
            <div className='button-login'>LOGIN</div>
            <div className='button-shop'>SHOP</div>
          </div>
        </div>
    );
  }
}

export default Login;
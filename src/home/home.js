import React, {Component} from 'react';
import './home.css';
import ger from './flags_img/germany-flag-xs.png'
import eng from './flags_img/united-kingdom-flag-xs.png'
import neth from './flags_img/netherlands-flag-xs.png'
import {connect} from 'react-redux';
import {postLogin} from '../redux/actions';



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logined: false,
      language:"",
      isShow:false,
      username: '',
      password: ''
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.props.login(this.state);
    setTimeout(function () {
      let login = (window.localStorage.getItem('login').split('|'));
      window.localStorage.setItem('token',login[0]);
      window.location.pathname=login[2]
    },2000)
  }

  myChangeHandlerUsername = (event) => {
    this.setState({username: event.target.value});
  }
  myChangeHandlerPassword = (event) => {

    this.setState({password: event.target.value});
  }
  isShow = () => {
    this.setState({isShow: !this.state.isShow});
  }
  getLanguage = (language) =>{
    alert(language)
    this.setState({language:language})
  }
  render() {

    let language = <div className='select-lenguage'>
      <div className="button buttonColorBlue smallMargin" name="appButton" id="appButton"
           onClick={this.getLanguage.bind(this,'Deutsch')}>
        <div id="sportsMobileButton" name="sportsMobileButton" className="smallButtonLabel">
          <img className="langFlag" src={ger} border="0" title="Deutsch"/>Deutsch
        </div>
      </div>

      <div className="button buttonColorBlue smallMargin" name="appButton" id="appButton"
           onClick={this.getLanguage.bind(this,'Netherland')}>
        <div id="sportsMobileButton" name="sportsMobileButton" className="smallButtonLabel">
          <img className="langFlag" src={neth} border="0" title="Netherland"/>Netherland
        </div>
      </div>

      <div className="button buttonColorBlue smallMargin" name="appButton" id="appButton"
           onClick={this.getLanguage.bind(this,'English')}>
        <div id="sportsMobileButton" name="sportsMobileButton" className="smallButtonLabel">
          <img className="langFlag" src={eng} border="0" title="English"/>English
        </div>
      </div>
    </div>

    return (
        <div className="login-container">
          <div id="login_top">
            <div name="languageSelection" id="languageSelection" onClick={this.isShow}>
              <img className="langFlag" src={eng} border="0" title="English"/>
            </div>
            <div id="logo">&nbsp;</div>
            {this.state.isShow && language}


          </div>

          <div id="login_main">
            <form id="login"
                  onSubmit={this.mySubmitHandler}
                  className="loginForm">

              <input type="text"
                     id="username"
                     name="username"
                     size="15"
                     className="textField"

                     placeholder="User name"
                     autoComplete="off"
                     autoCorrect="off"
                     autoCapitalize="off"
                     onChange={this.myChangeHandlerUsername}
              />
              <input
                  type="password"
                  id="password"
                  name="password"
                  size="15"
                  className="textField"
                  placeholder="Password"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  onChange={this.myChangeHandlerPassword}
              />
              <input type="submit"
                     className="button buttonColor"
                     id="loginLink"
                     name="loginLink"
                     value="Login"
              />
            </form>
          </div>
          <div id="login_bottom">
            <div id="customInfo" name="customInfo"></div>
            <a href="#">Contact</a>
          </div>



        </div>

    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    profile: state.profile,
    fetching: state.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {

    login: data => dispatch(postLogin(data)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

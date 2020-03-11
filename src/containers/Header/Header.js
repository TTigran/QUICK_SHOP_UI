import React from 'react';
import './header.css';
import {Link} from "react-router-dom";
import logo from "./logo-ss.png"
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      email: '',
      password: '',
      flagForShowSigns: true
    }
  }

  handleChangeBox = () => {
    this.setState({flagForShowSigns: !this.state.flagForShowSigns})
  }

  handleSubmitSignUp = () => {
    console.log("hello")
  }

  handleSubmit = () => {
    console.log(this.state.email + " " + this.state.password)
  };

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };

  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  };

  handleChangeName = (event) => {
    console.log(event.target.value);
  };

  handleChangeSurname = (event) => {
    console.log(event.target.value);
  };

  handleChangeEmailRegister = (event) => {
    // this.setState({email: event.target.value});
  };

  handleChangePasswordRegister = (event) => {
    // this.setState({password: event.target.value});
  };

  render() {
    return (
        <header>

          <div className="header-bg">
            {this.state.flagForShowSigns ? <div className="box">
                  <div className="donate-input">
                    <input placeholder="Email" onChange={this.handleChangeEmail.bind(this)}/>
                  </div>
                  <div className="donate-input">
                    <input placeholder="Password" onChange={this.handleChangePassword.bind(this)}/>
                  </div>
                  <div className="donate-now" onClick={this.handleSubmit.bind(this)}>SIGN IN</div>
                </div>
                :
                <div className="box">
                  <div className="donate-input">
                    <input placeholder="name" onChange={this.handleChangeName.bind(this)}/>
                  </div>
                  <div className="donate-input">
                    <input placeholder="surname" onChange={this.handleChangeSurname.bind(this)}/>
                  </div>
                  <div className="donate-input">
                    <input placeholder="EmailRegister" onChange={this.handleChangeEmailRegister.bind(this)}/>
                  </div>
                  <div className="donate-input">
                    <input placeholder="PasswordRegister" onChange={this.handleChangePasswordRegister.bind(this)}/>
                  </div>
                  <div className="donate-now" onClick={this.handleSubmitSignUp.bind(this)}>SIGN UP</div>
                </div>

            }


            <h1 className="gyumri-hospital-title">Interational style shop from 3d fondation</h1>
          </div>
          <div className="header-bottom-second fixed">
            <div className="route-second">
              <img className='logo' src={logo}/>
              <Link to='/about' className="route-navigation"> About</Link>
              <Link to='/updates' className="route-navigation">Updates</Link>
              <Link to='/gallery' className="route-navigation">Gallery</Link>
              <Link to='/contacts' className="route-navigation">Contacts</Link>
              <Link to='/comments' className="route-navigation">Comments</Link>
            </div>
            <div className="info">
              <div className="info-group">
                <div className="info-navigation">
                  <p><b>25<span id="date-info-second" className="about-info">
            Farme
            </span> </b></p>
                </div>
              </div>
              <div className="info-group-second">
                <div className="info-navigation">
                  <p><b>1982 <span className="about-info">
            Users
            </span> </b></p>
                </div>
              </div>
              <div className="info-group">
                <div className="info-navigation">
                  <div className="donate-now-nav"
                       onClick={this.handleChangeBox.bind(this)}><b>
                    {this.state.flagForShowSigns ? 'SIGN UP' : 'SIGN IN'}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

    )
  }

};

export default Header;

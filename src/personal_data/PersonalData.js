import React, {Component} from 'react';
import './personal_data.css'

class PersonalData extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      isShow: false,
      codes: [
        '10', '222', '222 90', '222 91', '222 91', '222 93', '222 94', '222 96', '222 97', '222 99', '223', '223'
        , '223 91', '223 98', '226', '226 75', '226 72', '224', '224', '224', '224 52', '224 53', '224 54', '231', '231'
        , '231 90', '231 91', '231 95', '231 98', '231 99', '237', '237', '237', '233', '233 74', '233 75', '233 76', '234', '238', '235', '236', '232', '249 0', '252', '257 0'
        , '312', '243 00', '243 00', '243 00', '245', '246', '242', '242 91', '242 93', '242 97', '244', '244', '244 92', '244 95', '244 96'
        , '322', '322 94', '322 96', '322 93', '322 95', '322 97', '322 98', '322 99', '255', '253', '254', '256', '261', '262', '264', '264', '269', '265', '263', '267', '266'
        , '266', '268 0', '281', '281 51', '281 91', '281 93', '281 94', '281 95', '281 97', '281 98', '281 99', '282', '287', '283 0', '284', '284', '284 94', '285', '285', '286 0', '286', '471', '474', '475', '476'
        , '477', '477 32', '478', '97', '91', '93 94']
    }
  }

  change() {
    this.setState({isShow: !this.state.isShow});
    console.log(this.state.isShow);
  }

  ascii(a) {
    return a.charCodeAt(0);
  }

  validationInput(id) {

    let reg = /^[A-Z][_A-z0-9]*((-|\s)*[_A-z])*$/;
    let nameValue = document.getElementById(id).value;
    let name_valid = document.getElementById(`${id}-valid`);
    if (nameValue.length > 0) {
      if (this.ascii(nameValue.charAt(0)) > 64 && this.ascii(nameValue.charAt(0)) < 91) {
        if (reg.test(nameValue)) {
          name_valid.style.display = 'none';
          if (/[0-9]/.test(nameValue)) {
            name_valid.innerHTML = "Խնդրում ենք թիվ չմուտքագրել";
            name_valid.style.display = 'inline';
          }
        } else {
          name_valid.innerHTML = "Խնդրում ենք սիմվոլ չմուտքագրել";
          name_valid.style.display = 'inline';
        }
      } else {
        name_valid.innerHTML = "Խնդրում  ենք գրել մեծատառ ";
        name_valid.style.display = 'inline';
      }
    } else {
      name_valid.innerHTML = "Խնդրում  ենք լրացնել բլանկը";
      name_valid.style.display = 'inline';
    }
  }

  password_valid() {
    let passwordValue = document.getElementById('psw-input').value;
    let pswValid = document.getElementById('psw_valid')

    if (passwordValue.length <= 6) {
      pswValid.innerHTML = "Ձեր գաղտնաբառի  սիմվոլների քանակը քիչ է";
      pswValid.style.display = 'inline';
    } else {
      pswValid.style.display = 'none';
    }
  }

  phone_valid(a) {
    let reg = /[3,4,5,7,9][1,3,4,5,7,8,9][0-9][0-9][0-9][0-9][0-9][0-9]/;
    let phoneValue = document.getElementById('phone_inp' + a).value;
    let phoneValid = document.getElementById('phone-valid' + a);
    if (reg.test(phoneValue)) {
      if (phoneValue.length > 7) {
        phoneValid.style.display = 'none';
        document.getElementById('phone_inp' + a).value = phoneValue.slice(0, 8);
      }
    } else {
      phoneValid.style.display = 'inline';
      phoneValid.innerHTML = 'Համարը հաստատված չէ';
    }
  }

  pluse() {
    var id = this.counter++;
    if (id == 2) {
      document.getElementById(`f${id}`).style.display = 'inline';
      document.getElementById(`plus`).style.display = 'none';
    } else {
      document.getElementById(`f${id}`).style.display = 'inline';
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          <h6 className='title'>Անձնական {" "} տվյալներ</h6>
          <div>
            <img className="avatar"
               src="https://pbs.twimg.com/profile_images/1122210437695725574/wPB3Jrkt_400x400.png"/>
            <div className="choose">
              <label htmlFor="img">
                <span> <i className='fas fa-camera'></i></span></label>
              <input type='file' id='img'/>
            </div>
          </div>
          <div className='link'><a href=''> Փոխել {" "} նկարը</a></div>
        </div>
        <div className="right">
          <span className="right֊title"><b>ընտրած թեմա՝</b> անտառային թարմություն</span>
          <form>
            <div className="form-data">
              <input className="name-surname sel" type="text" placeholder="ընտրել թեմա"/>
              <select className="name-surname phone slc" type='text' placeholder='095555555'></select>
            </div>
            <div className="form-data">
              <input
                className="name-surname submit"
                type="submit"
                placeholder="ընտրել թեմա"
                value="Հաստատել"/>
            </div>
          </form>
        </div>
        <div className="form">
          <div className="form-data"><span>example@gmail.com</span></div>
          <div className="form-data">
            <input onChange={this.validationInput.bind(this, "name")} id='name' className="name-surname"
                   type='text' placeholder='Անուն' />
            <span id='name-valid'></span>
          </div>
          <div className="form-data">
            <input className="name-surname" onChange={this.validationInput.bind(this, 'surname')}
                   id='surname' type='text' placeholder='Ազգանուն' />
            <span id='surname-valid'></span>
          </div>
          <div>
            <div id='f0' className="form-data">
              <select className="name-surname sel">
                {this.state.codes.map(item => (
                    <option>{item}</option>
                ))}
              </select>
              <input onChange={this.phone_valid.bind(this, 0)} className="name-surname phone"
                     id='phone_inp0'
                     type='text' placeholder='095555555-0' />
              <div className='valid'><span id='phone-valid0'> համարը հաստատված չէ </span><a
                  href=''> հաստատել {" "} համարը</a></div>
            </div>
          </div>
          <br/><br/>
          <div id='f1' className="form-data">
            <select className="name-surname sel">
              {this.state.codes.map(item => (
                  <option>{item}</option>
              ))}
            </select>
            <input onChange={this.phone_valid.bind(this, 1)} className="name-surname phone" id='phone_inp1'
                   type='text' placeholder='095555555-1' />
            <div className='valid'><span id='phone-valid1'> համարը հաստատված չէ </span><a
                href=''> հաստատել {" "} համարը</a></div>
          </div>
          <br/><br/>
          <div id='f2' className="form-data">
            <select className="name-surname sel">
              {this.state.codes.map(item => (
                  <option>{item}</option>
              ))}
            </select>
            <input onChange={this.phone_valid.bind(this, 2)} className="name-surname phone" id='phone_inp2'
                   type='text' placeholder='095555555-1' />
            <div className='valid'><span id='phone-valid2'> համարը հաստատված չէ </span><a
                href=''> հաստատել {" "} համարը</a></div>
          </div>
          <div id='plus'>
            <span onClick={this.pluse.bind(this)}>+ Ավլեցնել  համար</span>
          </div>
        </div>
        <div className="form">
          <span>Գաղտնաբառ</span>
          <div className="form-data">
            <input onChange={this.password_valid.bind(this)} id="psw-input" className="name-surname"
                   type={this.state.isShow ? 'text' : 'password'}
                   placeholder='Գաղտնաբառ' />
            <span>  <i onClick={this.change.bind(this)}
                       className={this.state.isShow ? 'fas fa-eye' : 'fa fa-eye-slash'}></i></span>
            <span id="psw_valid"> </span>
          </div>
          <div className='link-other'><a href=''> Փոխել {" "} Գաղտնաբառ</a></div>
        </div>
      </div>
    );
  }
}

export default PersonalData;

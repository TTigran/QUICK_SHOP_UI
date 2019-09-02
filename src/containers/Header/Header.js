import React from 'react';
import { Link } from "react-router-dom";

import './header.css';

const Header = () => {
  return (
    <div className='container-header header-rel'>
      <div className=''>
        <img
          className="avatar"
          src="https://pbs.twimg.com/profile_images/1122210437695725574/wPB3Jrkt_400x400.png"/>
        <div className='info'>
          <p className='p-info count' >+24 Դիտորդ</p>
          <p className='p-info full-name' >Անուն Ազգանուն</p>
          <p className='p-info phone-number' >(+374) 94444444</p>
        </div>
        <div className="header-rigth">
          <p>
            <Link to={'/edit'} className="nav-link">
              <i className="fa fa-edit edit-profil"></i>
            </Link>
            Անձնական տվյալներ փոփոխություն
          </p>
          <p><span className="right֊title"><b>ընտրած թեմա՝</b> անտառային թարմություն</span></p>
        </div>
      </div>
    </div>
  );
};

export default Header;

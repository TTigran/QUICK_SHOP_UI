import React, {Component} from 'react';
import './menu_filtr.css';

class MenuFiltr extends Component {
  render() {
    return (
      <div className='container-menu-filtr'>
        <div className='menu-filtr'>
          <div className='menu-piece'>
            <div className="container">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <div className='menu-piece'>
            <div className="field">
              <div className="input-search">
                <i className="fas fa-car"></i>
                <input
                  className="search-car"
                  type="text"
                  name="password"
                  placeholder="Որոնել մեքենա"
                />
              </div>
            </div>
          </div>
          <div className='menu-piece log'>
            <span>Մուտք գործել
              <i className='fas fa-user-tie'></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuFiltr;

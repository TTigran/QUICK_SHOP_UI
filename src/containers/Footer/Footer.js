import React from 'react';
import f from "./assest/f.png"
import l from "./assest/l.png"
import t from "./assest/t.png"
import i from "./assest/i.png"
import logo from "../Header/logo-ss.png";
import "./footer.css"

const Footer = () => {
  return (
      <footer>
        <div className="cont-footer">
          <div className="footer-items">
            <div className="footer-item-box first">
              <img className='logo-footer' src={logo}/>
              <div className="contact">Tel: +374011111111</div>
              <div className="contact">Mail: charity@gmail.com</div>
            </div>
            <div className="footer-item-box">
              <div>
                <b className="footer-company">Company</b>
              </div>
              <div className="list">
                <ul className="company-part">
                  <li>Home</li>
                  <li>Projects</li>
                  <li>Community</li>
                  <li>About us</li>
                  <li>News</li>
                </ul>
              </div>
            </div>
            <div className="footer-item-box third">
              <div>
                <b className="footer-company">Help and Support</b>
              </div>
              <div className="list">
                <ul className="company-part">
                  <li>FAQ</li>
                  <li>Terms and Condition</li>
                  <li>Privacy Policy</li>
                  <li>Contacts</li>
                </ul>
              </div>
            </div>
            <div className="footer-item-box fourth">
              <div>
                <div>
                  <b className="footer-company">Follow us in social</b>
                </div>
                <div>
                  <img src={f}/>
                  <img className="soc-log" src={t}/>
                  <img className="soc-log" src={i}/>
                  <img className="soc-log" src={l}/>
                </div>
              </div>
              <div className="fourth-box-part">
                <div>
                  <b className="footer-company">Subscribe for new projects</b>
                </div>
                <div className="email-input">
                  <input id="email" type="email" placeholder="Your email"/>Name
                  <svg xmlns="http://www.w3.org/2000/svg" width="24.87" height="15.343" viewBox="0 0 24.87 15.343">
                    <g transform="translate(0 -14.014)">
                      <g transform="translate(0 14.014)">
                        <g transform="translate(0 0)">
                          <path className="a"
                                d="M24.353,20.727l-7.03-6.315a1.557,1.557,0,1,0-2.078,2.319l3.827,3.435H1.556a1.557,1.557,0,0,0,0,3.114H19.238l-3.955,3.326a1.556,1.556,0,0,0,2,2.384l7.03-5.913a1.559,1.559,0,0,0,.555-1.169A1.636,1.636,0,0,0,24.353,20.727Z"
                                transform="translate(0 -14.014)"/>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-line"></div>
          <p className="address">Address Line, Yerevan, RA, 374154</p>
        </div>
      </footer>
  );
};

export default Footer;

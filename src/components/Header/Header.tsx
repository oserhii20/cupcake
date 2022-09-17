import React, { FC } from 'react';
import {Link} from 'react-router-dom'
interface HeaderProps {}
const Header: FC<HeaderProps> = () => (
  <div>
        <header  id="headerfix">
        <div className="container">
          <div className="row align-items-center">
            <div className="box">
              <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <img src={require('../../assets/images/menu.png')} />
                  </button>
                <a className="navbar-brand" href="/">
                  <img src={require('../../assets/images/logo.png')} alt='cupcake'/>
                </a>

                <div className="collapse navbar-collapse" id="collapsibleNavbar" >
                  <ul className="navbar-nav uppercase">
                    <li className="nav-item">
                      <Link to="shopPage">Buy sprinkles</Link>
                    </li> &nbsp;
                    <li className="nav-item">
                    <a href="#">Contact Us</a>


                    </li>
                  </ul>
                </div>
              </nav>
              <div className="dhr_btn">
                <a href="#" className="link">Login</a>
              </div>
            </div>
          </div>
        </div>
      </header>
  </div>
);

export default Header;

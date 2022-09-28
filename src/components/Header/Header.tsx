import React, { FC } from 'react';
import { Link } from 'react-router-dom'
interface HeaderProps { }
const Header: FC<HeaderProps> = () => (
  <div>
    <header id="headerfix">
      <div className="container">
        <div className="row align-items-center">
          <div className="box">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img src={require('../../assets/images/logo.png')} alt='cupcake' />
              </a>
              <div className="nav-right">
                <a href="https://cupcake.com/wallet" target={"_blank"} className="pink_link">Login</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <img src={require('../../assets/images/menu.svg')} />
                </button>
              </div>

              <div className="collapse navbar-collapse" id="collapsibleNavbar" >
                <ul className="navbar-nav uppercase">
                  <li className="nav-item mobile">
                    <a href="https://form.typeform.com/to/aIrTJmFt?typeform-source=cupcake.com" target={"_blank"} className="nav-link">Contact Us</a>
                  </li>
                  <li className="nav-item mobile">
                    <a href="shop" className="nav-link">Shop</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="dhr_btn">
              <a href="shop">Shop</a>
              <a href="https://form.typeform.com/to/aIrTJmFt?typeform-source=cupcake.com" target={"_blank"}>Contact Us</a>
              <a href="https://cupcake.com/wallet" target={"_blank"}>Login</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;

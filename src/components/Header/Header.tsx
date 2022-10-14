import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom'
interface HeaderProps { 
  
}

const Header = () => 
{
const [active,setActive]=useState(false);
 
  return(<div>
    <header id="headerfix">
      <div className="container mx-auto ">
        <div className="row align-items-center">
          <div className="box">
            <nav className="relative flex flex-wrap items-center content-between py-3 px-4 ">
              <a className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap" href="/">
                <img src={require('../../assets/images/logo.png')} alt='cupcake' />
              </a>
              <div className="nav-right">
                <a href="https://cupcake.com/wallet" target={"_blank"} className="pink_link">Login</a>
                <button className="py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded" type="button" onClick={() => setActive(!active)}>
                  <img src={require('../../assets/images/menu.svg')} />
                </button>
              </div>

              <div  className={active ? 'flex-grow items-center' : 'hidden flex-grow items-center'} id="collapsibleNavbar" >
                <ul className="flex flex-wrap list-reset pl-0 mb-0 uppercase">
                  <li className="mobile">
                    <a href="https://form.typeform.com/to/aIrTJmFt?typeform-source=cupcake.com" target={"_blank"} className="nav-link">Contact Us</a>
                  </li>
                  <li className="mobile"> 
                    <a href="shop" className="nav-link">Shop</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="dhr_btn">
              <a href="shop">Shop</a>
              <a href="https://form.typeform.com/to/aIrTJmFt?typeform-source=cupcake.com" target={"_blank"}>Contact Us</a>
              <a href="https://cupcake.com/wallet" target={"_blank"} className="pink_link">Login</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>)
};

export default Header;


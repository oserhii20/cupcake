import React, { FC } from 'react';
import Marquee from "react-fast-marquee";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => (
  <div className="home_page">
   {/* Slider */}
   <div className="slider">
          <div className="container">
            <div className="row align-items-center rev">
              <div className="col-md-6">
                <h1>Physical<br /> Meets<br /> <span className="holographic_text"> Digital</span></h1>
                <p>Join over <b className="black">30,000 users</b> and top brands using cupcake</p>
                <a href="shop" className="link">Buy Sprinkles</a>
              </div>
              <div className="col-md-6 floating">
                <img src={require('../../assets/images/hero-image.png')} />
              </div>
            </div>
          </div>
        </div>
        {/* Brand Logo */}
     
        <section className="brand_logo">
          <div className="container">
            <div className="row">
              <ul>
                <li><a href="https://solana.com/" target={"_blank"}><img src={require('../../assets/images/p-1.png')} /></a></li>
                <li><a href="https://www.asics.com/us/en-us/" target={"_blank"}><img src={require('../../assets/images/p-2.png')} /></a></li>
                <li><a href="https://usa.tommy.com/en" target={"_blank"}><img src={require('../../assets/images/p-3.png')} /></a></li>
                <li><a href="https://injective.com/" target={"_blank"}><img src={require('../../assets/images/p-4.png')} /></a></li>
              </ul>
              <ul>
                <li><a href="https://www.lollapalooza.com/" target={"_blank"}><img src={require('../../assets/images/p-5.png')} /></a></li>
                <li><a href="https://stepn.com/" target={"_blank"}><img src={require('../../assets/images/p-6.png')} /></a></li>
                <li><a href="#" target={"_blank"}><img src={require('../../assets/images/p-7.png')} /></a></li>
                <li><a href="https://degentrashpandas.com/" target={"_blank"}><img src={require('../../assets/images/p-8.png')} /></a></li>
              </ul>
            </div>
          </div>
        </section>
        {/* Partner with us today */}
        <section className="partner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h2>Partner with us<br /> today</h2>
                <p>Work with our partner team to build a custm experience for your brand.</p>
                <a href="https://form.typeform.com/to/aIrTJmFt?typeform-source=cupcake.com" target={"_blank"} className="link">Contact us</a>
              </div>
              <div className="col-md-5">
              <div className="hover14">
  <div>
    <figure><img src={require('../../assets/images/sticker.png')} /></figure>
  </div>
</div>
              </div>
       

            </div>
          </div>
        </section>  

  </div>
);

export default LandingPage;

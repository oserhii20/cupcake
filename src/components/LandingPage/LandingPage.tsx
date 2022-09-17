import React, { FC } from 'react';
import Marquee from "react-fast-marquee";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => (
  <div>
   {/* Slider */}
   <div className="slider">
          <div className="container">
            <div className="row align-items-center rev">
              <div className="col-md-6">
                <h1>Physical<br /> Meets<br /> <span className="pink"> Digital</span></h1>
                <p>Join over <b className="black">30,000 users</b> and top brands using cupcake</p>
                <a href="#" className="link">Buy Sprinkles</a>
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
              <Marquee direction='right' gradient={false} gradientWidth={0}>
                <li><span><img src={require('../../assets/images/p-1.png')} /></span></li>
                <li><span><img src={require('../../assets/images/p-2.png')} /></span></li>
                <li><span><img src={require('../../assets/images/p-3.png')} /></span></li>
                <li><span><img src={require('../../assets/images/p-4.png')} /></span></li>
                </Marquee>
                <Marquee  direction='left' gradient={false} gradientWidth={0}>
                <li><span><img src={require('../../assets/images/p-5.png')} /></span></li>
                <li><span><img src={require('../../assets/images/p-6.png')} /></span></li>
                <li><span><img src={require('../../assets/images/p-7.png')} /></span></li>
                <li><span><img src={require('../../assets/images/p-8.png')} /></span></li>
                </Marquee>
              </ul>
            </div>
          </div>
        </section>
        {/* Partner with us today */}
        <section className="partner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h2>Partner with us<br /> today</h2>
                <p>Work with our partner team to build a custm experience for your brand.</p>
                <a href="#" className="pink_link">Contact us</a>
              </div>
              <div className="col-md-4 ">
              <div className="hover14">
  <div>
    <figure><img src={require('../../assets/images/sticker 1 1.png')} /></figure>
  </div>
</div>
              </div>
       

            </div>
          </div>
        </section>  

  </div>
);

export default LandingPage;

import React, { FC } from 'react';
import Marquee from "react-fast-marquee";
import { TwitterTweetEmbed } from 'react-twitter-embed';

interface LandingPageProps { }

const LandingPage: FC<LandingPageProps> = () => (
  <div className="home_page">
    {/* Slider */}
    <div className="slider">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Where Physical<br /> Meets Digital<br /></h1>
            <p><b>A simple solution to making web3 frictionless</b></p>
            <a href="shop" className="pink_link">Buy Sprinkles</a>
            <p><small>Join over <strong>30,000</strong> users today</small></p>
          </div>
          <div className="col-md-6 bg-images">
            <img src={require('../../assets/images/hero-image.png')} />
          </div>
        </div>
      </div>
    </div>
    {/* Brand Logo */}

    <section className="brand_logo">
      <h2>Join some of the<br />world's biggest brands</h2>
      <div className="container">
        <div className="row">
            <div className="col-6"><a href="https://solana.com/" target={"_blank"}><img src={require('../../assets/images/b-1.svg')} /></a></div>
            <div className="col-6"><a href="https://usa.tommy.com/en" target={"_blank"}><img src={require('../../assets/images/b-2.svg')} /></a></div>
            <div className="col-6"><a href="https://injective.com/" target={"_blank"}><img src={require('../../assets/images/b-3.svg')} /></a></div>
            <div className="col-6"><a href="https://www.lollapalooza.com/" target={"_blank"}><img src={require('../../assets/images/b-4.svg')} /></a></div>
            <div className="col-6"><a href="https://degentrashpandas.com/" target={"_blank"}><img src={require('../../assets/images/b-5.svg')} /></a></div>
            <div className="col-6"><a href="#" target={"_blank"}><img src={require('../../assets/images/b-6.svg')} /></a></div>
        </div>
      </div>
      <a href="shop" className="pink_link">Learn More</a>
    </section>
    {/* Partner with us today */}
    <section className="partner">
      <div className="container">
        <div className="row align-items-left">
          <div className="col-md-8">
            <h2>Partner with us<br /> today</h2>
            <p>Work with our partner team to build a custom experience for your brand.</p>
            <a href="https://form.typeform.com/to/aIrTJmFt?typeform-source=cupcake.com" target={"_blank"} className="pink_link">Contact us</a>
          </div>
          <div className="col-md-4">
            <div className="hover14">
              <TwitterTweetEmbed
                tweetId={"1553470851185532928"}
                placeholder={"loading"}
                options={
                  {
                    chrome: "noheader, nofooter"
                  }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
);

export default LandingPage;

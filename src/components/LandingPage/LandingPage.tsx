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
            <img src={require('../../assets/images/hero-image.png')} className="mobile" />
            <img src={require('../../assets/images/hero-image-desk.png')} className="desktop" />
          </div>
        </div>
      </div>
    </div>
    {/* Brand Logo */}

    <section className="brand_logo">
      <h2>Join some of the<br /> world's biggest brands</h2>
      <div className="container">
        <div className="row">
            <div className="col-6 col-sm-4 col-md-2"><a href="https://www.lollapalooza.com/" target={"_blank"}><img src={require('../../assets/images/p-1.png')} /></a></div>
            <div className="col-6 col-sm-4 col-md-2"><a href="https://usa.tommy.com/en" target={"_blank"}><img src={require('../../assets/images/p-2.png')} /></a></div>
            <div className="col-6 col-sm-4 col-md-2"><a href="https://solana.com/" target={"_blank"}><img src={require('../../assets/images/p-3.png')} /></a></div>
            <div className="col-6 col-sm-4 col-md-2"><a href="https://degentrashpandas.com/" target={"_blank"}><img src={require('../../assets/images/p-4.png')} /></a></div>
            <div className="col-6 col-sm-4 col-md-2"><a href="https://injective.com/" target={"_blank"}><img src={require('../../assets/images/p-5.png')} /></a></div>
            <div className="col-6 col-sm-4 col-md-2"><a href="#" target={"_blank"}><img src={require('../../assets/images/p-6.png')} /></a></div>
        </div>
      </div>
      <a href="shop" className="pink_link">Learn More</a>
    </section>
    {/* Partner with us today */}
    <section className="partner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hover14">
              <div className="tweet-header">
                <img src={require("../../assets/images/tweet_logo.png")} />
                <div className="tweet-title">
                  <span><strong>Lollapalooza</strong><img src={require("../../assets/images/tweet_badge.svg")} /></span>
                  <span>@lollapalooza</span>
                </div>
              </div>
              <p>Thousands of Lolla attendees visited the Solana Compound and minted their first free NFT! Stop by on Day 3 for prizes, VIP passes, and more! solana.com/lolla</p>
              <video width={"100%"} controls style={{ borderRadius: 10 }}>
                <source src={require("../../assets/video/cupcake-video.mp4")} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Partner with us<br /> today</h2>
            <p>Work with our partner team to build a custom experience for your brand.</p>
            <a href="https://form.typeform.com/to/aIrTJmFt?typeform-source=cupcake.com" target={"_blank"} className="pink_link">Contact us</a>
          </div>
        </div>
      </div>
    </section>

  </div>
);

export default LandingPage;

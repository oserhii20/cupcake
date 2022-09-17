import React, { FC } from 'react';


interface ShopPageProps {}

const ShopPage: FC<ShopPageProps> = () => (
  <div>
      {/* Shop */}
      <section className="shop_page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 floating">
              <img src={require('../../assets/images/sticker 1 1.png')} />
            </div>
            <div className="col-md-6">
              <h2>Sprinkles</h2>
              <ul>
                <li><button>5 pack</button></li>
                <li><button>5 pack</button></li>
                <li><button>50 pack</button></li>
              </ul>
              <p>Start with birthday cards, nfts for private events,  loyalty cards, sharing your art or media, and so much more!</p>
              <h3>$19.99</h3>
              <button className="pink_link">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
  </div>
);

export default ShopPage;

import React, { FC, useState } from 'react';


interface ShopPageProps {}

const ShopPage: FC<ShopPageProps> = () => {
  const [products, setProducts] = useState([
    {
      value: 5,
      key: "5-pack",
      label: "5 Pack",
      description: "Start with birthday cards, nfts for private events,  loyalty cards, sharing your art or media, and so much more!",
      price: "79.99"
    },
    {
      value: 10,
      key: "10-pack",
      label: "10 Pack",
      description: "Start with birthday cards, nfts for private events,  loyalty cards, sharing your art or media, and so much more!",
      price: "99.99"
    },
    {
      value: 50,
      key: "50-pack",
      label: "50 Pack",
      description: "Start with birthday cards, nfts for private events,  loyalty cards, sharing your art or media, and so much more!",
      price: "200.99"
    }
  ]);
  const [selectedProduct, setSelectedProduct] = useState({
    value: 5,
    key: "5-pack",
    label: "5 Pack",
    description: "Start with birthday cards, nfts for private events,  loyalty cards, sharing your art or media, and so much more!",
    price: "79.99"
  });

  return (
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
                  {products.map((el) => (
                    <li key={el.key} className={selectedProduct.value == el.value ? "selected" : ""}><button onClick={() => setSelectedProduct(el)}>{el.label}</button></li>
                  ))}
                </ul>
                <p>{selectedProduct.description}</p>
                <h3>${selectedProduct.price}</h3>
                <button className="link">Buy Now</button>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
};

export default ShopPage;

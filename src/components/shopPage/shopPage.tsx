import React, { FC, useState } from 'react';


interface ShopPageProps {}

const ShopPage: FC<ShopPageProps> = () => {
  const [products, setProducts] = useState([
    {
      value: 5,
      key: "5-pack",
      label: "5 Pack",
      description: "Start with birthday cards, nfts for private events,  loyalty cards, sharing your art or media, and so much more!",
      price: "79.99",
      link: "https://store.cupcake.com/60805087372/checkouts/0481d78cd1ccc61029ab2ebcff7eeede"
    },
    {
      value: 10,
      key: "10-pack",
      label: "10 Pack",
      description: "Start with birthday cards, nfts for private events,  loyalty cards, sharing your art or media, and so much more!",
      price: "99.99",
      link: "https://store.cupcake.com/60805087372/checkouts/07d10ab3b592ff522001f2d798266602"
    },
    {
      value: 50,
      key: "50-pack",
      label: "50 Pack",
      description: "Start with birthday cards, nfts for private events,  loyalty cards, sharing your art or media, and so much more!",
      price: "200.99",
      link: "https://store.cupcake.com/60805087372/checkouts/492643b56a0a23f72118cd61ff9c0ba4"
    }
  ]);
  const [selectedProduct, setSelectedProduct] = useState({
    value: 5,
    key: "5-pack",
    label: "5 Pack",
    description: "Start with birthday cards, nfts for private events,  loyalty cards, sharing your art or media, and so much more!",
    price: "79.99",
    link: "https://store.cupcake.com/60805087372/checkouts/0481d78cd1ccc61029ab2ebcff7eeede"
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
                <a href={selectedProduct.link} target={"_blank"} className="link">Buy Now</a>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
};

export default ShopPage;

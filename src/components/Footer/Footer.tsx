import React, { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div>
      <footer>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <h6>Cupcake</h6>
                <a href="#" className="footer_btn">Buy sprinkles</a>
                <a href="https://form.typeform.com/to/aIrTJmFt?typeform-source=cupcake.com" target={"_blank"} className="footer_btn">Contact us</a>
                <a href="https://cupcake.com/wallet" target={"_blank"} className="footer_btn">Login</a>
              </li>
              <li>
                <h6>Company</h6>
                <a href="#" className="footer_btn">Careers</a>
                <a href="#" className="footer_btn">Linkedin</a>
                <a href="#" className="footer_btn">Terms of use</a>
              </li>
              <li>
                <h6>Policies</h6>
                <a href="#" className="footer_btn">Privacy Policy</a>
                <a href="#" className="footer_btn">Cookie Policy</a>
                <a href="#" className="footer_btn">KYC Policy</a>
              </li>
              <li>
                <h6>Connect</h6>
                <span className="social">
                  <a href="#"><img src={require('../../assets/images/Twitter.png')} /></a>
                  <a href="#"><img src={require('../../assets/images/facebook.png')} /></a>
                  <a href="#"><img src={require('../../assets/images/Instagram.png')} /></a>
                </span>          
              </li>
              <li>
                <h6>Subscribe to our newsletter</h6>
                <div className="subscribebox">
                  <form>
                    <label>
                      <input type="text"  placeholder="Email" />
                    </label>
                    <label className="footer_check">
                      <input type="checkbox"  />
                      <p>Check this box to receive communications from Cupcake. You can ubsubscribe at any time. We look after your data - see our privacy policy.*</p>
                    </label>
                    <button className="link">Subscribe</button>
                    <p>This site is protected by reCAPTCHA</p>
                  </form>
                </div>
              </li>
            </ul>   
          </div>
          <div className="row copy_wright">
            <div className="col-md-12">
              <img src={require('../../assets/images/logo-footer.png')} />
              <p>Copyright 2022 Cupcake Protocol. All rights reseerved.</p>
              <p>Cupcake Protocal is a registered service business (XXXX ID: XX).</p>
              <p>For Law Enforcement requests please direct your official document to our compliance team here.</p>
            </div>
          </div>
        </div>
      </footer>
  </div>
);

export default Footer;

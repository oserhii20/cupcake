import React, { FC, useState } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const [email, setEmail] = useState("");
  const [isCheckedTos, setIsCheckedTos] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    "email": "",
    "checkTos": ""
  });

  const validateForms = () => {
    let errorMessages0 = {
      "email": "",
      "checkTos": ""
    }

    if (!isCheckedTos) {
      errorMessages0 = {
        ...errorMessages0,
        "checkTos": "Please agree to our privacy policy."
      }
    } else if (isCheckedTos) {
      errorMessages0 = {
        ...errorMessages0,
        "checkTos": ""
      }
    }

    if (!email.trim()) {
      errorMessages0 = {
        ...errorMessages0,
        "email": "Please enter your email."
      }
    } else if (isCheckedTos) {
      errorMessages0 = {
        ...errorMessages0,
        "email": ""
      }
    }

    setErrorMessages(errorMessages0);

    if (errorMessages0.email || errorMessages0.checkTos) {
      return false;
    }
    
    return true;
  }

  const onSubmitEmail = () => {
    if (!validateForms()) {
      return;
    }

    console.log(email);
    console.log(isCheckedTos);
  }

  return (
    <div>
        <footer>
          <div className="container mx-auto ">
            <div className="flex flex-wrap ">
                <div className="w-1/2 md:w-1/4 pr-4 pl-4">
                  <h6>Cupcake</h6>
                  <a href="shop" className="footer_btn">Buy sprinkles</a>
                  <a href="https://form.typeform.com/to/aIrTJmFt?typeform-source=cupcake.com" target={"_blank"} className="footer_btn">Contact us</a>
                  <a href="https://cupcake.com/wallet" target={"_blank"} className="footer_btn">Login</a>
                </div>
                <div className="w-1/2 md:w-1/4 pr-4 pl-4">
                  <h6>Company</h6>
                  <a href="#" className="footer_btn">Careers</a>
                </div>
                <div className="w-1/2 md:w-1/4 pr-4 pl-4">
                  <h6>Policies</h6>
                  <a href="#" className="footer_btn">Terms of use</a>
                  <a href="#" className="footer_btn">Privacy Policy</a>
                  <a href="#" className="footer_btn">Cookie Policy</a>
                  <a href="#" className="footer_btn">KYC Policy</a>
                </div>
                <div className="w-1/2 md:w-1/4 pr-4 pl-4">
                  <h6>Connect</h6>
                  <span className="social">
                    <a href="https://twitter.com/cupcakeprotocol"><img src={require('../../assets/images/Twitter.png')} /></a>
                    <a href="https://www.tiktok.com/@cupcakeprotocol"><img src={require('../../assets/images/Tiktok.png')} /></a>
                    <a href="https://www.instagram.com/cupcakeprotocol/"><img src={require('../../assets/images/Instagram.png')} /></a>
                  </span>          
                </div>
            </div>
            <div className="flex flex-wrap copy_wright">
              <div className="md:w-full pr-4 pl-4">
                <a href="/"><img src={require('../../assets/images/logo-footer.png')} /></a>
                <p>Copyright 2022 Cupcake Protocol. All rights reseerved.</p>
                <p>Cupcake Protocal is a registered service business (XXXX ID: XX).</p>
                <p>For Law Enforcement requests please direct your official document to our compliance team here.</p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
  };

export default Footer;

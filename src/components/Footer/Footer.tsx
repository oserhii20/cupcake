import React, { FC, useState } from 'react';
import axios from 'axios';
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const [email, setEmail] = useState("");
  const [isCheckedTos, setIsCheckedTos] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    "email": "",
    "checkTos": ""
  });
  const [submitResult, setSubmitResult] = useState({
    message: "",
    status: true
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

  
  const onSubmitEmail = async () => {
    if (!validateForms()) {
      return;
    }
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    await axiosInstance.post(
        `/api/subscription`,
        { email },
        config
    ).then((data) => {
      console.log(data);
      setSubmitResult({
        message: "Thanks for your subscription.",
        status: true
      });
    }).catch((err) => {
      console.log(err);
      setSubmitResult({
        message: "Network error.",
        status: false
      });
    });

    setTimeout(() => {
      setSubmitResult({
        message: "",
        status: true
      });
    }, 5000);
  }

  return (
    <div>
        <footer>
          <div className="container">
            <div className="row">
                <div className="col-6 col-md-3">
                  <h6>Cupcake</h6>
                  <a href="shop" className="footer_btn">Buy sprinkles</a>
                  <a href="https://form.typeform.com/to/aIrTJmFt?typeform-source=cupcake.com" target={"_blank"} className="footer_btn">Contact us</a>
                  <a href="https://cupcake.com/wallet" target={"_blank"} className="footer_btn">Login</a>
                </div>
                <div className="col-6 col-md-3">
                  <h6>Company</h6>
                  <a href="#" className="footer_btn">Careers</a>
                </div>
                <div className="col-6 col-md-3">
                  <h6>Policies</h6>
                  <a href="#" className="footer_btn">Terms of use</a>
                  <a href="#" className="footer_btn">Privacy Policy</a>
                  <a href="#" className="footer_btn">Cookie Policy</a>
                  <a href="#" className="footer_btn">KYC Policy</a>
                </div>
                <div className="col-6 col-md-3">
                  <h6>Connect</h6>
                  <span className="social">
                    <a href="https://twitter.com/cupcakeprotocol"><img src={require('../../assets/images/Twitter.png')} /></a>
                    <a href="https://www.tiktok.com/@cupcakeprotocol"><img src={require('../../assets/images/Tiktok.png')} /></a>
                    <a href="https://www.instagram.com/cupcakeprotocol/"><img src={require('../../assets/images/Instagram.png')} /></a>
                  </span>
                </div>
                {/* <li>
                  <h6>Subscribe to our newsletter</h6>
                  <div className="subscribebox">
                    <div>
                      <label>
                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                      </label>
                      {errorMessages.email ?
                        <span className="error-message">{errorMessages.email}</span>
                        :
                        ""
                      }
                      <label className="footer_check">
                        <input type="checkbox" checked={isCheckedTos} onChange={(e) => e.target.checked ? setIsCheckedTos(true) : setIsCheckedTos(false)} />
                        <p>Check this box to receive communications from Cupcake. You can ubsubscribe at any time. We look after your data - see our privacy policy.*</p>
                      </label>
                      {errorMessages.checkTos ?
                        <span className="error-message">{errorMessages.checkTos}</span>
                        :
                        ""
                      }
                      <button className="pink_link" onClick={onSubmitEmail}>Subscribe</button>
                      {submitResult.message ?
                        <span className={submitResult.status ? "success-message" : "error-message"}>{submitResult.message}</span>
                        :
                        ""
                      }
                      <p>This site is protected by reCAPTCHA</p>
                    </div>
                  </div>
                </li> */}
            </div>
            <div className="row copy_wright">
              <div className="col-md-12">
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

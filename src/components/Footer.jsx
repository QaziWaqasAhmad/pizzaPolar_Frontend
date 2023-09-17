import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1>Pizza Polar</h1>
              <p>
                Welcome to Pizza Polar – your ultimate destination for
                mouthwatering pizza creations that will transport your taste
                buds to the North Pole of flavor!
              </p>
            </div>
            <div className="col-md-4 mx-auto">
              <div className="usefull_links text-center">
                <h4>Useful Links</h4>
                <ul>
                  <Link to="/about"  className="text-dark"> 
                    {" "}
                    <li>About Us</li>
                  </Link>
                  <Link to="/contact" className="text-dark">
                    {" "}
                    <li>Contact</li>
                  </Link>
                  <Link to="/" className="text-dark">
                    <li>Privacy Policy</li>
                  </Link>
                  <Link to="/" className="text-dark">
                    <li>Terms & Conditions</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="connect-with-us">
                <h4>Connect With Us</h4>
                <div className="social-icons d-flex gap-2 fs-3 align-items-center ">
                  <Link to="/" className="text-dark">
                    <span className="fs-3">
                      <FaFacebookF />
                    </span>
                  </Link>
                  <Link to="/" className="text-dark">
                    <span className="fs-2">
                      <AiOutlineInstagram />
                    </span>
                  </Link>
                  <Link to="/" className="text-dark">
                    {" "}
                    <span className="fs-3">
                      <BsWhatsapp />
                    </span>
                  </Link>
                </div>
                <div className="copyright mt-4">
                  <p>Copyright © Pizza Polar. All rights reserved.DigiRavo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

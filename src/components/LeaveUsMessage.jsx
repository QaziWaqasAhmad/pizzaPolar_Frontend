import React from "react";
import Button from "./subcomponents/Button";

const LeaveUsMessage = () => {
  return (
    <>
      <div className="leaveusmessage p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="our-location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43037329.26137382!2d-135.6879942970478!3d48.824065908239284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2s!4v1694965131987!5m2!1sen!2s"
                  width="500"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
            <h2>Feel Free To Contact</h2>
              <div className="contact-form mt-5">
              <div className="row">
                <div className="col-md-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    First Name:
                  </label>
                  <input
                    type="name"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your first name"
                  />
                </div>
                </div>
                <div className="col-md-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Last Name:
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your last name"
                  />
                </div>
                </div>
               
                
              </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    class="form-control "
                    id="exampleFormControlInput1"
                    placeholder="Enter email address"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message:
                  </label>
                  <textarea
                    class="form-control "
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <Button 
             butttons="contact-button"
             name='Send'
             
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveUsMessage;

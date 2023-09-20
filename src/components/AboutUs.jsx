import React from 'react'
import aboutImg from "../assets/aboutus.jpg"
import {GiCheckMark} from "react-icons/gi"

const AboutUs = () => {
  return (
    <>
       <div className="about-us p-5 ">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                  <div className="about-left">
                    <h2 className='about-heading'>About <strong className='extra-text'>Pizza Polar</strong></h2>
                    <p>An Award-Winning International Pizza Chain with 50+ outlets Nationwide in Pakistan.</p>
                    <p>Broadway’s magical flavors with the secrets in crust, toppings and the sauces cheers you up when you’re down. The Pizza, bigger in size with the perfect combination of scrumptious toppings along with cheese and the golden stuffed crust marks our endless performance. Every Bite is a Performance!</p>
                    <div className="our-mission  p-4">
                        <h2>Our Mission</h2>
                        <p className='pt-4'>We aim to serve the highest quality products and provide uncompromising heartfelt services to our valued customers across Pakistan.</p>
                        <ul className=''>
                            <li><GiCheckMark className=" bg-success rounded-circle text-white fw-bolder"/><span className='m-2'>Quality Ingredients</span></li>
                            <li><GiCheckMark className="bg-success rounded-circle text-white fw-bolder"/><span className='m-2'>Friendly Service</span></li>
                            <li><GiCheckMark className="bg-success rounded-circle text-white fw-bolder"/><span className='m-2'>Customer Satisfaction</span></li>
                        </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                   <div className="about-img">
                    <figure>
                        <img src={aboutImg} className='img-fluid img-1'  alt="about image" />
                    </figure>
                   </div>
                </div>
            </div>
        </div>
       </div> 


       
    </>
  )
}

export default AboutUs

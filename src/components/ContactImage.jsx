import React from 'react'
import Detail1 from '../assets/Detail1.jpg'
import Detail2 from '../assets/Detail2.jpg'
import Button from './subcomponents/Button'
const ContactImage = () => {
  return (
    <>
    <div className='contactimage p-5 ' >
    <div className='container'>
        <div className='row'>
            <div className='col-md-6  '>
              <div className='contact_content'>
              <div className='contact-image'>
              <img src={Detail1 } alt='contact-image ' className='img-fluid rounded'/>
              </div>
              <div className='contact-data '>
                <h2>EXCLUSIVELY<br/> FOR YOU</h2>
                <span> start at $7.50</span><br/>
                <Button 
             butttons="contact-order-button"
             name='Order Now'
              />
              </div>
              </div>
            </div>
            <div className='col-md-6  '>
            <div className='contact_content'>
            <div className='contact_img'>
            <img src={Detail2 } alt='contact-image ' className='img-fluid rounded'/>
            </div>
            <div className='contact-data'>
                <h2>EXCLUSIVELY<br/> FOR YOU</h2>
                <span> start at $7.50</span>
                <br/>
                <Button 
             butttons="contact-order-button"
             name='Order Now'
             
              />
              </div>
              </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default ContactImage
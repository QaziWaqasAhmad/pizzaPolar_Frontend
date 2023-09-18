import React from 'react'
import Detail1 from '../assets/Detail1.jpg'
import Detail2 from '../assets/Detail2.jpg'
import Detail3 from '../assets/Detail3.jpg'
import Detail4 from '../assets/Detail4.jpg'
const ImagesDetail = () => {
  return (
    <>
    <div className='ourstory p-5 ' >
    <div className='container'>
        <div className='row'>
            <div className='col-md-3  '>
              <div className='story_img'>
              <img src={Detail1 } alt='story-image ' className='img-fluid rounded'/>
              </div>
            </div>
            <div className='col-md-3  '>
            <div className='story_img'>
            <img src={Detail2 } alt='story-image ' className='img-fluid rounded'/>
            </div>
            </div>
            <div className='col-md-3 '>
            <div className='story_img'>
            <img src={Detail3 } alt='story-image ' className='img-fluid rounded'/>
            </div>
            </div>
            <div className='col-md-3'>
            <div className='story_img'>
            <img src={Detail4 } alt='story-image ' className='img-fluid rounded'/>
            </div>
            </div>
        </div>
    </div>

    </div>
    </>
  )
}

export default ImagesDetail
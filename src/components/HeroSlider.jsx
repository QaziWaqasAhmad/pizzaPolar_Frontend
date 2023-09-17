import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

const HeroSlider = () => {
  return (
    <>
     
     <div className="hero_section mt-4 p-3">
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-pause="hover" data-bs-interval="5000">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100 img-1" alt="First Slide"/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100  img-1" alt="Second Slide"/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100 img-1 " alt="Third Slide"/>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100 img-1" alt="Fourth Slide"/>
    </div>
    <div class="carousel-item">
      <img src={img5} class="d-block w-100 img-1" alt="Fifth Slide"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     </div>
      
    </>
  )
}

export default HeroSlider

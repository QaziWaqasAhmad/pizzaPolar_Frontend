import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import {GiShoppingCart} from "react-icons/gi"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    const updateCartCount = (newCount) => {
      setCartCount(newCount);
    };
  return (
    <>
    
      <nav class="navbar navbar-expand-lg navbar-light bg-white p-3 d-md-block d-none ">
  <div class="container">
    {/* <Link class="navbar-brand" to="/">Pizza Polar</Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/orders" >Orders</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/menu" >Menu</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/locations" >Locations</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
 
      <div className="cart-icon d-flex align-items-center gap-3 justify-content-center  ">
      <button className='btn add-to-cart-button '>
      <span>Add To Cart</span>
      </button>
       <Link to="/cart" className='text-dark fs-2 mb-2' ><GiShoppingCart/></Link>
       <span className="cart-count">{cartCount}</span> 
      

      </div>    
    </div>
  </div>
</nav>

          {/* mobile version menubar */}

          <nav className="navbar navbar-expand-lg navbar-light d-md-none d-block">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          PizzaPolar
        </Link>
        <button
          className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders" onClick={closeMenu}>
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" onClick={closeMenu}>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/locations" onClick={closeMenu}>
                Locations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="cart-icon d-flex align-items-center gap-2 justify-content-center">
          <Link to="/cart" className='text-dark fs-2 mb-2' ><GiShoppingCart/></Link>
       <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar

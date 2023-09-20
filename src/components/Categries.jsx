import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../products/Products';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import "./style.css"
import "../components/Carousel"
const Categories = () => {
  const [getProductsHome, SetGetProductsHome] = useState('');

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    getAllProducts()
      .then((res) => {
        if (res.status === 200) {
          const data = res?.data?.data;
          console.log(data);
          SetGetProductsHome(data);
        }
      })
      .catch((error) => {
        console.log(error, 'Error');
      });
  };

  return (
    <>
      <div className="wrapper mx-auto">
      <div className="icon"><i id="left" className="fa fa-angle-left"></i></div>
      <ul className="tabs-box">
        <li className="tab">Coding</li>
        <li className="tab active">JavaScript</li>
        <li className="tab">Podcasts</li>
        <li className="tab">Databases</li>
        <li className="tab">Web Development</li> 
        <li className="tab">Unboxing</li>
        <li className="tab">History</li>
        <li className="tab">Programming</li>
        <li className="tab">Gadgets</li>
        <li className="tab">Algorithms</li>
        <li className="tab">Comedy</li>
        <li className="tab">Gaming</li>
        <li className="tab">Share Market</li>
        <li className="tab">Smartphones</li>
        <li className="tab">Data Structure</li>
      </ul>
      <div className="icon"><i id="right" className="fa fa-angle-right"></i></div>
    </div>

    </>
  );
};

export default Categories;

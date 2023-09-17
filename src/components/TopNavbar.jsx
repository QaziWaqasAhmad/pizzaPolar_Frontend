import React from 'react'
import topImages from "../assets/services.jpg"
import {ImLocation2} from "react-icons/im"
import { Link } from 'react-router-dom'


const TopNavbar = () => {
  return (
    <>
<div className="top-navbar  p-4 text-center d-md-block d-none">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-md-4">
                <h3>Pizza Polar</h3>
            </div>
            <div className="col-12 col-md-4 d-md-block d-none">
                <div className="banner_img">
                    <img src={topImages} alt="top images" className='w-75' />
                </div>                
            </div>
            <div className="col-12 col-md-4 d-md-block d-none">
               <div className="top-location gap-3 d-flex align-items-center justify-content-center">
               <span>See Location</span>
               <div className="icon ">
               <Link to="/locations"><i className='text-dark'><ImLocation2 className=' fs-1 bg-warning rounded-circle p-2'/></i></Link>
               </div>
               
               </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default TopNavbar

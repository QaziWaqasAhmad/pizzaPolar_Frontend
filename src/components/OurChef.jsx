import React from 'react'
import ourchefimage from '../assets/chef.jpg'
import Button from './subcomponents/Button'
const OurChef = () => {
  return (
    <>
      <div className='ourchef p-5 ' >
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <h2 className='pt-4'>Our Master Chef</h2>
            <p className='pt-3'>Ut nec hinc dolor possim.Ea mei nostrum imperdiet deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim. Ut nec hinc dolor possim.</p>
            <p className='pt-3'>Mei ludus efficiendi ei.
             Sea summo mazim ex, ea errem eleifend definitionem vim. Ut nec hinc dolor possim. Ea mei nostrum imperdiet deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim.</p>
             <Button 
             butttons="chefButton"
             name='Discover Our Menu'
             
              />

            </div>
            <div className='col-md-6 '>
            <div className='chef-image '>
                <img src={ourchefimage } alt='chef-image ' className='img-fluid rounded'/>
            </div>
              </div>
              </div>
    </div>
    </div>  
    </>
  )
}

export default OurChef
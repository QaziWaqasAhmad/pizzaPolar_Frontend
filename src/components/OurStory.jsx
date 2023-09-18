import React from 'react'
import ourstoryimage from '../assets/ourstory.jpg'
const OurStory = () => {
  return (
    <>
    <div className='ourstory p-5 ' >
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <div className='story-image '>
                <img src={ourstoryimage } alt='story-image ' className='img-fluid rounded'/>
            </div>
            </div>
            <div className='col-md-6 '>
            <h2 className='pt-4'>Our Story</h2>
            <p className='pt-3'>Ut nec hinc dolor possim.Ea mei nostrum imperdiet deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim. Ut nec hinc dolor possim.</p>
            <p className='pt-3'>Mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim. Ut nec hinc dolor possim. Ea mei nostrum imperdiet deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim.</p>
            </div>
        </div>
    </div>

    </div>
    </>
  )
}

export default OurStory
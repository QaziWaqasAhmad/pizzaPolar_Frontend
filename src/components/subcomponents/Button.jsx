import React from 'react'

const Button = ({butttons, name}) => {
  return (
    <>
    <button className={butttons} >
    {name}
    </button>
    </>
  )
}


Button.defaultProps={
    butttons:"default_button",
    name:"Click"
}


export default Button
import React from 'react'
import './Social.scss'

const Social = ({logo, title, url}) => {
  const handleRedirect = () => {
    window.location.href = url;
  }
  return (
    <div className='social' onClick={handleRedirect}>
        <img src={logo} alt="" />
        <h1>{title}</h1>
    </div>
  )
}

export default Social
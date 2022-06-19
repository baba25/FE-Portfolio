import './index.scss';
import Logoimg from '../../../assets/images/Logoimg.png'
import React from 'react'

function Logo() {
  return (
    <div className='logo-container'>
        <img className='solid-logo' alt="/" src={Logoimg}/>
    </div>
  )
}

export default Logo
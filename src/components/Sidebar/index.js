import './index.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logoimg from '../../assets/images/Logoimg.png'
import Logotext from '../../assets/images/Logo-text.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logoimg} alt="logo" />
            <img className='logo-text' src={Logotext} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={ faHome } color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={ faUser } color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={ faEnvelope } color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://google.com'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://google.com'>
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://google.com'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://google.com'>
                    <FontAwesomeIcon icon={faBehance} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
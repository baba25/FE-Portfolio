import { useState, useEffect } from 'react';
import Logoimg from '../../assets/images/Logoimg.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders'

const Home =() => {

  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['A', 'n', 'a', 's']
  const jobArray = ['w', 'e','b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setletterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  
  return (
    <div className="container home-page">
        <div className='text-zone'>
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass}_13`}>i,</span>
              <br />
              <span className={letterClass}>I</span>
              <span className={`${letterClass}_14`}>'m</span>
            <img src={Logoimg} alt="developer" />
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15}
            />
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22}
            />
            </h1>
            <h2>Frontend Developer / React Geek / UI&UX Designer</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />

        <Loader type='pacman' />
    </div>
  )
}


export default Home
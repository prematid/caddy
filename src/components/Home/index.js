import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import About from '../About'
import Portfolio from '../Portfolio'
import Contact from '../Contact'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['h', 'a', 't', 'a', 'k', 's', 'h', 'i', ' ', 's', 'h', 'a', 'r', 'a', 'n']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* <span className={letterClass}>S</span>
            <span className={`${letterClass} _12`}>ay hello to</span> */}
            <img
              src={LogoTitle}
              alt="logo"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
          </h1>
          <h2>Author- Paradoxon: all being sane, none rational</h2>
          <Link to="/contact" className="flat-button">
            Wish Her a Happy Birthday
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home

import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Caddy1 from '../../assets/images/Caddy1.jpg'
import Caddy2 from '../../assets/images/Caddy2.jpg'
import Caddy3 from '../../assets/images/Caddy3.jpg'
import Caddy4 from '../../assets/images/Caddy4.jpg'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 's', 'h', 'a', 't', 'a', 'k', 's', 'h', 'i',]}
              idx={15}
            />
          </h1>
          <p>
            Shatakshi is an English literature graduate from St. Xavier's College, Ranchi and did her schooling from PVSS DAV Public School, Koderma.
          </p>
          <p align="LEFT">
            Having won plethora of debate & writing competitions in her school days, she started directing plays realted to social issues and it was from there that she started developing a keen interest in social causes.
            She went on to publish a book that comprised of a collection of her poems that talks about the inherent social constructs around religion, women and the people who are often considered marginalised.
          </p>
          <p>
            If she were to be described in one sentence that would be a really generous
            person, a beautiful daughter, a literature fanatic,
            a music graduate, and an art-obsessed soul!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img
                src={Caddy1}
                alt="logo"
                width="200"
                height="200"
              />
            </div>
            <div className="face2">
              <img
                src={Caddy2}
                alt="logo"
                width="200"
                height="200"
              />
            </div>
            <div className="face3">
              <img
                src={Caddy3}
                alt="logo"
                width="200"
                height="200"
              />
            </div>
            <div className="face4">
              <img
                src={Caddy4}
                alt="logo"
                width="200"
                height="200"
              />
            </div>
            <div className="face5">
              <img
                src={Caddy4}
                alt="logo"
                width="200"
                height="200"
              />
            </div>
            <div className="face6">
              <img
                src={Caddy4}
                alt="logo"
                width="200"
                height="200"
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

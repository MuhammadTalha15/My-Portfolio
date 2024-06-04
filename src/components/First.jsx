import React from 'react'
import '../styles/First.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import GithubLogo from '../assets/Icons/github.svg'
import FacebookLogo from '../assets/Icons/facebook.svg'
import InstagramLogo from '../assets/Icons/instagram.svg'
import StackLogo from '../assets/Icons/stack-overflow.svg'
import Polygon from '../assets/Logo/pngwing.com.png'

const First = () => {

    const [text] = useTypewriter({
        words: ['Computer Science Student', 'Web Developer', 'Web Designer', 'Programmer'],
        loop: {},
      })

  return (
    <>
        <section className='first'>
          <div className="txt-cnt">
            <span className="greeting">HELLO THERE</span>
            <h2 className="naming">My name is</h2>
            <span className='name'>Muhammad Talha</span>
            <h2 className='intro'>I am a  <span className='prof'>{text}</span><span className='thread'><Cursor /></span></h2>
            <p className='para'>Passionate about transforming ideas into elegant and functional code.</p>
            <button className='cntct'><span className='trans'></span>Contact Me</button>

            <div className="social-btn-cnt">
              <a href="#" className='github a'>
                <img src={GithubLogo} className='social github' alt="" />
              </a>
              <a href="#" className='facebook a'>
                <img src={FacebookLogo} className='social face' alt="" />
              </a>
              <a href="#" className='instagram a'>
                <img src={InstagramLogo} className='social insta' alt="" />
              </a>
              <a href="#" className='stack a'>
                <img src={StackLogo} className='social stack' alt="" />
              </a>
            </div>
          </div>

          {/* <img className='polygon-i' src={Polygon} alt="" /> */}
        </section>
    </>
  )
}

export default First

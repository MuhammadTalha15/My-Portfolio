import React from 'react'
import '../styles/fourth.css'
import GithubLogo from '../assets/Icons/github.svg'
import FacebookLogo from '../assets/Icons/facebook.svg'
import InstagramLogo from '../assets/Icons/instagram.svg'
import StackLogo from '../assets/Icons/stack-overflow.svg'

const Fourth = () => {
  return (
    <>
      <section className='fourth'>
        <section className="f-header">
          <h2 className="f-head">CONTACT ME</h2>
          <span className='f-head-after'>Feel Free to Email Me</span>
        </section>
        <section className="inpt-frm-cont-cnt">
          <div className="container">
            <div className="profile-pic"></div>
            <h3 className="email">talhaz5518@gmail.com</h3>
            <div className="social-btn-cnt">
              <a href="https://github.com/MuhammadTalha15" className='github a'>
                <img title='Github' src={GithubLogo} className='social github' alt="" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100092518021987" className='facebook a'>
                <img title='Facebook' src={FacebookLogo} className='social face' alt="" />
              </a>
              <a href="https://www.instagram.com/ttlha._15/?hl=en" className='instagram a'>
                <img title='Instagram' src={InstagramLogo} className='social insta' alt="" />
              </a>
              <a href="https://stackoverflow.com/users/23203699/muhammad-talha" className='stack a'>
                <img title='Stack Overflow' src={StackLogo} className='social stack' alt="" />
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Fourth

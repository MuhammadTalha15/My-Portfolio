import React from 'react'
import Polygon from '../assets/Logo/pngwing.com.png'
import '../styles/fourth.css'

const Fourth = () => {
  return (
    <>
        <section className='fourth'>
          <section className="f-header">
            <h2 className="f-head">CONTACT ME</h2>
          </section>
          <section className="inpt-frm-cont-cnt">
            <div className="wrapper">
              <div className="img">
                
              </div>
              <div className="frm">
                <input type="text" name="Name" id="" className='name-in input' placeholder='Name' />
                <input type="text" name="Email" id="" className='name-in input' placeholder='Email' />
                <input type="text" name="Subject" id="" className='name-in input' placeholder='Subject' />
                <textarea name="Message" id="" className='message input' placeholder='Message'></textarea>

                <input className='message-sub' type="submit" value="SUBMIT" />
              </div>
            </div>
          </section>
          <img className='poly-iv' src={Polygon} alt="" />
        </section>
    </>
  )
}

export default Fourth

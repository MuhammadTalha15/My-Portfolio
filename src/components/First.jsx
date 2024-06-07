import React from 'react'
import '../styles/First.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

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
            <button className='cntct'><Link className='linker' to="/Contact-Me">Contact Me</Link></button>

          </div>

        </section>
    </>
  )
}

export default First

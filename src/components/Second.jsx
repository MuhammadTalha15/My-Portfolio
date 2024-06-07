import React from 'react'
import '../styles/second.css'

const Second = () => {
    const user = {
        name: 'Muhammad Talha',
        dob: '18 July 2007',
        email: 'talhaz5518@gmail.com',
        adress: 'Naval Anchorage, Islamabad',
        phone: '(+92)333-545-9231',
        lang: 'English, Urdu'
      }

  return (
    <>
    <section className="second">
          <section className='s-header'>
            <h2 className='s-head'>ABOUT</h2>
              <span className='s-head-after'>Who am I?</span>
          </section>
          <section className="s-content">
            <section className="cont left">
              <h2 className='heading-cont'>I am Dynamic and Creative.</h2>

              <p className='opening'>With a foundation built on both Intermediate and Beginner-level creations, I am on a journey to evolve into a seasoned Computer Scientist.</p>

              <p className="second-para">As an intermediate-level computer science student, I am deeply immersed in various technology projects, showcasing a versatile skill set in web development, desktop applications, and data science. My primary tools include JavaScript, Python, React, Express, MongoDB, and C++. Javascript, React are done for my Frontend Projects, comprising Express and MongoDB responsible for Backend. Python is done for Data Science and Desktop Application with company of C++.</p>

              <button className='s-btn'>MY RESUME</button>
            </section>
            <section className="cont right">
              <div className="details">
                <ul className="dtail-list">
                  <li className='dtail-li-hd'>Name:</li>
                  <li className='dtail-li-hd'>Date of Birth:</li>
                  <li className='dtail-li-hd'>Email:</li>
                  <li className='dtail-li-hd'>Adress:</li>
                  <li className='dtail-li-hd'>Phone:</li>
                  <li className='dtail-li-hd'>Language:</li>
                </ul>
                <ul className="data-list">
                  <li className='dtail-data'>{user.name}</li>
                  <li className='dtail-data'>{user.dob}</li>
                  <li className='dtail-data'>{user.email}</li>
                  <li className='dtail-data'>{user.adress}</li>
                  <li className='dtail-data'>{user.phone}</li>
                  <li className='dtail-data'>{user.lang}</li>
                </ul>
              </div>
            </section>
          </section>
        </section>
    </>
  )
}

export default Second

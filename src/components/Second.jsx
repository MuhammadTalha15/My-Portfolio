import React from 'react'
import '../styles/second.css'
import Polygon from '../assets/Logo/pngwing.com.png'

const Second = () => {
    const user = {
        name: 'Muhammad Talha',
        dob: '18 July 2007',
        email: 'talhaz5518@gmail.com',
        adress: 'House 10, Block K, Naval Anchorage, Islamabad',
        phone: '(+92)333-545-9231',
        lang: 'English, Urdu'
      }

  return (
    <>
    <section className="second">
          <section className='s-header'>
            <h2 className='s-head'>ABOUT</h2>
          </section>
          <section className="s-content">
            <section className="cont left">
              <h2 className='heading-cont'>I am Dynamic and Creative.</h2>

              <p className='opening'>I am an Intermediate Computer Science student with a fervent love for programming.With a foundation built on both Intermediate and Beginner-level creations, I am on a journey to evolve into a seasoned Computer Scientist.</p>

              <p className="second-para">As an intermediate-level computer science student, I am deeply immersed in various technology projects, showcasing a versatile skill set in web development, desktop applications, and data science. My primary tools include JavaScript, Python, React, Express, MongoDB, and C++. With JavaScript and React, I build dynamic and responsive web interfaces. Express and MongoDB power the back-end, ensuring robust and efficient data management. Python is my go-to for data science, enabling insightful analysis and complex problem-solving. C++ adds to my proficiency, particularly in systems programming and performance-critical applications. Through these projects, I am continuously expanding my knowledge and preparing for a future in tech.</p>

              <button className='s-btn cv'>MY RESUME</button>
              <button className='s-btn slrn'>Learn More</button>
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
            <img className='polygon-ii' src={Polygon} alt="" />
          </section>
        </section>
    </>
  )
}

export default Second

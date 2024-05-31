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

              <p className="second-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur perspiciatis aut ab harum blanditiis omnis quae. Nemo, aliquam fugiat soluta voluptate cupiditate beatae saepe fugit iure delectus cumque alias!
                Non corporis aliquam consequuntur vitae maiores reprehenderit a totam. Cum reprehenderit saepe quidem sed esse perspiciatis expedita itaque iure mollitia, quia vero suscipit sapiente incidunt dolores ab adipisci, soluta architecto!</p>

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

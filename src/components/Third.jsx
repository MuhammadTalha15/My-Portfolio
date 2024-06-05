import React from 'react'
import '../styles/third.css'
import Polygon from '../assets/Logo/pngwing.com.png'

const Third = () => {
  return (
    <>
        <section className="third">
          <section className="t-header">
            <h2 className="t-head">PROJECTS</h2>
          </section>
          <section className='prjct-cont-cnt'>
            <div className="projects">
              <div className="fr-js-pr">
                <h3 className="prjct-hd">Javascript</h3>
                <a href="#" className='prjct-a'>Learn More</a>
              </div>

              <div className="sc-rt-rd">
                <h3 className="prjct-hd">React, Redux and Next JS</h3>
                <a href="#" className='prjct-a'>Learn More</a>
              </div>

              <div className="td-py-ml">
                <h3 className="prjct-hd">Pyhton and Machine Learning</h3>
                <a href="#" className='prjct-a'>Learn More</a>
              </div>

              <div className="ft-bk-nd">
                <h3 className="prjct-hd">Backend and Node JS</h3>
                <a href="#" className='prjct-a'>Learn More</a>
              </div>
            </div>

            <img className='polygon-iii' src={Polygon} alt="" />
          </section>
        </section>
    </>
  )
}

export default Third

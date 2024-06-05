import React from 'react'
import '../styles/third.css'

const Third = () => {
  return (
    <>
      <section className="third">
        <section className="t-header">
          <h2 className="t-head">PROJECTS</h2>
          <span className='t-head-after'>What I've done so Far?</span>
        </section>
        <section className='prjct-cont-cnt'>
          <div className="projects">
            <div className="para-cnt">
              <h2 className='prjct-heading-cont'>My Projects Overview.</h2>
              <p className='opening'>I have Craeted many frontend and Backend Web Projects as well as Desktop Applications and Automation Applications.</p>
              <p className="prjct-para">I am deeply immersed in various technology projects, showcasing a versatile skill set in web development, desktop applications, and data science. My primary tools include JavaScript, Python, React, Express, MongoDB, and C++. Javascript, React are done for my Frontend Projects, comprising Express and MongoDB responsible for Backend. Python is done for Data Science and Desktop Application with company of C++.</p>
              <a href='#' className='prjct-btn'><span className='github-ico'></span>GITHUB</a>
            </div>
            <div className='prjct-icons-cnt'>
              <h2 className='prjct-heading-cont'>Technologies that I use.</h2>
                <div className="ico-bx-cnt">
                  <a href='#' className="tech-cnt" title='HTML'>
                    <div className="icon-cnt h"></div>
                    <h2 className="title">HTML</h2>
                  </a>
                  <a href='#' className="tech-cnt" title='JavaScript'>
                    <div className="icon-cnt j"></div>
                    <h2 className="title">JavaScript</h2>
                  </a>
                  <a className="tech-cnt" title='React'>
                    <div className="icon-cnt r"></div>
                    <h2 className="title">React</h2>
                  </a>
                  <a href='#' className="tech-cnt" title='Python'>
                    <div className="icon-cnt p"></div>
                    <h2 className="title">Python</h2>
                  </a>
                  <a href='#' className="tech-cnt" title='C++'>
                    <div className="icon-cnt c"></div>
                    <h2 className="title">C++</h2>
                  </a>
                </div>
            </div>
          </div>

        </section>
      </section>
      <section className='third-two'>

      </section>
    </>
  )
}

export default Third

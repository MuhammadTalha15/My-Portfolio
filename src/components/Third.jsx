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
              <p className="prjct-para">I've developed a diversity of projects using a wide array of technologies. In front-end development, I've built numerous applications with JavaScript, React, Redux, Next.js, and Vite, ranging from dynamic single-page apps to complex user interfaces. On the back-end, I've created robust APIs with Python and Express.js, often integrating MongoDB for scalable database solutions. My experience with C and C++ includes optimizing performance-critical applications and contributing to open-source projects. I am continuously developing my skills and am eager to learn both existing and emerging technologies, ensuring I stay at the forefront of the tech landscape.</p>
              <a href='https://github.com/MuhammadTalha15' className='prjct-btn'><span className='github-ico'></span>GITHUB</a>
            </div>
            <div className='prjct-icons-cnt'>
              <h2 className='prjct-heading-cont'>Technologies that I use.</h2>
                <div className="ico-bx-cnt">
                  <a href='#' className="tech-cnt" title='HTML'>
                    <div className="icon-cnt h"></div>
                    <h2 className="title">HTML</h2>
                  </a>
                  <a href='https://github.com/MuhammadTalha15/JavaScript-Code' className="tech-cnt" title='JavaScript'>
                    <div className="icon-cnt j"></div>
                    <h2 className="title">JavaScript</h2>
                  </a>
                  <a href='#' className="tech-cnt" title='React'>
                    <div className="icon-cnt r"></div>
                    <h2 className="title">React</h2>
                  </a>
                  <a href='https://github.com/MuhammadTalha15/Python-Codes' className="tech-cnt" title='Python'>
                    <div className="icon-cnt p"></div>
                    <h2 className="title">Python</h2>
                  </a>
                  <a href='https://github.com/MuhammadTalha15/C-' className="tech-cnt" title='C++'>
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

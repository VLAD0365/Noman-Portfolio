import React from 'react'

function Skills() {
  return (
    <>
     <div className="Skills-Section">
      <h1>My <span>Skills</span>.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, possimus?</p>
      </div> 

      <div className="Skills-Icons">
        <div className="Basic-Section">
        <div className="html-Section">
          <span className="Span-Icon"><i className='bx bxl-html5' ></i></span>
          <h2>HTML <span>.</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae.</p>
        </div>
        <div className="html-Section">
          <span className="Span-Icon"><i className='bx bxl-css3' ></i></span>
          <h2>CSS <span>.</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae.</p>
        </div>
        <div className="html-Section">
          <span className="Span-Icon"><i className='bx bxl-bootstrap' ></i></span>
          <h2>BootStrap <span>.</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae.</p>
        </div>
        </div>


        <div className="Rare-Section">
        <div className="JS-Section">
          <span className="Span-Icon"><i className='bx bxl-javascript' ></i></span>
          <h2>JavaScript <span>.</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae.</p>
        </div>
        <div className="JS-Section">
          <span className="Span-Icon"><i className='bx bxl-react' ></i></span>
          <h2>React <span>.</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae.</p>
        </div>
        <div className="JS-Section">
          <span className="Span-Icon"><i className='bx bxl-python' ></i></span>
          <h2>Python Coming Soon<span>.</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae.</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Skills

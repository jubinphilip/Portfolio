import React from 'react'
import './projects.css'
import netflix from '../../assets/netflix.png'
import photonix from '../../assets/phtonix.png'
import capcon from '../../assets/cc.png'

function Projects() {
  return (
    <section className='works' id='works'>
      <h1 className='workstitle'>Projects</h1>
      <span className='workdes'>Welcome to my Projects Portfolio. Here, you will find a collection of my most significant projects, showcasing my skills and expertise in web development. Each project demonstrates my ability to solve problems, innovate, and deliver high-quality solutions. Explore the details to see how I have applied my knowledge and creativity to develop functional and impactful applications.</span>
      <div className='works-container'>
        <div className='work'>
          <img src={netflix} alt='Netflix Clone project'/>
          <h3>Netflix Clone</h3>
          <p>A sleek Netflix Clone App built with React.js and a third-party API. Users can browse a collection of movies and watch trailers on YouTube by clicking on a movie. The app features a simple, intuitive design for an enjoyable user experience.</p>
          <button><a target='_blank' rel="noopener noreferrer" href='https://github.com/jubinphilip/NetflixClone'>View Code</a></button>
        </div>
        
        <div className='work'>
          <img src={photonix} alt='Photonix project'/>
          <h3>Photonix</h3>
          <p>Photonix is an application built with PHP and MySQL where users can buy framed photos. Users can upload a photo, select a frame and photo size, and place an order for framing. This streamlines the process of customizing and ordering framed photos.</p>
          <button><a target='_blank' rel="noopener noreferrer" href='https://github.com/jubinphilip/Project1-Photonix'>View Code</a></button>
        </div>
        
        <div className='work'>
          <img src={capcon} alt='Capture Connect project'/>
          <h3>Capture Connect</h3>
          <p>Capture Connect is a robust application using React.js for the frontend, and Node.js with Express and MongoDB for the backend. It serves as a platform for camera rentals and connects users with freelance photographers</p>
          <button><a target='_blank' rel="noopener noreferrer" href='https://github.com/jubinphilip/Capture-Connect-Client'>View Code</a></button>
        </div>
      </div>
    </section>
  )
}

export default Projects
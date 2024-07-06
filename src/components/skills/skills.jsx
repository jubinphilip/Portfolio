import React from 'react'
import './skills.css'
import wdesign from '../../assets/design.png'
import webdevop from '../../assets/webdevop-removebg-preview.png'
import html from '../../assets/html.png'
import css from '../../assets/CSS.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import mongo from '../../assets/mongo.png'
import php from '../../assets/php.png'
import sql from '../../assets/sql.png'

function Skills() {
  return (
    <section className='skills' id='skills'>
        <span className='skilltitle'>What I DO🤔🤔</span>
        <span className='skilldesc'>"I am a self-taught web developer with a strong passion for continuous learning and a genuine enthusiasm for contributing my skills to the field. Although I do not have formal company experience, I have independently developed several projects that demonstrate my ability to innovate and solve problems. I am always eager to explore new technologies and continuously improve my expertise."</span>
        <div className='skillbars'>
            <div className='skillbar'>
            <img className='skillbarImg' src={wdesign} alt=''/>
            <div className='skillbartext'>
            <h2>Web Designing</h2>
            <p>""I'm a web designer passionate about crafting visually appealing, user-friendly interfaces. With expertise in responsive design, UI/UX best practices, and HTML/CSS/JavaScript, I continuously explore new trends to deliver exceptional web experiences.""</p>
            </div>
            </div>

            <div className='skillbar'>
            <img className='skillbarImg' src={webdevop} alt=''/>
            <div className='skillbartext'>
            <h2>Web Development</h2>
            <p>"As a web developer, I specialize in building dynamic user interfaces with React. I also leverage backend technologies like PHP, SQL, and MongoDB to create responsive, visually appealing websites. My projects showcase seamless integration of frontend and backend functionalities, delivering comprehensive web solutions."</p>
            </div>
            </div>
        </div>
        <div className='skillsimgs'>
        <img src={html} alt='skill' className='skillimage'/>
        <img src={css} alt='skill' className='skillimage'/>
        <img src={js} alt='skill' className='skillimage'/>
        <a href='https://react.dev/'><img src={react} alt='skill' className='skillimage'/></a>
        <img src={node} alt='skill' className='skillimage'/>
        <img src={php} alt='skill' className='skillimage'/>
        <img src={sql} alt='skill' className='skillimage'/>
        <img src={mongo} alt='skill' className='skillimage'/>
        </div>
    </section>
  )
}

export default Skills

import React, { useEffect, useRef } from 'react';
import './intro.css';
import img from '../../assets/jubin.png';


function Intro() {
  const nameRef = useRef(null);

  useEffect(() => {
    const nameLetters = nameRef.current.children;
    Array.from(nameLetters).forEach((letter, index) => {
      setTimeout(() => {
        letter.style.opacity = '1';
      }, 200 * index); 
    });
  }, []);

  return (
    <section className='intro' id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introtext'>
          I'm <span ref={nameRef} className='introname'>
            {['J', 'u', 'b', 'i', 'n', ' ', 'P', 'h', 'i', 'l', 'i', 'p'].map((letter, index) => (
              <span key={index} style={{ opacity: '0' }}>{letter}</span>
            ))}
          </span>
          <br />
          Web Developer
        </span>
        <p className='intropara'>
          "I am a web developer with a deep passion for continuous
          <br /> learning and a genuine enthusiasm for contributing
          <br /> my skills and work to the field. I am always eager to <br />{' '}
          explore new technologies and innovate within the industry."
        </p>
        <a href='mailto:jubinphilip02@gmail.com'>
          <button className='btn'>Contact me</button>
        </a>
      </div>
      <img className='profile' src={img} alt='' />
    </section>
  );
}

export default Intro;

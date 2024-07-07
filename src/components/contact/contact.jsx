import React, { useRef } from 'react'
import './contact.css'
import fb from '../../assets/fb.jpg'
import insta from '../../assets/insta.jpg'
import linkedin from '../../assets/lin.jpg'
import emailjs from '@emailjs/browser'
function Contact() {
  const form=useRef()
  const sendEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_texcuyg', 'template_elx7lrt', form.current, 'ihGF9BLofjFMlrdqJ')
      .then((result) => {
        console.log(result.text);
        alert('Email Send')
        },(error) => {
          console.log(error.text);
          });
          }

  return (
    

    <section  className='contactPage' id='contact'>
        <div id='contact'>
        <h1 className='contactpagetitle'>Contact Me</h1>
        <span className='contactdes'>"Feel free to connect with me for any inquiries, collaboration opportunities, or to discuss potential projects. I'm always excited to engage with fellow enthusiasts and explore new ideas!"</span>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type='text' className='name' name='your_name' placeholder='Your Name' required/>
            <label>Email</label>
            <input type='email' className='email' placeholder='Your Email' name='your_email'  required/>
            <label>Contact Number</label>
            <input type='text' className='phone' placeholder='Your Contact Number' name='your_phone'  required/>
            <label>Message</label>
            <textarea name='message' className='message' placeholder='Your Message' rows="5"  required/>
            <button className='submit' type='submit' value='send'>Submit</button>
            <div className='links'>
                <a href='https://www.facebook.com/jubin.philip.58/' target='_blank' rel="noreferrer"><img src={fb} alt='client' className='link'/></a>
                <a href='https://www.instagram.com/jubin._.philip/' target='_blank' rel="noreferrer"><img src={insta} alt='client' className='link'/></a>
                <a href='https://www.linkedin.com/in/jubin-philip-92935b211/' target='_blank' rel="noreferrer"><img src={linkedin} alt='client' className='link'/></a>
            </div>
        </form>
        </div>
    </section>
  )
}

export default Contact

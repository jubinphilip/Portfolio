import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import download from '../../assets/download.png'
import { Link } from 'react-scroll'
import menuicon from '../../assets/menu.png'
function Navbar() {
  const handleDownload = () => {
    const fileId = '1bD2gOglpu5ds9Cg64xcyF5Sae44IQhpo'; 
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'jubinphilip.pdf'); // Set your CV filename

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const[menu,setMenu]=useState(false)
  return (
   
      <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopmenu'>
        <Link className='desktopmenulistitem' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        <Link className='desktopmenulistitem' activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}>About</Link>
        <Link className='desktopmenulistitem' activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
        <Link className='desktopmenulistitem' activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}>Contact</Link>
        </div>
    <button className='desktopmenubtn' onClick={handleDownload}>
      <img src={download} alt='' className='desktopmenuimg'  />Download CV
    </button>

    <img src={menuicon} alt='Menu' className='mobmenu' onClick={()=>setMenu(!menu)}/>
    <div className='navmenu' style={{display:menu?'flex':'none'}}>
    <Link className='listitem' activeClass='active' to='intro' spy={true} smooth={true} onClick={()=>setMenu(false)} offset={-100} duration={500}>Home</Link>
    <Link className='listitem' activeClass='active' to='skills' spy={true} smooth={true} onClick={()=>setMenu(false)} offset={-50} duration={500}>About</Link>
    <Link className='listitem' activeClass='active' to='works' spy={true} smooth={true} onClick={()=>setMenu(false)} offset={-50} duration={500}>Projects</Link>
    <Link className='listitem' activeClass='active' to='contact' spy={true} smooth={true} onClick={()=>setMenu(false)} offset={-50} duration={500}>Contact</Link>
    <button
    className="listitemm"
    style={{
      color: 'white',
      backgroundColor: 'black',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      fontWeight: 'bold',
      cursor: 'pointer'
    }}
  onClick={handleDownload}>
    Download CV
  </button>
    </div>
      </nav>
  )
}

export default Navbar

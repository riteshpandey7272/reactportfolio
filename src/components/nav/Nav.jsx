import React from 'react'
import './Nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai' 
import{BiBook} from 'react-icons/bi'
import{GoProject} from 'react-icons/go'
import{BiMessageSquareDetail} from 'react-icons/bi'
import{useState} from 'react'
import { IoMdPhotos } from "react-icons/io";


const Nav = () => {
  const[activeNav, setActiveNav]=useState('#');
  return (
   <nav>
    <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''} title='Home'><AiOutlineHome/></a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''} title='About'><AiOutlineUser/></a>
    <a href="#experince" onClick={()=>setActiveNav('#experince')} className={activeNav==='#experince'?'active':''} title='Experince'><BiBook/></a>
    <a href="#portfolio" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''} title='Project'><GoProject/></a>
    <a href="#gallery" onClick={()=>setActiveNav('#gallery')} className={activeNav==='#gallery'?'active':''} title='Gallery'><IoMdPhotos/></a>
    <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''} title='Contact Us'><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav
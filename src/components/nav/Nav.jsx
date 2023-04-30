import React from 'react'
import './Nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai' 
import{BiBook} from 'react-icons/bi'
import{GoProject} from 'react-icons/go'
import{BiMessageSquareDetail} from 'react-icons/bi'
import{useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav]=useState('#');
  return (
   <nav>
    <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
    <a href="#experince" onClick={()=>setActiveNav('#experince')} className={activeNav==='#experince'?'active':''}><BiBook/></a>
    <a href="#portfolio" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}><GoProject/></a>
    <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav
import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div>
      <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="" />
        </div>
        <div className=' m-8 flex items-center justify-center gap-4 text-2xl'>
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
          <FaYoutube />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
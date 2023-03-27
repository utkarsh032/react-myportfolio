import React from 'react'
import './Navbar.Style.css'

import { FiDownload } from 'react-icons/fi'
import { AiTwotoneHome } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
import { RiContactsLine } from 'react-icons/ri'
import { GiStaticGuard } from 'react-icons/gi'
import { SiCodeproject } from 'react-icons/si'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoYoutube } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className='homeScreen'>
      <div className='nav'>
        <div className='navbar'>
          <div className='logo'>
            <h1>Utkarsh Raj</h1>
          </div>
          <div className='links'>
            <a href='/'>
              <AiTwotoneHome />
              Home
            </a>
            {/* <a href='/'>Tool</a> */}
            <a href='/'>
              <GiSkills />
              Skill
            </a>
            <a href='/'>
              <GiStaticGuard />
              Statis
            </a>
            <a href='/'>
              <SiCodeproject />
              Product
            </a>
            <a href='/'>
              <RiContactsLine />
              Contact
            </a>
            <button className='btn'>
              Download CV
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FiDownload />
            </button>
          </div>
        </div>
      </div>

      <div class='hero'>
        <div class='name'>
          <h2>I'm</h2>
          <h1>Utkarsh Raj</h1>
          <div className='line-1'></div>
          <p>
            A software enginer who provides service for digital marketing and
            website designing content need, for all business with more than 2
            years of experience.
          </p>
        </div>

        <div class='image'>
          <div class='polygon'></div>
          <div class='boy'>
            <img
              src='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png'
              alt=''
            />
          </div>
        </div>

        <div class='service'>
          <h3>service</h3>
          <p>
            Let's build quality products in programming and design with my
            services.
          </p>
          <a href='/'>Show More</a>
          <div class='line-2'></div>
          <div class='social'>
            <ul>
              <li>
                <a href='/'>
                  <TiSocialLinkedinCircular />
                </a>
              </li>
              <li>
                <a href='/'>
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a href='/'>
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href='/'>
                  <IoLogoYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

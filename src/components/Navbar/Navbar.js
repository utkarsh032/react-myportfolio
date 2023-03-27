import React from 'react'
import './Navbar.Style.css'

import { FiDownload } from 'react-icons/fi'
import { AiTwotoneHome } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
import { RiContactsLine } from 'react-icons/ri'
import { GiStaticGuard } from 'react-icons/gi'
import { SiCodeproject } from 'react-icons/si'

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

      {/* <div class='hero'>
        <div class='name'>
          <h2>I'm</h2>
          <h1>Utkarsh Raj</h1>
          <div>line</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            doloremque porro asperiores ipsum nesciunt! Ipsam nemo natus
            repellat minima unde perspiciatis veritatis illum.
          </p>
        </div>

        <div class='image'>
          <div class='polygon'>ok</div>
          <div class='boy'>
            <img
              src='https://s3.ivisa.com/website-assets/blog/id-photo2.jpg'
              alt=''
            />
          </div>
        </div>
        <div class='service'>
          <h3>service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi
            molestiae doloribus neque officiis? Excepturi officia asperiores
            expedita incidunt rem natus, aliquid, alias distinctio culpa, rerum
            cumque vitae aut corrupti!
          </p>
          <button>Show More @</button>
          <div class='social'>
            <ul>
              <li>
                <a href='/'>Fb</a>
              </li>
              <li>
                <a href='/'>Tw</a>
              </li>
              <li>
                <a href='/'>In</a>
              </li>
              <li>
                <a href='/'>Pi</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default Navbar

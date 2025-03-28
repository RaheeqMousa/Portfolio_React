import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { MdBorderColor } from 'react-icons/md';
import style from './about.module.css'

export default function AboutUs() {

      
    
  return (
    <div className={`p-5 ${style.styles}`}>
        <div className='d-flex justify-content-center align-items-center flex-column gap-5'>
            <h3>About</h3>
            <div className={`${style.about}`}>
                  
                <p className={`${ style.paragraphStyle}`}>
                    Hi, I'm Raheeq Mousa, a passionate web developer with experience in building responsive and user-friendly websites. I specialize in front-end development using technologies like React, HTML, CSS, and JavaScript to create engaging digital experiences. Whether it's an eCommerce platform or a personal project, I focus on clean code, seamless performance, and intuitive design to bring ideas to life                
                </p>
                
            </div>

        </div>
    </div>

  )
}

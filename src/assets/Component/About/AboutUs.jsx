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
                    Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </p>
                <p className={`${ style.paragraphStyle}`}>
                    You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                </p>
                
            </div>
            <button className={`p-3 ${style.buttonStyle}`}><FaDownload size={25} color='white'></FaDownload>Free Download!</button>
        </div>
    </div>

  )
}

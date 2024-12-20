import React from 'react'
import Raheeq from './RaheeqProfilePicture.jpeg'; 
import { FaStar } from 'react-icons/fa';
import style from './profile.module.css';
export default function Profile() {

  return (
    <div className={`py-5 ${style.back}`}>
        <div className={`d-flex justify-content-center mt-5 ` }>
            <img src={Raheeq} className={`${style.profile_style}`} ></img>
        </div>
        <div className='d-flex justify-content-center gap-3 mt-5'>
          <div className={`${style.divide_line}`}></div>
          <FaStar size={45} color='white'/>
          <div className={`${style.divide_line}`}></div>
        </div>

        <p className={`mt-3 ${style.major}`}>Front End Developer</p>

    </div>
  )
}

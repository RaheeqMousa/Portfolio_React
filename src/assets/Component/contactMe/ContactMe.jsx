import React from 'react';
import style from './contactMe.module.css'
import { FaStar} from 'react-icons/fa';
export default function ContactForm() {
  return (
    <div className='p-5'>
      <div className='container'>
        <div className='d-flex flex-column align-items-center gap-3 p-5'>
            <h4>Contact Me</h4>
            <div className='d-flex justify-content-center gap-3 mt-2'>
                      <div className={`${style.divide_line}`}></div>
                      <FaStar size={45} color='#1a252f'/>
                      <div className={`${style.divide_line}`}></div>
            </div>
            <input type="text" placeholder="Full Name" className="form-control" />
            <input type="email" placeholder="Email Address" className="form-control" />
            <input type="tel" placeholder="Phone Number" className="form-control" />
            <textarea placeholder="Message" className="form-control"></textarea>
            <button type="submit" className="btn btn-primary w-25">Send</button>
        </div>
      </div>
    </div>
  );
}

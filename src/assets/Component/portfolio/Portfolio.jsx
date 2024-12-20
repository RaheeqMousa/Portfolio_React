import React from 'react'
import PortfolioImage from './PortfolioImage.png';
import { FaStar } from 'react-icons/fa';
 import style from './portfolio.module.css'


export default function () {

  return (
    <div className={`${style.par}`}>
      <div className='container py-5'>

          <h2 className={`text-center py-3`}>Portfolio</h2>

          <div className='d-flex justify-content-center gap-3 mt-2 mt-3 mb-5'>
              <div className={`${style.divide_line}`}></div>
                <FaStar size={45} color='#1a252f'/>
              <div className={`${style.divide_line}`}></div>
          </div> 

          <div className='row'>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <img src={PortfolioImage} />
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <img src={PortfolioImage} />
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <img src={PortfolioImage} />
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <img src={PortfolioImage} />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <img src={PortfolioImage} />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <img src={PortfolioImage} />
              </div>
          </div>
            
      </div>
    </div>

  )
}

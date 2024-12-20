import React from 'react'
import PortfolioImage from './PortfolioImage.png';

export default function () {

  const images_style={
    width: '350px',
    height: '250px',
    margin: '10px',
    border: '1px solid black',
    borderRadius: '12px'
  }

 

  return (
    <div>
      <div className='container py-5'>
        <div className='row py-5'>
          <h2 className='text-center py-3'>Portfolio</h2>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <img src={PortfolioImage} style={images_style}/>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <img src={PortfolioImage} style={images_style}/>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <img src={PortfolioImage} style={images_style}/>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <img src={PortfolioImage} style={images_style}/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <img src={PortfolioImage} style={images_style}/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <img src={PortfolioImage} style={images_style}/>
            </div>
        </div>
      </div>
    </div>

  )
}

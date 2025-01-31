import React from 'react'
import reactECommerce from '/ReactECommerceWebsite.png';
import elraheeqStore from '/elraheeqStore.png';
import crudReact from '/CrudReact.png'
import SmallStore_js from '/SmallStoreJS.png'
import CoursesWebsite from '/CoursesWebsiteHTMLCSS.png'
import { FaStar } from 'react-icons/fa';
import style from '/portfolio.module.css'
import { Link } from 'react-router-dom';


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
                <Link to={'https://goqwikly.onrender.com'} target="_blank">
                  <img src={reactECommerce} />
                </Link>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <Link to={'https://raheeqmousa.github.io/3lRaheeq-Store/'} target="_blank">
                  <img src={elraheeqStore} />
                </Link>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <Link to={'https://react-crud-project-rlw4.onrender.com/'} target="_blank">
                  <img src={crudReact} />
                </Link>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <Link to={'https://raheeqmousa.github.io/Products-according-to-the-chosen-category/'} target="_blank">
                  <img src={SmallStore_js} />
                </Link>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <Link to={'https://raheeqmousa.github.io/PROJECT-1/'} target="_blank">
                    <img src={CoursesWebsite} />
                </Link>
              </div>

          </div>
            
      </div>
    </div>

  )
}

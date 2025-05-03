import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-1.png'
import IMG2 from '../../assets/portfolio-2.png'
import IMG3 from '../../assets/portfolio-3.png'
import IMG4 from '../../assets/portfolio-4.png'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>WRTH Digital Website</h3>
            <div className="portfolio_item-cta">
              <a href="https://www.wrthdigital.com/" className='btn btn-primary' target='_blank'>Website</a>
            </div>
          
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>KWE Network (Prototype Website)</h3>
            <div className="portfolio_item-cta">
              <a href="https://kwe-website.webflow.io/" className='btn btn-primary' target='_blank'>Website</a>
            </div>
          
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Jan Jefferson O. Lam Portfolio v1</h3>
            <div className="portfolio_item-cta">
              <a href="https://driblle.com/Alien_pixels" className='btn btn-primary' target='_blank'>Website</a>
            </div>
          
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>To-Do-List Web Application</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com" className='btn'>Github</a>
            </div>
          
        </article>
      </div>
    </section>
  )
}

export default Portfolio
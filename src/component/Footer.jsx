import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='global-footer'>
          <h3>Contact</h3>
          <ul className='footer-list'>
            <li className="footer-item">
              <a href="">메일</a>
              </li>
            <li className="footer-item">
              <a href="">전화</a>
              </li>
            <li className="footer-item">
              <a href="">유튜브</a>
              </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
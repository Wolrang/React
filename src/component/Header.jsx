import React from 'react'
import logo from './images/applelogo.png'
import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <h1 className='logo'>
            <a href=''>
              <img src={logo} alt='logo'></img>
            </a>
          </h1>

          <h2 className='visually-hidden'>메뉴</h2>
          <ul className='gnb-list'>
            <li className="gnb-item">
              <a href="">menu1</a>
              </li>
            <li className="gnb-item">
              <a href="">menu2</a>
              </li>
            <li className="gnb-item">
              <a href="">menu3</a>
              </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
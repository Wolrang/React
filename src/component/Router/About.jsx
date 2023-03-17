import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link style={{ color: 'black' }} to='/'><button>home으로 이동</button></Link>
    </div>
  )
}

export default About
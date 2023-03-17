import React from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate()

  const goPage = () => {
  navigate('/products/:02')
  }

  return (
    <div>
      <div>Products페이지</div>
      <button onClick={goPage}>ProductDetail 페이지로 이동</button>
    </div>
  )
}

export default Products
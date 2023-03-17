import React from 'react'
import { useEffect, useState } from 'react'
import './UseModal.css'

const UseModal = () => {
  let [modal, setModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setModal(true)}, 2000)
  },[])

  return (
    <div>
      {
        modal == true ? <h1 className='modal'>2초 후에 사라지는 모달</h1> : null
      }
    </div>
  )
}

export default UseModal
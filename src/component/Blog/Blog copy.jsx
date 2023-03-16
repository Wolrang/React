import React from 'react'
import './Blog.css'
import { useState } from 'react'

const Blog = (props) => {
  const [title, setTitle] = useState([
    "Title1",
    "Title2",
    "Title3"
  ])

  let [name, setName] = useState(["이름1", "이름2", "이름3"])

  
  const [blogList, setBlogList] = useState(title);

  const deleteList = (index) => {
    const newBlogList = [...blogList];
    newBlogList.splice(index, 1);
    setBlogList(newBlogList);
    setTitle(newBlogList);
    console.log(newBlogList);
  }
  
  const [modal, setModal] = useState();

  return (
    <div>
      <div className='nav'>
        <h1>BLOG</h1>
      </div>

      {
        title.map((item, i) => {
          return (
            <div onClick={()=>{setModal(!modal)}} className='list' key={i}>
              <h4>{item}</h4>
              <p>안녕하세요. 저는 {name[i]} 입니다.</p>
              <button onClick={() => {deleteList(i)}}>글삭제</button>
            </div>
          )
        })
      }
      
      {
        modal == true ? <Modal></Modal> : null
      }
      
    </div>
  )
}

function Modal(props) {

  return (
    <div className='modal'>
      <h4>{props.name}</h4>
      <p>Content</p>
      <button onClick={props.deleteList}>닫기</button>
    </div>
  )
}

export default Blog
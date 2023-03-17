import React from 'react'
// import './a태그/Cards.css'


const Cards = () => {
  const data = [
    {
      title : 'Title1',
      content : 'Lorem ipsum dolor sit amet1.'
    },
    {
      title : 'Title2',
      content : 'Lorem ipsum dolor sit amet2.'
    },
    {
      title : 'Title3',
      content : 'Lorem ipsum dolor sit amet3.'
    },
  ]
  return (
    <div>
       <section className="post-box">
        {
          data.map((item, i) => {
            return (
              <Card name='post-card' title={item.title} content={item.content} text='post-card-txt' key={i}></Card>
            )
          })
        }
       </section>
    </div>
  )
}

function Card(props) {
  return (
    <div className={props.name}>
    <h2>{props.title}</h2>
    <p className={props.text}>
      {props.content}
    </p>
  </div>
  )
}

export default Cards;
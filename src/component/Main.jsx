import React from 'react'
import './Main.css'
import back from './images/back.jpeg'

const Main = () => {
  return (
    <div>
      <main>
        <div className='main-wrapper'>
          <section className='background' style={{backgroundImage : `url(${back})`}}>
            <div className='front-txt'>
               <h2 class="front-title">Lorem ipsum dolor sit.</h2>
               <p class="front-content">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quo id qui quibusdam dolores quam perspiciatis accusantium ullam
               autem molestiae itaque necessitatibus aut tempora ipsa reiciendis, omnis aspernatur nemo sequi?
              </p>
              <button class="front-btn" type="button">버튼</button>
            </div>
          </section>

          <section className='top'>
            <div className='second-txt'>
              <h2>Lorem, ipsum dolor sit.</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam officiis ut aut fugit laboriosam iste cumque! Quibusdam, quae atque ullam voluptatibus cumque quos sed, quia numquam recusandae exercitationem consectetur totam.
              </p>
            </div>
          </section>

          <section className='post-box'>
            <div className='post-card'>
              <h2></h2>
              <p className='post-card-txt'></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Main
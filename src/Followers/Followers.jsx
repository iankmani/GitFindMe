import React from 'react'
import './Followers.css'

const Followers = () => {
  return (
    <section className='Followers'>
          <h2>Followers (30)</h2>
          <div className='follower'>
            <img src="/Assets/Primer.jpeg" alt="profile picture of follower" />
            <h3>Bruce</h3>
            <a href="#">view Bruce</a>
          </div>
        </section>
  )
}

export default Followers
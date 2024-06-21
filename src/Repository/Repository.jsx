import React from 'react'
import './Repository.css'
//REPOSITORY ICONS
import { LiaStarSolid } from "react-icons/lia";
import { IoIosGitNetwork } from "react-icons/io";


const Repository = () => {
  return (
    <section className='Repositories'>
    <h2>Repositories (30)</h2>
      {/* dont forget to put repository as array at the top */}
      <div className='repository'>
        <div className='grey-part'>
          <h3>.github</h3>
          <p>Community health files for the @Github organization</p>
        </div>
        <div className='pinkish-part'>
        <p><IoIosGitNetwork/>677 forks</p>
        <p><LiaStarSolid/>44 stars</p>
        {/* dont forget icons */}
        </div>
        </div>
  
  
   
  </section>
  )
}

export default Repository
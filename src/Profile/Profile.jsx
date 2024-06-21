import React from 'react'
import './Profile.css'
// PROFILE ICONS
import { FaExternalLinkAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";

const Profile = () => {
  return (
    <section className='Profile'>
    <div className="image">
      <img src="/Assets/Primer.jpeg" alt="profile picture of user" />
    </div>
    <h2>GitHub</h2>
    <p>github</p>
    <p>How people build software</p>
    <div className='view-on-github'>
      <p><a href="">{<FaExternalLinkAlt />}  View on github</a></p>
      {/* dont forget icon */}
    </div>
    <nav>
      <ul className='user-details'>
        <li>{<CiLocationOn/>}san franscisco, CA</li>
        <li>{<RiGitRepositoryFill/>}495 repositories</li>
        <li>{<MdGroups/>}3000 followers</li>
        <li>{<MdGroups/>}200 following</li>
        {/* dont forget icons */}
      </ul>
    </nav>
  </section>
  )
}

export default Profile
import './App.css'
import Profile from './Profile/Profile';
import Repository from './Repository/Repository';
import Followers from './Followers/Followers';


function App() {
 

  return (
    <>
    
     <header className='header'>
      <div className='header-logo'>
        GITHUB FINDER
      </div>
      <div className='middle-part'>
        <p>By <a href="https://github.com/iankmani">Ian Kimani</a></p>
      </div>
      <div className="input">
        <input type="text" placeholder="enter a username" />
        <button>Search</button>
        </div>
     </header>

     
     <div className="main-component">
     <Profile/>
     <div className='right-side'>
     <Repository/>
     <Followers/>
     </div>
    
     </div>
    
        
      
        
        {/* <section className='Following'>
          <h2>Following</h2>
          <div className='following'>
            <img src="/assests/Primer.jpeg" alt="profile picture of following" />
            <h3>Alex</h3>
            <a href="#">view Alex</a>
          </div>
        </section> */}
       
    </>
  )
}

export default App

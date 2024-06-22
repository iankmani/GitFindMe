import './App.css'
import Profile from './Profile/Profile';
import Repository from './Repository/Repository';
import Followers from './Followers/Followers';
import Following from './Following/Following';


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
     <Following/>
     </div>
    
     </div>
    
        
      
        
        
       
    </>
  )
}

export default App

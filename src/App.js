
import React from 'react'
import './App.css'
import logo from './images/menu.svg';
import logo1 from './images/exit.svg';
import logo2 from './images/flag.jpg';
import logo3 from './images/girl-profile.jpg';
import logo4 from './images/picone.jpg';
import logo5 from './images/pic2.jpg';
import logo6 from './images/propic3.jpg';
import logo7 from './images/girl-profile.jpg';
import logo8 from './images/act-pic2.jpg';
import logo9 from './images/act-pic3.jpg';
import logo10 from './images/atc-pic4.jpg';
import logo11 from './images/desrt (1).jpg';
import logo12 from './images/2back.jpg';


function App() {
    
  return (
      
    
    <body>
    
    <div className="navbar">
    <div className="container">
        <a className="logo" href="#">Anesta<span>.</span></a>

        <img id="mobile-cta" className="mobile-menu" src={logo} alt="Open Navigation"></img>

        <nav>
            <img id="mobile-exit" className="mobile-menu-exit" src={logo1}alt="Close Navigation"></img>
            
           
            <div className="flag-button">
            <ul className="primary-nav">
                <li className="current"> <span id="search1" className="material-symbols-outlined">search</span>
                <input id="search-text" type="text" placeholder="Start typing to Search..."></input></li>
             
                <li>
                  <div className="user-profile">
                    <img src={logo2} alt="User Profile"></img>
                  </div>
                  
                  <div className="language-select">
                    <select>
                      <option value="en">English</option>
                      <option value="fr">Français</option>
                    </select>
                  </div>
                  
                </li>
                <div className="line">.</div>
                <li>
                    <span  className="material-symbols-outlined">
                        mode_comment
                        </span>
                </li>
                <li>
                    <span className="material-symbols-outlined">
                        notifications
                        </span>
                </li>
            </ul>

    </div>

            <ul className="profile-note">
          
                <li>
                  <div className="user-profile">
                    <img src={logo3} alt="User Profile"></img>
                    <div className="green-notification">.
                        <div className="green-notification1">.</div>


                    </div>
                  </div>
                  <div className="language-select">
                    <select>
                      <option value="en">Hi, Jack</option>
                      <option value="fr">Whr r u</option>
                    </select>
                  </div>
                </li>
              </ul>
        </nav>
    </div>
    </div>
   
       
    <div class="title-name1">
    <h1>Groups</h1>
    <div class="main-line1">.</div>
</div>
<div class="card-group1">
<div class="container1">
    <div class="card-title1">Search Groups</div>
   
    <div class="input-container1">
      <input type="text" class="text1" placeholder="Search Groups.."></input>
    </div>
    <button class="search-button1">Search</button>
</div>
</div>


<div class="card-group2">
<div class="container2">
    <div class="card-title2">
        <div class="text-title">
        <h1 class="color-red">All Groups <button class="button-groups">5</button></h1> 
        <h1>My Groups <button class="button-groups">3</button></h1> 
      
        </div>
        <div class="main-line2">.</div>
    </div>
   </div>
    <div class="input-container2">
        <div class="language-select">
            <select>
              <option value="en">Last Active</option>
              <option value="fr">Active Now</option>
            </select>
        </div>
    </div>
</div>


<div class="second-title">
    <h1>Viewing of 1-5 of 5 groups</h1>
</div>


<div class="last-cards">
    <div class="card-container">
        <div class="profile-pic"><img src={logo4} alt=""></img></div>
        <div class="card-content">
          <div class="card-image" style={{backgroundImage: `url(${logo5})`,}}></div>
          <div class="card-text">
            <h2>Join Group</h2>
            <p>Desingers Group</p>
            <h3>3 hours ago</h3>
            <div class="card-line"></div>
            <h4> Public Group /1 member</h4>
          </div>
        </div>
        </div>
      

        <div class="card-container">
        <div class="profile-pic"><img src={logo12} alt=""></img></div>
        <div class="card-content">
          <div class="card-image" style={{backgroundImage: `url(${logo6})`,}}></div>
          <div class="card-text">
            <h2>Leave Group</h2>
            <p>Bussiness Group</p>
            <h3>2 days ago</h3>
            <div class="card-line"></div>
            <h4> public Group /4 members</h4>
          </div>
        </div>
      </div>


        <div class="card-container">
        <div class="profile-pic"><img src={logo11} alt=""></img>
        </div>
        <div class="card-content">
          <div class="card-image" style={{backgroundImage: `url(${logo10})`,}}></div>
          <div class="card-text">
            <h2>Leave Group</h2>
            <p>Art Photographers</p>
            <h3>3 daysago</h3>
            <div class="card-line"></div>
            <h4> Public Group /4 membesr</h4>
          </div>
        </div>
      </div>

<div>
<div class="active-cards">
<div class="card">
  <div class="card-title">Active Members</div>
  <h5 class="main-line5"></h5>
  <div class="profile-pics">
    <img class="profile-pic" style={{backgroundImage: `url(${logo7})`, backgroundSize: 'cover',}}></img>
    <img class="profile-pic" style={{backgroundImage: `url(${logo8})`,backgroundSize: 'cover',}}></img>
    <img class="profile-pic" style={{backgroundImage: `url(${logo9})`,backgroundSize: 'cover',}}></img>
    <img class="profile-pic" style={{backgroundImage: `url(${logo10})`,backgroundSize: 'cover',}}></img>
  </div>
  </div>
</div>
<h4 class="view-all">View All</h4><span id="up-icon"  class="material-symbols-outlined">
    input_circle
    </span>
</div>




<div>
<div className="another-active-card">
  <div className="active-cards">
    <div className="card2">
      <div className="card-title">Recent Topics</div>
      <h5 className="main-line7"></h5>
      <div className="profile-pics1">
       <span><img className="profile-pic" style={{backgroundImage: `url(${logo3})`,backgroundSize: 'cover',}} alt="Profile 1"></img><h2>lol,is it ? Are you okay with it? Maybe it was waste.</h2> <h6>by rosy</h6></span>
        <span><img className="profile-pic" style={{backgroundImage: `url(${logo5})`,backgroundSize: 'cover',}} alt="Profile 2"></img><h2>golden rules for the designs are best.</h2><h6>by emma</h6></span>
        <span><img className="profile-pic" style={{backgroundImage: `url(${logo9})`,backgroundSize: 'cover',}} alt="Profile 3"></img><h2>Photographers are  always winners here.</h2><h6>by steven</h6></span>
        <span><img className="profile-pic" style={{backgroundImage: `url(${logo10})`,backgroundSize: 'cover',}} alt="Profile 4"></img>+<h2>Does startups are succesful here?</h2><h6>by john</h6></span> 
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>


      
<div class="right-main">
<div class="right-main-card">
  <div class="card4">
    <div class="card-title">
      <div class="container">
        <div class="menu">
          <div class="menu-item1"><div class="icon"><span class="material-symbols-outlined">home</span><h1>Home Pages</h1></div></div>
          
           <div  class="main-head-community "><h4>COMMUNITY</h4></div>     

          <div class="menu-item"><div class="icon"><span class="material-symbols-outlined">receipt_long</span><h1>Knowledge base</h1></div></div>
          <div class="menu-item"><div class="icon"><span class="material-symbols-outlined">send </span><h1>Activity</h1></div></div>
          <div class="menu-item"><div class="icon"><span class="material-symbols-outlined">chat </span><h1>Messages</h1></div></div>
          <div class="menu-item"><div class="icon"><span class="material-symbols-outlined">group </span><h1>Members</h1></div></div>
          <div class="menu-item"><div class="icon"><span class="material-symbols-outlined">diversity_3</span><h1>Forums</h1></div></div>
          <div class="menu-item"><div class="icon"><span class="material-symbols-outlined">calendar_month </span><h1>Events</h1></div></div>
          <div class="menu-item"><div class="icon"><span class="material-symbols-outlined">description </span><h1>documents</h1></div></div>
          <div class="menu-item-far"><div class="icon"><span class="material-symbols-outlined">star </span><h1>All Courses</h1></div></div>
          <div class="menu-item-far2"><div class="icon"><span class="material-symbols-outlined">flag </span><h1>All Courses</h1><button>hot</button></div></div>
        
          <div  class="main-head-community1"><h4>E-LEARNING</h4></div> 
          <div  class="main-head-community3"><h4>WP-JOB MANAGAER</h4></div> 
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</body>




  );
      
    
}
export default App;
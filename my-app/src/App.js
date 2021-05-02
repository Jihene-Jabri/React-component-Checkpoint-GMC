import logo from './logo.svg';
import './App.css';
import Profile_photo from './Component/Profile/ProfilePhoto';
import MyFullName from './Component/Profile/FullName';
import MyAdress from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
      <div className="profile_banner_container">
         <div className="profile_banner">
         <Profile_photo />
         <MyFullName />
         <MyAdress />
        </div>
        <div className="banner-text">
          <h1 className='title'>DOCTOR OF BIOLOGY</h1>
          <h4>“The good thing about science is that it's true whether or not you believe in it.” – Neil deGrasse Tyson</h4>
        </div>  
      </div>
      <div className="content">
        <div className="contentlorem"> 
         <div className="aboutme">
            <h3> ABOUT ME</h3> 
            <p> Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
              Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremL
              remLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
              LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLor
              emLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLo 
              LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLor
              emLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLo</p>
         </div>
         <div className="Achievment">
            <h3> Publications</h3> 
            <p> Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
              Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremL
              remLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
              LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLor
              emLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLo 
              LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLor
              emLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLo</p>
         </div>
         </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return(
        <nav>
          <p onClick={() => onRouteChange('signout')} className="align f3 link dim black underline pa3 pointer">Sign Out</p>
        </nav>
      )
      
    } else  {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className="align f3 link dim black underline pa3 pointer">Sign In</p>
          <p onClick={() => onRouteChange('register')} className="align f3 link dim black underline pa3 pointer">Register</p>
        </nav>
      );

    }
}

export default Navigation
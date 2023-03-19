import React from 'react';
import {Link} from 'react-router-dom';
import MyLogo from '../images/mylogo.png';

const Navbar = () => {
  return (
    <div className = 'navbar'>
      <div className="container">
        <div className="logo">
          <img src = {MyLogo} alt = 'logo' />
        </div>
        <div className="links">
          <Link className = 'link' to = '/?cat=fears'>
            <h6>Fears</h6>
          </Link>
          <Link className = 'link' to = '/?cat=relationships'>
            <h6>Relationships</h6>
          </Link>
          <Link className = 'link' to = '/?cat=selfesteem'>
            <h6>Self-Esteem</h6>
          </Link>
          <Link className = 'link' to = '/?cat=substances'>
            <h6>Substances</h6>
          </Link>
          <Link className = 'link' to = '/?cat=weight'>
            <h6>Weight</h6>
          </Link>
          <Link className = 'link' to = '/?cat=trauma'>
            <h6>Trauma</h6>
          </Link>
          <span>UserName</span>
          <span>Logout</span>
          <span className = 'compose'>
            <Link className = 'link' to = '/compose'>New</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
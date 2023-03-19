import React from 'react';
import MyLogo from '../images/mylogo.png';

const Footer = () => {
  return (
    <footer>
      <img src = {MyLogo} alt = 'logo' />
      <span>Designed 2023 by Brent S Gauthier using <b>React.js</b></span>
    </footer>
  );
};

export default Footer
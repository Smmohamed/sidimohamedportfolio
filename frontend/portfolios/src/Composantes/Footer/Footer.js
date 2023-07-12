import React from 'react';
import './Footer.css';
import git from '../../assets/Font_Awesome_5_brands_github.svg.png'
import linked from '../../assets/unnamed.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://github.com/Smmohamed" target="_blank" rel="noopener noreferrer"><img src={git} /></a>
        <a href="https://www.linkedin.com/in/sidi-mohamed-cheikh-ahmed-lelvally-25784a262/" target="_blank" rel="noopener noreferrer">
        <img src={linked} />
        </a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Sidi Mohamed.
      </p>
    </footer>
  );
}

export default Footer;

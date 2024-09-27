// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>
        <a href="/contact">Contact Us</a> | 
        <a href="/privacy-policy">Privacy Policy</a> | 
        <a href="/terms-of-service">Terms of Service</a>
      </p>
      <p>
        <a 
          href="https://www.facebook.com/akshay.manda.1" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Facebook
        </a> | 
        <a 
          href="https://x.com/AKSHAYR60593836" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Twitter
        </a> | 
        <a 
          href="https://www.youtube.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      </p>
      <p>Address | Contact</p>
    </footer>
  );
};

export default Footer;

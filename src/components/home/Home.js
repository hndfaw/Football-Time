import React from 'react';
import './home.css';
import homepageImg from '../../images/welcome-page.jpg'

export const Home = () => {
  return (
    <div>
      <h2 className="welcome">Welcome to Football Time! </h2>
      <img src={homepageImg} className="homepage-img" alt="homepage img" />
    </div>
  )
}

export default Home
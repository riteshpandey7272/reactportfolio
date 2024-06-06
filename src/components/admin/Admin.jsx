import React, { useState } from 'react';
import Blog from './Blog';
import Contact from './Contact';
import Profile from './Profile';
import Home from './Home';

const Admin = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='container mt-3'>
      <div className="card">
        <div className="card-body d-flex">
          <div className='w-25'>
            <div className='left-nav'>
              <p onClick={() => handleClick('Home')} className={activeItem === 'Home' ? 'active' : ''}>Home</p>
              <p onClick={() => handleClick('Profile')} className={activeItem === 'Profile' ? 'active' : ''}>Profile</p>
              <p onClick={() => handleClick('Blog')} className={activeItem === 'Blog' ? 'active' : ''}>Blog</p>
              <p onClick={() => handleClick('Contact Us')} className={activeItem === 'Contact Us' ? 'active' : ''}>Contact Us</p>
            </div>
          </div>

          <div className='w-75'>
            <div className='right-nav'>
              {activeItem === 'Profile' && <Profile />}
              {activeItem === 'Blog' && <Blog />}
              {activeItem === 'Contact Us' && <Contact />}
              {activeItem === 'Home' && <Home />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

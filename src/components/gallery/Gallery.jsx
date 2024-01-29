import React, { useState } from 'react';
import './Gallery.css';
import IMG1 from '../../assets/gallery/first.jpeg';
import IMG2 from '../../assets/gallery/second.JPG';
import IMG3 from '../../assets/gallery/third.jpeg';
import IMG4 from '../../assets/gallery/forth.JPG';
import IMG5 from '../../assets/gallery/fifth.jpeg';
import IMG6 from '../../assets/gallery/sixth.JPG';

const Gallery = () => {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleImageClick = (index) => {
    setZoomedIndex(index === zoomedIndex ? null : index);
  };

  return (
    <section id='gallery'>
      <h2>My Gallery</h2>
      <div className="container portfolio__container">
        {[IMG1, IMG2, IMG3, IMG4, IMG5, IMG6].map((image, index) => (
          <article key={index} className='portfolio__items'>
            <div
              className={`portfolio__item_image ${zoomedIndex === index ? 'zoomed' : ''}`}
              onClick={() => handleImageClick(index)}
            >
              {zoomedIndex === index && (
                <div className="overlay">
                  <img src={image} alt="" />
                </div>
              )}
              {zoomedIndex !== index && (
                <img src={image} alt="" />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

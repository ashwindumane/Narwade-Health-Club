import React from "react";

const Gallery = () => {
  const galleryImages = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg"
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title gallery-title">Our Fitness Community</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Fitness ${index + 1}`} 
              className="gallery-img" 
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

//D:\AB Projects\GYM\frontend\src\components\Gallery.jsx
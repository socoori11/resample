import React, { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  // 큰 이미지 상태값 (초기값: image1)
  const [selectedImage, setSelectedImage] = useState('/image/image1.jpg');

  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>

      <div className="thumbnail-group">
        {['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'].map((img, idx) => (
          <img
            key={idx}
            src={`/image/${img}`}
            alt={`Image ${idx + 1}`}
            width="200"
            onClick={() => setSelectedImage(`/image/${img}`)}
            className="thumbnail"
          />
        ))}
      </div>

      <div className="large-image-container">
        <img src={selectedImage} alt="Selected Large" width="600" />
      </div>
    </div>
  );
};

export default Home;

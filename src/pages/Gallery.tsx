import { useEffect, useState } from 'react';
import { ImageItem } from '../types/ImageItem';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    fetch('/gallery.json')
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error('갤러리 로드 실패:', err));
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>📷 갤러리</h2>
      <div className={styles.galleryGrid}>
        {images.map((img) => (
          <div key={img.id} className={styles.card}>
            <img src={img.url} alt={img.title} />
            <div className={styles.cardTitle}>{img.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

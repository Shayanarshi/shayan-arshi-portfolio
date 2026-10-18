import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isFading, setIsFading] = useState(false);
  const [isGone, setIsGone] = useState(false);
  
  useEffect(() => {
    // Start fading out after 1.8 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1800);
    
    // Completely remove from DOM after the fade transition finishes
    const removeTimer = setTimeout(() => {
      setIsGone(true);
    }, 2500);
    
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (isGone) return null;

  return (
    <div className={`preloader-overlay ${isFading ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <h1 className="preloader-text">Shayan Arshi.</h1>
        <div className="preloader-bar">
          <div className="preloader-progress"></div>
        </div>
      </div>
    </div>
  );
}

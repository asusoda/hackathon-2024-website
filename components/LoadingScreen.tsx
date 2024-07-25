// LoadingScreen.js
import React, { useState, useEffect } from 'react';
import "../styles/preloader.css";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation, like fetching data or loading resources
    const fakeAsyncOperation = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust the duration as needed
    };

    fakeAsyncOperation();
  }, []);

  return (
    <div className={`loading-screen ${loading ? 'visible' : 'hidden'}`}>
      {/* Your logo image */}
      <img src="/assets/images/duhacks.png" alt="Logo" className="logo" />
    </div>
  );
};

export default LoadingScreen;

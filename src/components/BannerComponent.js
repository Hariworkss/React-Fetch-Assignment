import React, { useState, useEffect } from 'react';
import { bannerArray } from '../data/bannerData'
import './BannerComponent.css'

function BannerComponent() {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  
    const handleNextBanner = () => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerArray.length);
    };
  
    const handlePrevBanner = () => {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === 0 ? bannerArray.length - 1 : prevIndex - 1
      );
    };
  
    // Use useEffect to set up automatic banner rotation (carousel)
    useEffect(() => {
      const intervalId = setInterval(handleNextBanner, 5000); // Change banner every 5 seconds
      return () => clearInterval(intervalId); // Cleanup when the component unmounts
    }, []);
  
    return (
        <div className="container-fluid mt-4  banner-div">
            <h1 className='text-center pt-2 pb-2 text-white text-bolder fw-bold text-dark shadow'>Welcome</h1>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div id="banner-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner text-center text-padd">
                {bannerArray.map((banner, index) => (
                  <div
                    key={banner.id}
                    className={`carousel-item ${index === currentBannerIndex ? 'active' : ''}`}
                  >
                    <h2 className='fw-bold '>{banner.text}</h2>
                    {banner.button && (
                      <a href={banner.link} className="btn btn-primary shadow mt-4">
                        Home
                      </a>
                    )}
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#banner-carousel"
                role="button"
                data-slide="prev"
                onClick={handlePrevBanner}
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#banner-carousel"
                role="button"
                data-slide="next"
                onClick={handleNextBanner}
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default BannerComponent;
  
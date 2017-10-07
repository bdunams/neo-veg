// Import React
import React from 'react';

// Import Top Vegetables Component
import TopVegetables from './top_vegetables';

// Returns Component JSX
const CenterPiece = () =>{
  return(
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active align-items-center">
              <img className="d-block img-fluid" src="images/slide_01.jpg" alt="First slide" />

              <div className="carousel-caption d-md-block carouselButton">
                  <p className="titleCarousel">Your Personal Garden Assistant</p>
                  <div className="primary-button herobutton">
                            <a href="/vegetables" className="scroll-link" data-id="about">Learn More</a>
                  </div>
              </div>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="images/slide_02.jpg" alt="Second slide" />
            <div className="carousel-caption d-md-block carouselButton">
                  <p className="titleCarousel">AVAILABLE YEAR ROUND</p>
                  <div className="primary-button herobutton">
                            <a href="/about-us" className="scroll-link" data-id="about">Learn More</a>
                  </div>
              </div>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="images/slide_03.jpg" alt="Third slide" />
            <div className="carousel-caption d-md-block carouselButton">
                  <p className="titleCarousel">BUILD YOUR OWN GARDEN</p>
                  <div className="primary-button herobutton">
                            <a href="/subscription" className="scroll-link" data-id="about">Learn More</a>
                  </div>
              </div>
          </div>
        </div>
      </div>

      <TopVegetables />
    </div>
  )
}

export default CenterPiece;
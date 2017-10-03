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
          <div className="carousel-item active">
            <img className="d-block img-fluid" src="images/slide_01.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="images/slide_02.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="images/slide_03.jpg" alt="Third slide" />
          </div>
        </div>
      </div>

      < TopVegetables />
    </div>
  )
}

export default CenterPiece;
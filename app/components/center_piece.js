// Import React
import React from 'react';

// Import Top Vegetables Component
import TopVegetables from './top_vegetables';

// Returns Component JSX
const CenterPiece = () =>{
  return(
    <div>
      <div className="jumbotron">
        <h2 className="text-center">Neo Veg</h2>
        <p className="text-center">
          <em>The Garden Assistant</em>
        </p>

      </div>

      < TopVegetables />
    </div>
  )
}

export default CenterPiece;
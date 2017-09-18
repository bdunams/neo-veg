// Import React
import React from 'react';

import TopVegetables from './top_vegetables';

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
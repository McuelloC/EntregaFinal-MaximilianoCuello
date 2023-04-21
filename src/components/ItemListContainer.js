import React from "react";

const ItemListContainer = ({ greeting }) => {
    return (
      <div className="container py-5">
        <h1 className="text-center mb-4">{greeting}</h1>
        
      </div>
    );
  };

export default ItemListContainer;

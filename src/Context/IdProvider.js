
import React, { useState } from 'react';
import { IdContext } from './IdContext';

const IdProvider = ({ children }) => {
  const [selectedItemId, setSelectedItemId] = useState(0);

  const handleSelectItem = (id) => {
    setSelectedItemId(id);
  };

  return (
    <IdContext.Provider value={{ selectedItemId, handleSelectItem,setSelectedItemId }}>
      {children}
    </IdContext.Provider>
  );
};

export default IdProvider;

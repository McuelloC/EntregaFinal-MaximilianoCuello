import { DataContext } from './DataContext';

import React, { useState, useEffect} from 'react';




export  const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://react-coderhouse-84503-default-rtdb.firebaseio.com/.json",
          {
            headers: {
              "Access-Control-Allow-Origin": "https://react-coderhouse-84503.web.app",
            },
          }
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};
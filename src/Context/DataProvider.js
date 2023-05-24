import { DataContext } from './DataContext';
import { collection, getDocs, getFirestore,orderBy } from "firebase/firestore";
import React, { useState, useEffect } from 'react';

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const itemCollection = collection(db, "products");
        const querySnapshot = await getDocs(itemCollection, orderBy("id","desc"));

        
          const fetchedData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setData(fetchedData);
        
      } catch (error) {
        console.log("Error fetching data:", error);
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

import { DataContext } from './DataContext';
import { addDoc, collection, getDocs, getFirestore, orderBy } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [orderid, setOrderid] = useState();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const itemCollection = collection(db, 'products');
        const querySnapshot = await getDocs(itemCollection, orderBy('id', 'desc'));

        const fetchedData = querySnapshot.docs.map((doc) => ({
          Firebaseid: doc.id,
          id: doc.data().id,
          ...doc.data(),
        }));
        setData(fetchedData);
      } catch (error) {
        console.log('Error en la conexión', error);
      }
    };

    fetchData();
  }, []);

  const sendOrder = (props) => {
    const orderData = {
      nombre: props.nombre,
      apellido: props.apellido,
      email: props.email,
    };

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    addDoc(ordersCollection, orderData)
      .then((docRef) => {
        setOrderid(docRef.id);
        setOrder(orderData);
      })
      .catch((error) => {
        console.error('Error al guardar la orden:', error);
      });
  };

  return (
    <DataContext.Provider value={{ data, sendOrder, orderid, order }}>
      {children}
    </DataContext.Provider>
  );
};

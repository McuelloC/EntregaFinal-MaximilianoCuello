import { useState, useEffect } from "react";
import ItemView from "./ItemView";

function Item() {
  const [data, setData] = useState(null);
 
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
    <>
    
      {data && data.map(item => (
        <ItemView 
          img={item.pictureURL} 
          title={item.title} 
          description={item.description} 
          id={item.id} 
          stock={item.Stock}
          price={item.price}
        />
       
      ))}
       
    </>
  );
}

export default Item;

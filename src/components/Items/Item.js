import { useState, useEffect } from "react";

function Item() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("https://react-coderhouse-84503-default-rtdb.firebaseio.com/")
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <img src={item.pictureUrl} alt="item" />
          <p>{item.price}</p>
          <p>{item.stock}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Item;

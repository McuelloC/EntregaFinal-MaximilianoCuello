
import ItemView from "../components/Items/ItemView";




const Productos = () => {
  const defaultitems = "Todo";




  return (
    <>
     
      <div className="row">
        <ItemView filter={defaultitems}/>
      </div>

    </>
  );
};

export { Productos };

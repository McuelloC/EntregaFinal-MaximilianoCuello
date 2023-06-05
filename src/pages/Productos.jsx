
import ItemView from "../components/Items/ItemView";
import { Footer } from "../components";




const Productos = () => {
  const defaultitems = "Todo";




  return (
    <>

      <div className="row">
        <ItemView filter={defaultitems} />
      </div>
      <Footer />
    </>
  );
};

export { Productos };

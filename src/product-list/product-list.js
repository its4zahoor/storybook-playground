import BitProductList from "@bit/its4zahoor.bit-react-tutorial.product-list";

const ProductList = ({label, color}) => {
  return (
    <div className="list">
        <h2 style={{color}}>{label}</h2><br/>
      <BitProductList/>
    </div>
  );
}

export default ProductList;
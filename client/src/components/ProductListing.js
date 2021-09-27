import Product from "./Product";

function ProductListing({data}) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {data.map((obj) => {
        return (
          < Product data={obj} key={obj.id}/>
        )
      })}
    </div>
  );
}

export default ProductListing;
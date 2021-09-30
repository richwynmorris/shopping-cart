import Product from "./Product";

function ProductListing({productData, setProductData}) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {productData.map((product) => {
        return (
          < Product product={product} productData={productData} setProductData={setProductData} key={product.id}/>
        )
      })}
    </div>
  );
}

export default ProductListing;
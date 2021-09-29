import Product from "./Product";

function ProductListing({productData, setProductData, cart, setCart}) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {productData.map((product) => {
        return (
          < Product product={product} productData={productData} setProductData={setProductData} cart={cart} setCart={setCart} key={product.id}/>
        )
      })}
    </div>
  );
}

export default ProductListing;
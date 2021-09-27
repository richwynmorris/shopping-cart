import Product from "./Product";
import AddProductForm from "./AddProductForm";

function ProductListing({data}) {
  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {data.map((obj) => {
          return (
            < Product data={obj} key={obj.id}/>
          )
        })}
      </div>
      < AddProductForm />
    </main>
  );
}

export default ProductListing;
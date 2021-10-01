import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

import productDataActions from "../actions/productDataActions";

import Product from "./Product";

function ProductListing() {

  const productData = useSelector(state => state.productData);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products")
        dispatch(productDataActions.set(response.data));
      } catch (e) {
        console.log(e);
      }
    }

    fetchProducts();
  }, [])

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {productData.map((product) => {
        return (
          < Product product={product} key={product.id}/>
        )
      })}
    </div>
  );
}

export default ProductListing;
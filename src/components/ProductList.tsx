import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../store/productsListSlice";

const ProductList = () => {
  const {products,isLoading,status} = useSelector(store=>store.allproducts);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[])

  return (
    <>
    {/* <p>Products</p> */}
    <ul>
        {products.length && products.map((item)=><li key={item.id}>{item.title}</li>)}
    </ul>
    
    </>
  )
}

export default ProductList
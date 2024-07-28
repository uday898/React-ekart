import { useParams } from 'react-router-dom';
import '../index.css'
import useGetProducts from './hooks/useGetProducts';
import Loader from "./Loader";
import { ProductCard } from './ProductCard';

const ProductList = ({isCategory}) => {
 const {categoryId} = useParams();
 const {products,isLoading} = useGetProducts({isCategory,categoryId})

  if(isLoading){
    return <Loader/>
  }

  return (
    <>
    <div className="products-container">
        {products && products.map((item)=> <ProductCard product={item}/>)}
    </div>
    
    </>
  )
}

export default ProductList
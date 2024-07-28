import { useParams } from "react-router-dom"
import { useGetProductDetailsQuery } from "../store/productApi"
import Loader from "./Loader"


const ProductDetail = () => {
const {productId} = useParams()
const {data,isLoading,error} = useGetProductDetailsQuery(productId)

if(isLoading){
  return <Loader/>
}

if(error){
  return <p>{error}</p>;
}

  return (
    <>
    <div style={{"display":"flex"}}>
      <div className="" style={{"width":"50%"}}>
        <img src={data.images[0] } />
      </div>
      <div className="dataContainer" style={{"fontSize":"20px"}}>
          <div>{data.title}</div>
          <div className="rating1">{data.rating}</div>
          <div style={{"fontSize":'40px',"color":"blue"}}>${data.price}</div>
          <div>{data.description}</div>
          
        
      </div>

    </div>
    </>
  )
}

export default ProductDetail
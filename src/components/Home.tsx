import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { getCategoryList } from "../store/category";
import Loader from "./Loader";
import '../index.css'
import { useCheckAuthStatusQuery } from "../store/productApi";
import {setUserData,logOut} from '../store/userSlice'

const Home = () => {
const {categories,isLoading} = useSelector(state=>state.categories);
const {data,status,error,refetch} = useCheckAuthStatusQuery('checkAuthStatus',{pollingInterval: 10000})
const dispatch = useDispatch()

 useEffect(()=>{
  dispatch(getCategoryList())
 },[])

 useEffect(() => {
  if(data){
    dispatch(setUserData(data))
  }else if(error){
    dispatch(logOut())
  }
}, [data]);


 if(isLoading){
  return <Loader/>
 }

  return (
    <>
        <div className="cat-Container">
          {
            categories.map((item)=>{
              return <div className="cat-Box" key={item.slug}><Link to={`/category/`+item.slug}>{item.name}</Link></div>
            })
          }
        </div>
    </>
   
  )
}

export default Home
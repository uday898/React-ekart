import { useEffect } from "react"
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Root = () => {
const navigate = useNavigate();
const {isAuthenticated} = useSelector(state=>state.user);

  useEffect(()=>{
    if(!isAuthenticated){
      navigate('login');
    }
  },[])
  
  return (
    <Outlet/>
  )
}

export default Root


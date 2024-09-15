import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";
import { Outlet } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
const {isAuthenticated,isLoading} = useSelector(state=>state.user);
    

if(isLoading) {
    return <Loader/>; // or any loading spinner component
}

  return isAuthenticated ? children : (<Navigate to="/login" replace={true} />);
};

export default ProtectedRoute;

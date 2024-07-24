import { useNavigate, useNavigation } from "react-router-dom"

const Home = () => {
const navigate = useNavigate();
 const onbtnClick = function(){
    navigate('/allproducts');

 }
  return (
    <>
         <div>Home</div>
         <button onClick={onbtnClick}> all produts</button>
    </>
   
  )
}

export default Home
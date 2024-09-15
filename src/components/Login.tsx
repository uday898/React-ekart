import { useForm } from 'react-hook-form'
import '../index.css'
import {login} from '../service/authActions'
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginScreen = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const {isLoading,isAuthenticated} = useSelector(state=>state.user);
  const navigate = useNavigate()

  const submitForm = (data) => {
    dispatch(login(data));
  };

  useEffect(()=>{
    if(isAuthenticated){
      navigate('/home')
    }
  },[isAuthenticated])

  if(isLoading){
    return <Loader/>
  }

  return (
    <div className='login-container'>
        <div className='login-box'>
    <form onSubmit={handleSubmit(submitForm)}>
   
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
            <input type="text" id="first_name" {...register('username')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user name" required />
      
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="text" id="password" {...register('password')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
       
   
      <button type='submit' className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
    </form>
    </div>
    </div>
  )
}
export default LoginScreen

{/* <div className="login-page">
<form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input name="username" ref={register({ required: true })} />
    {errors.username && <p>Username is required</p>}
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input name="password" type="password" ref={register({ required: true })} />
    {errors.password && <p>Password is required</p>}
  </div>
  <button type="submit">Login</button>
</form>
</div> */}


{/* <div className='login-container'>
<form onSubmit={handleSubmit(submitForm)}>
  <div className='form-group'>
    <label htmlFor='email'>Email</label>
    <input
      type='email'
      className='form-input'
      {...register('email')}
      required
    />
  </div>
  <div className='form-group'>
    <label htmlFor='password'>Password</label>
    <input
      type='password'
      className='form-input'
      {...register('password')}
      required
    />
  </div>
  <button type='submit' className='button'>
    Login
  </button>
</form>
</div> */}
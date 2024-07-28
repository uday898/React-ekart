import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'
import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import { Provider } from 'react-redux'
import store from './store/store'
import Login from './components/Login'
import Root from './components/Root'
import ProtectedRoute from './components/ProtectedRoute'
import ProfileScreen from './components/ProfileScreen'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Root />}  errorElement={<ErrorBoundary />}>
      <Route path='' element={<ProtectedRoute><Layout /></ProtectedRoute>} >
        <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/category/:categoryId' element={<ProtectedRoute><ProductList isCategory={true} /></ProtectedRoute>}/>
        <Route path='/allproducts' element={<ProtectedRoute><ProductList isCategory={false}/></ProtectedRoute>}/>
        <Route path='/product/:productId' element={<ProtectedRoute><ProductDetail/></ProtectedRoute>}/>
        <Route path='/profile' element={<ProtectedRoute><ProfileScreen/></ProtectedRoute>}/>
      </Route>
      <Route path='/login' Component={Login}/>
    </Route>
  )
)

function App() {

  return (
    <>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
    </>
  )
}

export default App

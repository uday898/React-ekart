import { useState } from 'react'
import './App.css'
import Header from './components/Header'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'
import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import { Provider } from 'react-redux'
import store from './store/store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<ErrorBoundary />}>
      <Route path='' element={<Home />} />
      <Route path='allproducts' element={<ProductList/>}/>
      <Route path='product/:id' element={<ProductDetail/>}/>
    </Route>
  )
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
    </>
  )
}

export default App

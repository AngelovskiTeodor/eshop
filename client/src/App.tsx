import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList/ProductList.tsx'
import AddProduct from './pages/AddProduct/AddProduct.tsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

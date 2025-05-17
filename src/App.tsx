import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
//import TrnLand from './components/TrnLanding';
import CartPage from "./components/CartPage";
import ShopPage from './components/ShopPage';
import type { Product } from './types/types';
import { FilterProvider } from './components/contex/shopContext';
//import ProductFetcher from "./components/ProdFetcher";
//import LoginForm from "./components/LoginForm";

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) =>  {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  return (
    <FilterProvider>
      <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-white to-purple-300'>
      <Header />
      <Routes>
        <Route
          path="/shop"
          element={<ShopPage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
        />
        {/*<Route
          path="/login"
          element={<LoginForm />}
        />*/}
      </Routes>
    </div>
    </FilterProvider>
    
  )
}

export default App

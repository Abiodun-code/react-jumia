import './App.css';
import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router';
import Product from './components/Product';
import Cart from './components/Cart'
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CartProvider>
      <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </CartProvider>
      
    </div>
  );
}

export default App;

import './App.css';
import { useState, useEffect } from 'react'
import CartWidget from './components/CartWidget/CartWidget';
import {Button} from'react-bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
//import NavBarClass from'./components/NavBarClass'//
import ListProducts from './components/ListProducts/ListProducts';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Container from '@mui/material/Container';
//pages
import HomePage from './pages/Home';
import Cart from './pages/Cart';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';
import DetailPage from './pages/Detail';
import NosotrosPage from './pages/Nosotros';

//context
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';


function App() {
  return (
   
    <div className="App">
   <CartProvider>
       <ThemeProvider>
       <BrowserRouter>
       <NavBar />
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/contacto" element={<ContactPage />}/>
        <Route path="/:category/" element={<HomePage />}/>
        <Route path="/:category/:id" element={<DetailPage />}/>
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/nosotros" element={<NosotrosPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </CartProvider>
    

    </div>
  );
}

export default App;
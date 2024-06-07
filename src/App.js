
import './App.css';
import Header from './Components/Header';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import View from './Pages/View';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';




function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
       <Route path='/view/:id' element={<View/>} />
       <Route path='/wish' element={<Wishlist/>} />
        {/* <Route path='/Login' element={<Auth/>} />
        <Route path='/Register' element={<Auth register />} /> */}
        <Route path='/cart' element={<Cart/>} />
        <Route path='/*' element={<Home/>} />
         </Routes>
         <Footer/>
    </div>
   
  );
}

export default App;

import './App.css'; 

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';


//Components 
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer} from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';
import { CarritoProvider } from './context/CarritoContext';

//firebase
export const App = () => {
  //cargarBDD()   Nunca cargaron con el comando, los tuve que cargar a mano :(


  return (
    <>
    <BrowserRouter>
      <CarritoProvider>
        <Navbar/> 
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path ='/checkout' element={<Checkout/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        <ToastContainer />
    </CarritoProvider>
  </BrowserRouter>
    </>
  )
}

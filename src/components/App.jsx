import './App.css'; 

//Components 
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer} from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

export const App = () => {
  //<NombreComponente/>
  return (
    <>
    <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Menu from './components/Menu';
import Products from './components/Products';
import Product from './components/Products/components/Product';
import Categories from './components/Categories';

function App() {

  return (
    <div className="App">

      <Menu />

      <Routes>
        <Route path='/' element={<Categories />}></Route>
        <Route path='/products' element={<Products />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/products/:idProduct' element={<Product />}/>
      </Routes>

    </div>
  );
}

export default App;



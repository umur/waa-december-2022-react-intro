import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Menu from './components/menu';
import Products from './components/products';
import Product from './components/products/components/Product';
import Categories from './components/categories';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import Dashboard from './components/dashboard';
import Review from './components/review';
import Error from './components/error';

function App() {

  const {errorMessage, successMessage} = useSelector(state => state.appReducer);

  return (
    <div className="App">

      <Menu />

      {successMessage && (
        <Alert key='success' variant='success'>
          <p>{successMessage}</p>
        </Alert>
      )}
      {errorMessage && (
        <Alert key='danger' variant='danger'>
          <p>{errorMessage}</p>
        </Alert>
      )}

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/categories/:id/products' element={<Products />} />
        <Route path='/products' element={<Products />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products/:idProduct' element={<Product />} />
        <Route path='/products/:id/reviews' element={<Review />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;



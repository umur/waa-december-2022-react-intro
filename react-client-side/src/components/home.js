import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import '../css/home.css';
import { setRefreshToken, setToken } from '../redux/TokenReducer';
import NavBar from './nav';
import Products from './Products';

function Home() {
  const navigate = useNavigate();
  const tokenVal = useSelector((state) => state.TokenReducer.tokenVal);
  const dispatch = useDispatch();

  if (tokenVal === '') {
    navigate('/login');
  }

  const [products, setProducts] = React.useState([]);
  const loadProducts = async () => {
    const response = await axios
      .get('/products', {
        headers: {
          Authorization: `Bearer ${tokenVal}`,
        },
      })
      .then((response) => {
        console.log(response);
        // dispatch(setToken(response.data.token));
        // dispatch(setRefreshToken(response.data.refreshToken));
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.status === 401) {
          dispatch(setToken(''));
          navigate('/login');
        }
      });
  };
  React.useEffect(() => {
    loadProducts();
  }, []);

  return (
    <main>
      <NavBar></NavBar>
      <div className="container">
        <hr />
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h3>Products</h3>
            </div>
            <div>
              {' '}
              <Link to={'/products/addProduct'} className=" btn-warning btn">
                Add Product
              </Link>
            </div>
          </div>

          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <Products products={products} />
            </tbody>
          </table>
        </div>
        <hr />
      </div>
    </main>
  );
}

export default Home;

import "./App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";
import PageNotFound from "./component/PageNotFound";
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import ProductList from "./component/ProductList";

function App() {
  const productsDemo = [
    {
      id:1,
      name:"product 1",
      price:"12",
      rating:"2",
      category:{
        name:"cat 1",
        comment:"comm 1"
      }
    },
    {
      id:2,
      name:"product 2",
      price:"33",
      rating:"5",
      category:{
        name:"cat 2",
        comment:"comm 2"
      }
    },
  ]
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/products" element={<ProductList products={productsDemo} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
};

export default App;

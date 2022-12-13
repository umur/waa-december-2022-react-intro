import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
    <Dashboard/>
   </BrowserRouter>
  );
}

export default App;

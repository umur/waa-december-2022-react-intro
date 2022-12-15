import './App.css';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
import Routing from './routing';

function App() {
  axios.defaults.baseURL = 'http://localhost:8080/';
  return (
    <div className="App container-fluid">
      <Header />
      <div className="row body">
        <Routing />
      </div>
      <Footer />
    </div>
  );
}

export default App;

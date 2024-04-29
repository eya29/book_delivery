
import './App.css';
import Navbar from './components/Navbar/navbar';
import {Routes , Route} from 'react-router-dom'
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOrder/>} />
    </Routes>
    </div>
  );
}

export default App;

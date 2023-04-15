 
import './App.css';
import Nav from './Component/Nav';
import {Routes,Route} from  "react-router-dom"
import Login from './Component/Login';
import { useContext } from 'react';
import { AuthContext } from './Component/Context';
import Home from './Component/Home';
import Products from './Routing/Products';
import ProductDetails from './Routing/ProductDetails';
import Contact from './Routing/Contact';
function App() {
  const {isloggedIn} = useContext(AuthContext)
  return (
    <div className="App">
      {isloggedIn ? <Nav/> :null}
      <Routes>
        <Route path='/' element = {isloggedIn ? <Home/> : <Login/>}/> 
         <Route path='/products' element = {<Products/>}/>
       <Route path='/productdetails/:id' element = {<ProductDetails/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    
    </div>
  );
}

export default App;

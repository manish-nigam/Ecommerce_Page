 
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
import Protect from './Routing/Protect';
import Technologies from './Routing/Technologies';
import Html from './Routing/Html';
import Css from './Routing/Css';
import Javascript from './Routing/Javascript';
import Reacts from './Routing/Reacts';

function App() {
  const {isloggedIn} = useContext(AuthContext)
  return (
    <div className="App">
      {isloggedIn ? <Nav/> :null}
      <Routes>
        <Route path='/' element = {isloggedIn ? <Home/> : <Login/>}/> 
         <Route path='/products' element = { <Protect><Products/></Protect>    }/>
       <Route path='/productdetails/:id' element = {   <ProductDetails/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/tech' element = {     <Protect><Technologies/></Protect>}>
      <Route  path='html' element = {<Html/>} />
      <Route  path='css' element = {<Css/>} />
      <Route  path='js' element = {<Javascript/>} />
      <Route  path='react' element = {<Reacts/>} />

      </Route>
      
      </Routes>
    
    </div>
  );
}

export default App;

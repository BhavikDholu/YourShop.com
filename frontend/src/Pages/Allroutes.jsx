import React from 'react';
import {Route,Routes} from "react-router-dom";
import Beauty from './Beauty';
import Cart from './Cart';
import Home from './Home';
import Kids from './Kids';
import Login from './Login';
import Men from './Men';
import Profile from './Profile';
import Signup from './Signup';
import SingleProduct from './SingleProduct';
import Wishlist from './Wishlist';
import Women from './Women';

function Allroutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/men/:id'element={<SingleProduct />}/>
        <Route path='/women/:id'element={<SingleProduct />}/>
        <Route path='/kids/:id'element={<SingleProduct />}/>
        <Route path='/beauty/:id'element={<SingleProduct />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default Allroutes
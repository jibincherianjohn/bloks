
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Createpost from './pages/Createpost';
import Header from './Components/Header';
import { useState } from 'react';

function App() {

const[isAuth,setisAuth]=useState(false)

  return (
    <div className="App">

      <Header setisAuth={setisAuth} isAuth={isAuth}></Header>
<Routes>
  
        <Route path='/' element={<Home isAuth={isAuth} ></Home>}></Route>
        <Route path='/login' element={<Login setisAuth={setisAuth}></Login>}></Route>
        <Route path='/post' element={<Createpost isAuth={isAuth} ></Createpost>}></Route>
        
</Routes>
    </div>
  );
}

export default App;

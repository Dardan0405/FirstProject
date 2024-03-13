
import './App.scss';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/Blog';
import LoginForm from './Pages/Login/Login';
import ContactPage from './Pages/Contact';


function App() {
  return (
//  <div className='HomePage'>
//   <Navbar/>
//   <MobileBar/>
//   <Cards/>
//  </div>
<Router>
  <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/Blog' element={<BlogPage/>} />
    <Route path='/Login' element={<LoginForm/>}/>
    <Route path='/Contact' element = {<ContactPage/>}/>
  </Routes>
</Router>
  );
}

export default App;

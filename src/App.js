
import './App.scss';
import React, { useEffect } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/Blog';
import LoginForm from './Pages/Login/Login';
import ContactPage from './Pages/Contact';
import { IntlProvider } from 'react-intl';
import { translate } from './translation/translation';
import { useSelector } from 'react-redux';
import Aos from 'aos';
import AboutUsPage from './Pages/About/AboutUs';

function App() {
  const language = useSelector((state) => state.language.language);
  useEffect(() => {
    Aos.init({
      duration: 1250,
      once: true
    })
  },[])
  return (
//  <div className='HomePage'>
//   <Navbar/>
//   <MobileBar/>
//   <Cards/>
//  </div>
<Router>
  <IntlProvider locale={language} 
  formats={{number: 'en'}}
  messages={translate[language]}>
  <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/Blog' element={<BlogPage/>} />
    <Route path='/Login' element={<LoginForm/>}/>
    <Route path='/Contact' element = {<ContactPage/>}/>
    <Route path='/AboutUs' element = {<AboutUsPage/>}/>
  </Routes>
  </IntlProvider>
</Router>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/layout/Home';
import About from './Components/layout/About';
import Destination from './Components/layout/Destination';
import Package from './Components/layout/Package';


import Notfound from './Components/layout/Notfound';


import Popular from './Components/layout/Popular';
import Customize from './Components/layout/Customize';
import Contact from './Components/layout/Contact';

import CustompackageForm from './Components/forms/CustompackageForm';
import Footer from './Components/layout/Footer';
import Indiatour from './Components/cards/Indiatour';
import Internationaltour from './Components/cards/Internationaltour';
import BasicExample from './Components/layout/Navbar';







function App() {
  return (
   <Router>
    <BasicExample/>
 
   
 <Routes>
        
          <Route exact path='/' element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          
          <Route path="/Package" element={<Package/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/customize" element={<Customize/>}/>
         <Route path="/Contact" element={<Contact/>}/>
        <Route path='/customizes' element={<CustompackageForm/>} />
        <Route path="/indiatour" element={<Indiatour />} />
         <Route path='/international' element={<Internationaltour/>}/>
        
          <Route component={Notfound} />
          
     
   
    
          </Routes>
    <Footer/>
   </Router>
   
  );
}

export default App;

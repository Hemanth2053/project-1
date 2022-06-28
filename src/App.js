import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Catalogue from './Pages/Catalogue'
import About from './Pages/About'
import { BrowserRouter  as Switch  } from 'react-router-dom'
import Navbar from  './Navbarcomps/Navbar'
import Form from './Pages/Form'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<Catalogue/>} path="/catalogue"></Route>
        <Route element={<About/>} path="/about"></Route>
        <Route element={<Form/>} path="/form"></Route>
      </Routes>
     
      
    </div>
  );
}

export default App;

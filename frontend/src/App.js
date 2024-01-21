import './App.css';

import Landingpage from "./components/Landingpage.js";
import "./components/Landingpage.css";
import{BrowserRouter, Route, Routes} from "react-router-dom";
import NavScroll from './components/NavBar.js';
import MyNotes from './components/MyNotes.js';
import LoginPage from './components/LoginPage.js';
import RegisterPage from './components/RegisterPage.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App yellow" >
        <NavScroll name = "Miles" />
      <Routes>
        <Route path ="/" element={<Landingpage/>}/>
        <Route path ="/login" element={<LoginPage/>}/>
        <Route path ="/register" element={<RegisterPage/>}/>
        <Route path= "/mynotes" element = {<MyNotes/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

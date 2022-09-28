// import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './Componets/Home/Home';
import Navbar from './Componets/Navbar/Navbar';
// import Cosmetics from './Components/Cosmetics/Cosmetics';
function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
  <div className="App">

<Navbar></Navbar>
<Home></Home>

    </div>
  );
}

export default App;

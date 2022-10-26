import Nav from "./components/Nav/Nav"
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login"
import Home from "./pages/Home/Home"
import Gallery from "./pages/Gallery/Gallery"
import { useState } from "react";
import {UserContext} from "./context/UserContext"


function App() {

const [value, setValue] = useState(false)

  return (
    <Router>
    <div className="App">
      <header className="App-header">

      
      
      <Nav />

      <UserContext.Provider value={{value,setValue}}>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
      </UserContext.Provider>
      </header>
    </div>
    </Router>
  );
}

export default App;

import Nav from "./components/Nav/Nav"
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import Gallery from "./pages/Gallery/Gallery"
import UserGallery from "./pages/UserGallery/UserGallery"

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      
      <Nav />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/usergallery" element={<UserGallery/>} />
      </Routes>
        
      </header>
    </div>
    </Router>
  );
}

export default App;

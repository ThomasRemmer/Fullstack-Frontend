import Nav from "./components/Nav/Nav"
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home"

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      
      <Nav />
      <Routes>
        
      </Routes>
        
      </header>
    </div>
    </Router>
  );
}

export default App;

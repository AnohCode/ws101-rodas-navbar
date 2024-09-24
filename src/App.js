import './App.css';
import NavBar from './NavBar';
import {Route, Routes} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <div className='container'>
      <Routes>
        <Route path = "/home" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact/>} />
      </Routes>

      </div>
      <div style={{ padding: '20px' }}>
        <h1>Khristian F. Rodas BSIT 3B</h1>
        
        {/* Add more content here */}
      </div>
    </div>
  );
}

export default App;

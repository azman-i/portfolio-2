import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
  <Navbar/>
  
  <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/project" element={<Projects />} />
         {/* <Route path="/about" element={<About />} />*/}
          <Route path="/resume" element={<Resume />} /> 
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
   <Footer/> 
  </div>
  </Router>
  );
}

export default App;

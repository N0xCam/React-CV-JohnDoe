import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/scss/bootstrap.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/home"
import Blog from "./pages/blog/blog"
import Contact from "./pages/contact/contact"
import Realisations from "./pages/realisations/realisations"
import Services from "./pages/services/services"
import Mentions from "./pages/mentions/mentions"

function App() {
  return (
    
    <div className="App">
<div className="home"></div>
 

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/services" element={<Services />} />
      <Route path="/mentions" element={<Mentions />} />
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

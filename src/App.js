import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './font/stylesheet.css';
import './font/all/fonts.css';
import './55/stylesheet.css';
import './style.scss';
import './all/fonts.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";
import Kids from "./pages/Kids";
import Contact from "./pages/Contact";
import '/node_modules/@fontsource/montserrat/700.css'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";





const App =()=> {
  return <BrowserRouter>
            <Navbar/>
             <Routes>
                 <Route path="/" element={<Home/>} />
                 <Route path="about" element={<About/>} />
                 <Route path="products" element={<Products/>} />
                 <Route path="recipes" element={<Recipes/>} />
                 <Route path="kids" element={<Kids/>} />
                 <Route path="contact" element={<Contact/>} />
             </Routes>
             <Footer/>
         </BrowserRouter>
 
     
 
}

export default App;

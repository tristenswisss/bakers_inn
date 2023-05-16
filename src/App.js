import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './font/stylesheet.css'
import './style.scss'
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";
import Kids from "./pages/Kids";


function App() {
  return <BrowserRouter>
             <Routes>
                 <Route path="/" element={<Home/>} />
                 <Route path="about" element={<About/>} />
                 <Route path="products" element={<Products/>} />
                 <Route path="recipes" element={<Recipes/>} />
                 <Route path="kidsconner" element={<Kids/>} />
             </Routes>
         </BrowserRouter>
 
     
 
}

export default App;

import logo from '../images/bakers-inn-logo.png'
import { Link } from 'react-router-dom'


const Navbar =()=> {
    return(
        <nav>
            <Link to={'/'}><img src={logo} alt="logo"/></Link>
            <ul>    
                    <li><Link to={'/About'}>About Us</Link> </li>
                    <li><Link to={'/Products'}>Products</Link></li>      
                    <li><Link to={'/Recipes'}>Recipes</Link></li>  
                    <li><Link to={'/Kids'}>Kid's Corner</Link></li>  
                    <button><Link to={'/Contact'}>Contact</Link></button> 
            </ul>
        </nav>
    )
}
export default Navbar;
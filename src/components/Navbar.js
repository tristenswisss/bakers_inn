import logo from '../images/bakers-inn-logo.png'
import { NavLink } from 'react-router-dom'


const Navbar =()=> {

    const navLinkStyles = ( {isActive}) => {
        return{
            color: isActive ? 'rgb(45,1,111)' : 'rgb(168,160,197',

        }
    }

    return(
        <nav>
            <NavLink to={'/'}><img src={logo} alt="logo"/></NavLink>
            <ul>    
                    <NavLink style={navLinkStyles} to={'/About'}>About Us</NavLink>
                    <NavLink style={navLinkStyles} to={'/Products'}>Products</NavLink>   
                    <NavLink style={navLinkStyles} to={'/Recipes'}>Recipes</NavLink>
                    <NavLink style={navLinkStyles} to={'/Kids'}>Kid's Corner</NavLink>
                    <NavLink style={navLinkStyles} to={'/Contact'}><button >Contact</button> </NavLink>
                    
            </ul>
        </nav>
    )
}
export default Navbar;
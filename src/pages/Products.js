import Navbar from "../components/Navbar";
import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';
import BreadTab from "../components/BreadTab";

const Products = ()=>{
    return(
        <div>
             <Navbar/>
             <div className="wrapper">
            <div className="Products">
                <h1>Products</h1>
                <i><KeyboardDoubleArrowDownSharpIcon color='white' fontSize="large"/></i>
            </div>
            </div>
            <section className="ourProducts">
                <h2>Our Products</h2>
               <BreadTab/>


            </section>

        </div>
       
    )

}
export default Products;
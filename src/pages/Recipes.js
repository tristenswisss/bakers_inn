import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import RecipeModal from "../components/RecipeModal"
import Tables from '../components/tabs';

const Recipes = ()=>{
    return(
      <div>
        <Navbar/>
         <section className='recipeSection'>
               <Tables/>
                <RecipeModal/>
        </section>

        <Footer/>

      </div>
      
  

      
    )

}
export default Recipes
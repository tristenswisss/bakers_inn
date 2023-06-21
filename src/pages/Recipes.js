import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import RecipeModal from "../components/RecipeModal"
import Tables from '../components/tabs';

const Recipes = ()=>{
    return(
      <div>
        <Navbar/>
        <section className="recipes">
            <div class="recipesContainer">
                      <div className="col-lg-6">
                        <h2>The Finest of Baker's Tik Tok Community Recipes</h2>
                        <p>Make the finest croissants worthy of Paris from your home #Croissant #Zimbabwe #Paris #Baker's_Inn</p>
                        <h5>@The_Bakers_Inn</h5>

                      </div>
                      <div className="col-lg-6">
                        <div className="recipe1">
                             <div class="overlay">

                             </div>

                        </div>
                        <div className="recipe2">
                        <div class="overlay">
                              
                              </div>

                        </div>
                        <div className="recipe3">
                        <div class="overlay">
                              
                              </div>

                        </div>
                        <div className="recipe4">
                        <div class="overlay">
                              
                              </div>

                        </div>
                      </div>
            </div>
             
        </section>
         <section className='recipeSection'>
               <Tables/>
                <RecipeModal/>
        </section>

        <Footer/>

      </div>
      
  

      
    )

}
export default Recipes
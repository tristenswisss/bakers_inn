import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Content from '../components/Content';
import sandwich from '../images/sand.png'
import pies from '../images/pie.png'
import donut from '../images/donut.png'
import slices from '../images/slices.png'
import Fooditem from '../components/foodItem';
import slice from '../images/slice-1.png'
import pie from '../images/pie-1.png'
import scones from '../images/scones-1.png'
import donuts from '../images/donut-1.png'
import loaves from '../images/loaves-unsliced.png'
import donation from '../images/donation.png';
import Tables from '../components/tabs';
import RecipeModal from '../components/RecipeModal';
import Footer from '../components/Footer';


const Home = () => {
  const navigate = useNavigate();
  


    return(
        <div>
          <Navbar/>
          <Hero/>
          <section className='aboutUS'>
              <div className='aboutUsContent' >
                 <div className="col-lg-6">
                   <div className='headerText'>
                     <h2>About Baker's Inn</h2>
                   </div>
                 

                 </div>

                 <div className="col-lg-6">
                   <div id='aboutUsText' class="aboutUsText">
                      <p>It all started back in the eighties when Baker's Inn was just a small confectionery company that employed 40 people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convenient and accessible answer to hunger's call.</p>
                      <button onClick={()=>navigate('/About')}>Read More</button>
                   </div>

              </div>

               </div>
                 <div className="aboutFood">
                   <img className='img-fluid' src={sandwich} alt="sandwich"/>
                    <img className='img-fluid' src={pies} alt="pies"/>
                      <img className='img-fluid' src={donut} alt="donut"/>
                        <img className='img-fluid' src={slices} alt="slices"/>

                 </div>
          </section>
          <section className='productRange'>
          <h2>Our Product Range</h2>
            <div className='row'>
            
                <div className='productContent'>
                <Fooditem images={slice} tittle='Bread'/>
                <Fooditem images={pie} tittle='Meat Pies'/>
                <Fooditem images={scones} tittle='Scones'/>
                <Fooditem images={donuts} tittle='Donuts'/>
                </div>
                <div className='productBtn'>
                    <button onClick={()=>navigate('/Products')}>VIEW COMPLETE Range</button>
                </div> 
            </div> 
          </section>
          <section className='factory'>
            <Content header={'Book A Factory Tour'} 
            ptext={'Keen on seeing how Baker’s inn products are made? Are you interested in a field trip day for your school’s class? Get in touch with us to book a tour of our factory that is closest to you. Fill in the booking form and we will get back to you.' }
            bttn={'BOOK FACTORY TOUR'}
            imagess={loaves}
            />
          </section>

          <section className='donations'>
            <Content header={'Request A Donation'}
            ptext={'If you are holding an event that you wish to have us donate to, we’re more than glad to help. Fill in the donation request form for us to best understand how we can increase your event’s impact in the local community'}
            bttn={'REQUEST DONATION'}
            imagess={donation}
            />

          </section>

          <section className='kids'>
            <div className="kidscontainer">
            <div className="col-lg-6">
              <img src={require('../images/mario-nobg.png')} alt=""/>

            </div>
            <div className="col-lg-6">
              <div className='KidsText'>
              <h2>Kids Corner</h2>
              <p>Let your children join the fun. Explore a place with exciting games and the top winners stand a chance to win exciting monthly prizes!</p>
              <button  onClick={()=>navigate('/Kids')} >PLAY GAMES</button>

              </div>
             
              
            </div>
            </div>


          </section>

          <section className='recipeSection'>
          <Tables/>
          <RecipeModal/>
      

          </section>

          <section className='promotion'>
            <div class="promotionContent">
              <div className="col-lg-6">
                <h2>Get Notified about promotions we offer</h2>
                <div class="buttonIn">
                      <input placeholder='your email' type="text" id="enter"/>
                      <button id="clear">submit</button>
                 </div>

              </div>
              <div className="col-lg-6">
                <img src={require('../images/breads-1.png')} alt=""/>
              </div>
            </div>


          </section>

          <Footer/>

        

        </div>
  
    )

}
export default Home;
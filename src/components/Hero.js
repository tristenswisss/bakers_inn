import breads from '../images/breads.png'


const Hero = ()=>{

    return(
        <div className="wrapper">
          <div className="billboard">

           
            <div className="col-lg-4">
                <h1>Bringing you the <span>best value</span> at the <span>best prices</span>.</h1>
                <p>The freshest sandwiches you can make are with Baker's inn soft white loaf.</p>
                <a href="#aboutUsText"><button >READ MORE</button></a>
            </div>

            <div className="col-lg-8">
               <div className='carousel'>
                <div className="carousel-items">
                   <img src={breads} alt=""/>
                   
                </div>
               </div>
            </div>
            </div>
          </div>


    )



}
export default Hero;
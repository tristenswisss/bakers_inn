import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer>
        <div className='top'>
          <div className='line'></div>
          <div><img className='img-fluid' src={require('../images/footerlogo.png')} alt=""/></div>
          <div className='line'></div>
        </div>
        <div className="middle">
          <div class="col-md-5">
            <div><h4>Instagram Feed</h4></div>
            <div className='footerImg'><img className='img-fluid' src={require('../images/feed-1.png')} alt=""/>
            <img className='img-fluid' src={require('../images/feed-2.png')} alt=""/>
            <img className='img-fluid' src={require('../images/feed-3.png')} alt=""/>
            </div>
            <div></div>

          </div>
          <div class="col-md-2">
          <div> <h4>Our Location</h4></div>
          <div> <p>1 Shepperton Road, Graniteside Harare, Zimbabwe.</p></div>
            
          </div>
          <div class="col-md-3">
          <div><h4>Get In Touch With Us</h4></div>
          <div>
            <ol>
              <li>08080151 </li>
              <li>08080152</li>
              <li>+263 242 751 481</li>
              <li>+263 242 710 334</li>
              <li>marketing@bakersinnzim.com</li>
            </ol>
          </div>
            
          </div>
          <div class="col-md-2">
          <div><h4>Sitemap</h4></div>
          <div>
            <ol>
              <li onClick={()=>navigate('/')}>Home</li>
              <li onClick={()=>navigate('/About')}>About Us</li>
              <li onClick={()=>navigate('/Products')}>Products</li>
              <li onClick={()=>navigate('/Recipes')}>Recipes</li>
              <li onClick={()=>navigate('/Kids')}>Kids Corner</li>
            </ol>
          </div>       
          </div>
        </div>
        <div className="lines"> </div>
        <div className="bottom">
         
          <div className="copyright">
               <div className='copyText'><p>Subsidiary of </p><img src={require('../images/inscor_logo@2x 1.png')} alt=""/></div>
               <div><p>Copyright © 2022 Bakers Inn. All rights reserved. Site by <span>NoWalls Pan Africa</span></p></div>

          </div>


        </div>


      </footer>
        



    )


};

export default Footer;
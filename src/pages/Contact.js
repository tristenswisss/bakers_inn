import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';


const Contact = ()=>{
return(
    <div>
         <Navbar/>
         <div className="wrapper">
            <div className="Contact">
                <h1>Contact</h1>
                <i><KeyboardDoubleArrowDownSharpIcon color='white' fontSize="large"/></i>   
            </div>
            </div>
            <div className="table-section">
           <table id="rwd-table">
              <thead>
                <tr>
                  <th>Depot</th>
                  <th>Address</th>
                  <th>Phone Numbers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td><strong>Chinhoyi Depot</strong></td>
                  <td>94/95 Josiah Tongogara St, Industrial Site, Chinhoyi</td>
                <td><strong>0772 318 309</strong></td>
                </tr>
                <tr>
                <td><strong>Bindura Depot</strong></td>
                  <td>461 Luton Road, Industrial Site, Bindura</td>
                  <td><strong>066 2107317</strong></td>
                </tr>
                <tr>
                  <td><strong>Murehwa Depot</strong></td>
                  <td>Stand number 351 Murehwa Growth Point</td>
                  <td><strong>Mutare Depot</strong></td>
                </tr>
                <tr>
                  <td><strong>020 60715</strong></td>
                  <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                  <td><strong>066 2107317</strong></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><strong>020 60715</strong></td>
                  <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                  <td><strong>066 2107317</strong></td>
                </tr>
                <tr>
                  <td><strong>020 60715</strong></td>
                  <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                  <td><strong>066 2107317</strong></td>
                </tr>
                <tr>
                  <td><strong>020 60715</strong></td>
                  <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                  <td><strong>066 2107317</strong></td>
                </tr>
                <tr>
                  <td><strong>020 60715</strong></td>
                  <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                  <td><strong>066 2107317</strong></td>
                </tr>
                <tr>
                  <td><strong>020 60715</strong></td>
                  <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                  <td><strong>066 2107317</strong></td>
                </tr>
              </tbody>
            </table>
           </div>

           <section className="enquiries">
               <div>
                     <img src={require('../images/contactpic.png')} alt=""/>
               </div>
               <div className="enqText">
                   <div className="">
                    <h4>For job enquiries , email your CV to</h4>
                    <a href="hr@bakersinnzim.com">hr@bakersinnzim.com</a>

                   </div>
                   <div className="">
                    <h4>For general enquiries, email</h4>
                    <a href="marketing@bakersinnzim.com">marketing@bakersinnzim.com</a>
                    
                   </div>
               </div>

           </section>

           <section className="callback">
                    <h2>Request A Callback</h2>
                    <p>Complete the form below and we will respond within 24 hours.</p>
                 
                      <form action="">
                      <div>  
                           <select name="your Tittle" id="">
                                   <option value="">Sir</option>
                                   <option value="">Dr</option>
                                   <option value="">Prof</option>
                            </select> 
                            <input type="text" placeholder="Your Name"/>             
                      </div>
                      <div>
                      <input type="text" placeholder="Your Phone Number"/>  
                      <input type="text" placeholder="Your E-Mail"/>  
                      </div>
                      <div>
                           <select name="your Tittle" id="full">
                                   <option value="">Sir</option>
                                   <option value="">Dr</option>
                                   <option value="">Prof</option>
                            </select>   
                      </div>

                      <div>
                           <select name="your Tittle" id="full">
                                   <option value="">Sir</option>
                                   <option value="">Dr</option>
                                   <option value="">Prof</option>
                            </select> 
                      </div>

                      <div>
                           <select name="your Tittle" id="full">
                                   <option value="">Sir</option>
                                   <option value="">Dr</option>
                                   <option value="">Prof</option>
                            </select> 
                      </div>
                      <div className="area">
                        <textarea placeholder="Your Message"></textarea>
                        <button>Submit</button>
                      </div>


                      </form>
           </section>
           <Footer/>

        

    </div>
   
)


};
export default Contact;
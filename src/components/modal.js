import {Modal} from 'react-bootstrap'

const Modali = ({show, handleClose})=> {
   


    return(
        <div>
             <Modal size="xl" show={show} onHide={handleClose}>
                 <div className='modaliHead'>
                 <h2>Book A Factory Tour</h2>
                 <div>
                     <img onClick={handleClose} src={require('../images/Group 23.png')} alt=""/> 
                 </div>
                 </div>
                  
            
            <Modal.Body>
            <form  action="https://formspree.io/f/mzbqnpgb" method="POST" className='factoryForm'>
                      <div>  
                           <input type="email" name='email' placeholder="Name of Organisation"/> 
                            <input type="email" name='email' placeholder="Name of Contact Person"/>             
                      </div>
                      <div>
                           <input type="email" name='email' placeholder="Organization Address"/>  
                          <input type="email" name='email' placeholder="Organization’s Resident Town"/>  
                      </div>
                      <div>
                          <input type="email" name='email' placeholder="Contact Person’s Telephone"/>  
                          <input type="email" name='email' placeholder="Contact Person’s E-mail"/>       
                      </div>

                      <div>
                      <input type="email" placeholder="Date of Visit"/>  
                           <select name="Number of Participants">
                                   <option value="">1</option>
                                   <option value="">2</option>
                                   <option value="">3</option>
                                   <option value="">other</option>
                            </select> 
                      </div>

                      <div>
                           <select name="Age Range of Participants" id="full">
                                   <option value="">0-12</option>
                                   <option value="">12-19</option>
                                   <option value="">20+</option>
                            </select> 
                      </div>
                      <div className="area">
                          <div className='areaContent'>
                              <p>Plant Visit <span>Terms & Conditions</span></p>
                              <p>Plant Visit <span>Safety Regulations</span></p>
                          </div>
                          <label>
                              <input className='check' type="checkbox"  name="sameadr"/>Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you have provided on behalf of your organisation is accurate, full and correct.
                         </label>
                         <label>
                              <input className='check' type="checkbox"  name="sameadr"/>Have Read The Safety Regulations
                         </label>
                        <button type='submit' onClick={handleClose}>Submit</button>
                      </div>


                      </form>
        
            
                
            </Modal.Body>
          </Modal>
        </div>
    )




}
export default Modali
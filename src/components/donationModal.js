import {Modal} from 'react-bootstrap'
import { useState } from 'react'

const Modaltwo =({open,Close})=>{
    const [openn, setOpenn] = useState(false);

    const opened = ()=> setOpenn(true);


    return(
        <div>
             <Modal size="xl" show={open} onHide={Close}>
                 <div className='modaliHead'>
                 <h2>Request Product Donations</h2>
                 <div>
                     <img onClick={Close} src={require('../images/Group 23.png')} alt=""/> 
                 </div>
                 </div>
                 <div className='modalip'>
                 <p>You can apply for product donations by completing this form, we will contact you should your application be successful. Please bear in mind that we will need at least 3 weeks’ notice to the date of your event</p>
                 </div>
                
                  
            
            <Modal.Body>
            <form className='factoryForm' action="">
                      <div>  
                           <input type="text" placeholder="Name of Organisation"/> 
                            <input type="text" placeholder="Name of Contact Person"/>             
                      </div>
                      <div>  
                           <input type="text" placeholder="Contact Person Position"/> 
                            <input type="text" placeholder="Organization Address"/>             
                      </div>
                      <div>  
                           <input type="text" placeholder="Contact Person’s Telephone"/> 
                            <input type="text" placeholder="Contact Person’s E-mail"/>             
                      </div>
                    

                      <div>
                      <input type="text" placeholder="Date of Event"/>  
                           <select name="Intended Use of Donation">
                                   <option value="">Intended Use of Donation</option>
                                   <option value="">2</option>
                                   <option value="">3</option>
                                   <option value="">other</option>
                            </select> 
                      </div>

                      <div>
                           <select name="Number of Attendants">
                                   <option value="">Number of Attendants</option>
                                   <option value="">12-19</option>
                                   <option value="">20+</option>
                            </select> 
                            <select name="What Product Are Specifically Looking For?" >
                                   <option value="">What Product Are Specifically Looking For?</option>
                                   <option value="">12-19</option>
                                   <option value="">20+</option>
                            </select> 
                      </div>
                      <div className="area">
                        <button onClick={opened}>Proceed to next step</button>
                      </div>


                      </form>
        
            
                
            </Modal.Body>
          </Modal>
          <modalThree openn={openn} Close={Close}/>
        </div>



    )
}
  export default Modaltwo

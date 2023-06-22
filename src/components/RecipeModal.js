import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap'

const RecipeModal = ({show, handleClose}) => {


  const [ModalImage , setModalImage]= useState([
    {
      Image: require('../images/SHMODAL.png'), id:1
    },
  ])
  
   
    
      return (
        <>

    
          <Modal size="xl" show={show} onHide={handleClose}>
            <div className='closebtn'>
              <img onClick={handleClose} alt='closebtn' src={require('../images/Group 23.png')} />
              </div>
            
            <Modal.Body>
                  
                  {
                    ModalImage.map((modal=>(
                      <div className="modals" key={modal.id}>
                            <img src={modal.Image} alt=""/>
                      </div>
                    )))
                  }
            
                
            </Modal.Body>
          </Modal>
        </>
      );
    }

export default RecipeModal;
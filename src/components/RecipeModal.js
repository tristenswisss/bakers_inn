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
            <Modal.Header closeButton>
              
            </Modal.Header>
            <Modal.Body>
                  
                  {
                    ModalImage.map((modal=>(
                      <div className="modals" key={modal.id}>
                            <img src={modal.Image} alt=""/>
                      </div>
                    )))
                  }
            
                
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

export default RecipeModal;
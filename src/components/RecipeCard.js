import { Card,Stack,Heading,Image,Text, CardBody } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import  { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';




const RecipeCard = (props)=>{
  const [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fullscreen, setFullscreen] = useState(true);

    return(
  <>
    <Card maxW='sm' boxShadow=' 0px 4px 12px rgba(0, 0, 0, 0.25);'>
          <CardBody>
            <Image
              src={props.recipeImg}
              alt='recipeImg'
              borderRadius='lg'
            />
                <Stack mt='6' spacing='3' >
                  <Heading size='md' fontFamily={'Montserrat'} color={'#261B6C'}><h3>{props.text}</h3></Heading>
                  <Text color={'#261B6C'}>
                    <h6>Prep Time: <span>20 min</span></h6>
                  </Text>
                  <div className='RecipeInfo'>
                  <Text color={'#261B6C'}>
                    <h6>Serves:<span> 6 people</span></h6>
                  </Text>
                  <button className='arrowBtn' onClick={handleShow}>{props.btttn}<ArrowForwardIcon color='white' w={9}/> </button>
                  
                  </div>   
                </Stack>
          </CardBody>
    </Card>

    <Modal fullscreen={fullscreen} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <div className='modal'>
                <div className='col-lg-6'>
                    <div className='modal1'>
                    <img src={require('../images/sandwich-1.png')} alt=""/>
                    <img src={require('../images/smallSandwich.png')} alt=""/>
                    <img src={require('../images/smallSandwich.png')} alt=""/>
                    <img src={require('../images/smallSandwich.png')} alt=""/>
                     <img src={require('../images/smallSandwich.png')} alt=""/>

                </div>
               
              

               </div>
               <div className='col-lg-6'>

               </div>
            

            </div>
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

    )




}
export default RecipeCard;
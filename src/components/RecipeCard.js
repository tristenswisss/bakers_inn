import { Card,Stack,Heading,Image,Text, CardBody } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import  { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import RecipeModal from './RecipeModal';




const RecipeCard = (props)=>{
  const [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <RecipeModal show={show} handleClose={handleClose} />
</>

    )




}
export default RecipeCard;
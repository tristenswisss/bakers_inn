import { Tabs, TabList, TabPanels, Tab, TabPanel ,TabIndicator} from '@chakra-ui/react';
import shwarma from '../images/sandwich-1.png'
import shortbread from '../images/shortbread-1.png'
import salmon from '../images/salmon-1.png'
import RecipeCard from './RecipeCard';



const Tables = ()=>{
    return(
        <div className='Tabss '>
            
         <Tabs variant="unstyled" display='flex' flexDirection='column' justifyContent='flex-start'  alignItems='center' margin='0px 0px 80px'>
            <div className='Tablist'>
            <TabList>
          <Tab fontFamily={'Montserrat'} color={'#261B6C'}><h2 >For Kids</h2></Tab>
          <Tab fontFamily={'Montserrat'} color={'#261B6C'}><h2>For Vegans</h2></Tab>
          <Tab fontFamily={'Montserrat'} color={'#261B6C'}><h2>For Family</h2></Tab>
        </TabList>
        <TabIndicator
          height="6px"
          bg="#B2904C"
          borderRadius="4px"
          marginBottom='2px'
        />

            </div>
      
      
        <TabPanels marginTop='40px' >
          <TabPanel display='flex' justifyContent='center' gap='40px'>
                <RecipeCard recipeImg={shwarma}  text='Shwarma Sandwich'/>
                <RecipeCard recipeImg={shwarma} text='Shwarma Sandwich'/>
                <RecipeCard recipeImg={shwarma} text='Shwarma Sandwich'/>
          </TabPanel>
          <TabPanel display='flex' justifyContent='center' gap='40px'>
                <RecipeCard recipeImg={shortbread} text='Sweet Shortbread'/>
                <RecipeCard recipeImg={shortbread} text='Sweet Shortbread'/>
                <RecipeCard recipeImg={shortbread} text='Sweet Shortbread'/>
                
          </TabPanel>
          <TabPanel display='flex' justifyContent='center' gap='40px'>
                 <RecipeCard recipeImg={salmon} text='Salmon Strips'/>
                <RecipeCard recipeImg={salmon} text='Salmon Strips'/>
                <RecipeCard recipeImg={salmon} text='Salmon Strips'/>
          </TabPanel>
        </TabPanels>
        
      </Tabs>

        </div>
       

    )
}
export default Tables;
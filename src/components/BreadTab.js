import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
import ValueCards from './ValueCards';

const BreadTab = ()=> {

    return (
            <div>             
                    <Tabs position="relative" variant="unstyled" display='flex' flexDirection='column' justifyContent='flex-start'  alignItems='center' margin='0px 0px 80px' overflowX='scroll'>
                         <div>
                         <TabList>
                           <Tab fontFamily={'Montserrat'} color={'#261B6C'}>Bread</Tab>
                           <Tab fontFamily={'Montserrat'} color={'#261B6C'}>Meat Pies</Tab>
                           <Tab fontFamily={'Montserrat'} color={'#261B6C'}>Scones</Tab>
                           <Tab fontFamily={'Montserrat'} color={'#261B6C'}>Donuts</Tab>
                         </TabList>
                         <TabIndicator
                           height="6px"
                           bg="#B2904C"
                           borderRadius="4px"
                           marginBottom='2px'
                         />

                         </div>
                        
                         <TabPanels  marginTop='40px'>
                           <TabPanel className='tabs1' display={'flex'} gap={'40px'} width={'100%'} justifyContent={'center'} alignItems={'center'}  >
                             <ValueCards imgss={require('../images/blue1.png')} valueTittle='Premium Soft White Loaf' ptext='Our Premium Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf has 18 slices.'/>
                             <ValueCards imgss={require('../images/blue1.png')} valueTittle='Premium Soft White Loaf' ptext='Our Premium Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf has 18 slices.'/>
                             <ValueCards imgss={require('../images/blue1.png')} valueTittle='Premium Soft White Loaf' ptext='Our Premium Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf has 18 slices.'/>
                           </TabPanel>
                           <TabPanel  className='tabs1' display='flex' justifyContent='center' gap='40px'>
                           <ValueCards valueTittle='Meat Pie' ptext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                           <ValueCards valueTittle='Meat Pie' ptext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                           <ValueCards valueTittle='Meat Pie' ptext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                           </TabPanel>
                           <TabPanel className='tabs1' display='flex' justifyContent='center' gap='40px'>
                           <ValueCards valueTittle='Sugar Free Scone' ptext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                           <ValueCards valueTittle='Sugar Free Scone' ptext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                           <ValueCards valueTittle='Sugar Free Scone' ptext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                           </TabPanel>
                           <TabPanel className='tabs1' display='flex' justifyContent='center' gap='40px'>
                           <ValueCards valueTittle='Chocolate Donut' ptext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                           <ValueCards valueTittle='Chocolate Donut' ptext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                           <ValueCards valueTittle='Chocolate Donut' ptext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                           </TabPanel>
                         </TabPanels>
                    </Tabs>
                

            </div>
    )



}
export default BreadTab;
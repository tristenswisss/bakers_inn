import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'

const BreadTab = ()=> {

    return (
            <div>             
                    <Tabs position="relative" variant="unstyled" display='flex' flexDirection='column' justifyContent='flex-start'  alignItems='center' margin='0px 0px 80px'>
                         <div>
                         <TabList>
                           <Tab fontFamily={'Montserrat'} color={'#261B6C'}>One</Tab>
                           <Tab fontFamily={'Montserrat'} color={'#261B6C'}>Two</Tab>
                           <Tab fontFamily={'Montserrat'} color={'#261B6C'}>Three</Tab>
                           <Tab fontFamily={'Montserrat'} color={'#261B6C'}>Four</Tab>
                         </TabList>
                         <TabIndicator
                           mt="-1.5px"
                           height="2px"
                           bg="blue.500"
                           borderRadius="1px"
                         />

                         </div>
                        
                         <TabPanels marginTop='40px'>
                           <TabPanel  display='flex' justifyContent='center' gap='40px'>
                             <p>one!</p>
                           </TabPanel>
                           <TabPanel  display='flex' justifyContent='center' gap='40px'>
                             <p>two!</p>
                           </TabPanel>
                           <TabPanel  display='flex' justifyContent='center' gap='40px'>
                             <p>three!</p>
                           </TabPanel>
                           <TabPanel  display='flex' justifyContent='center' gap='40px'>
                             <p>four</p>
                           </TabPanel>
                         </TabPanels>
                    </Tabs>
                

            </div>
    )



}
export default BreadTab;
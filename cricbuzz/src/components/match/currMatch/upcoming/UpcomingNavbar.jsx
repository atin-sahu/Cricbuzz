import { Box, Divider, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { LatestPhotos } from '../../../news/LatestPhotos'
import { Domestic } from './Domestic'
import { International } from './International'
import { League } from './League'
import { Women } from './Women'

export const UpcomingNavbar = () => {
  return (
    <Box m='auto'  mt={1}>
        <Tabs colorScheme='green' variant='solid-rounded' >
            <TabList  maxH={'30px'} gap={5}>           
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>International</Tab>
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>Domestic</Tab>  
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>League</Tab>
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>Women</Tab>                                
            </TabList>
            <TabPanels>
                <TabPanel p={0} mt={2}>
                    <Divider mb={2}></Divider>
                    <Flex gap={1}>
                        <Box flex={8} pr={1} borderRight ='1px solid black'>
                            <International></International>
                        </Box>
                        <Box flex={4} >
                            <LatestPhotos></LatestPhotos>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                <Divider mb={2}></Divider>
                    <Flex gap={1}>
                        <Box flex={8} pr={1} borderRight ='1px solid black' >
                            <Domestic></Domestic>
                        </Box>
                        <Box flex={4} bg='white'>
                            <LatestPhotos></LatestPhotos>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                    <Divider mb={2}></Divider>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' pr={1} borderRight ='1px solid black' >
                            <League></League>
                        </Box>
                        <Box flex={4} bg='white'>
                            <LatestPhotos></LatestPhotos>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                    <Divider mb={2}></Divider>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' pr={1} borderRight ='1px solid black' >
                            <Women></Women>
                        </Box>
                        <Box flex={4} bg='white'>
                            <LatestPhotos></LatestPhotos>
                        </Box>
                    </Flex>
                </TabPanel>
            </TabPanels>
        </Tabs> 
    </Box>
  )
}


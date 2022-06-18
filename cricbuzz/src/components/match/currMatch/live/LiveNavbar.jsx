import { Box, Divider, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { LatestPhotos } from '../../../news/LatestPhotos'
import { Domestic } from './Domestic'
import { International } from './International'

export const LiveNavbar = () => {
  return (
    <Box m='auto'  mt={1}>
        <Tabs colorScheme='green' variant='solid-rounded'>
            <TabList bg='white' maxH={'30px'} gap={5}>           
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>International</Tab>
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>Domestic</Tab>                                 
            </TabList>
            <TabPanels>
                <TabPanel p={0} mt={2}>
                    <Divider mb={2}></Divider>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' pr={1} borderRight='1px solid black'>
                            <International></International>
                        </Box>
                        <Box flex={4} bg='white'>
                            <LatestPhotos></LatestPhotos>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                <Divider mb={2}></Divider>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' pr={1} borderRight='1px solid black'>
                            <Domestic></Domestic>
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


import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { LatestPhotos } from '../news/LatestPhotos'
import { Domestic } from './Domestic'
import { International } from './International'
import { T20League } from './T20League'
import { Women } from './Women'


export const SeriesNavbar = () => {
  return (
    <Box>
      <Box bgColor='white' p={4} pb={0}>
        <Heading size='lg'>Cricket Schedule</Heading>
      </Box>
      <Box>
        <Tabs colorScheme="green" variant='solid-rounded'>
            <TabList bg='white' maxH='60px' p={4} gap={5}>           
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>International</Tab>
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>Domestic & Others</Tab>  
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>T20 Leagues</Tab>
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>Women</Tab>                                
            </TabList>
            <TabPanels bgColor='white'>
                <TabPanel p={2} >
                  <International></International>
                </TabPanel>
                <TabPanel p={2}>
                  <Domestic></Domestic>
                </TabPanel>
                <TabPanel p={2}>
                  <T20League></T20League>
                </TabPanel>
                <TabPanel p={2}>
                  <Women></Women>
                </TabPanel>
            </TabPanels>
        </Tabs> 
      </Box>
    </Box>
  )
}


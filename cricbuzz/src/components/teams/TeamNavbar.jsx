import { Box, Divider, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { Domestic } from './Domestic'
import { International } from './International'
import { League } from './League'
import { Women } from './Women'


export const TeamNavbar = () => {
  return (
    <Box>
      <Box bgColor='white' p={4} pb={0}>
        <Heading size='lg'>Cricket Teams</Heading>
      </Box>
      <Box>
        <Tabs colorScheme="green" variant='solid-rounded'>
            <TabList bg='white' maxH='60px' p={4} gap={5}>           
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>International</Tab>
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>Domestic</Tab>  
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>Leagues</Tab>
                <Tab bgColor='rgb(214,215,219)' fontSize='sm'>Women</Tab>                              
            </TabList>
            <Divider></Divider>
            <TabPanels bgColor='white'>
                <TabPanel p={2} >
                  <International></International>
                </TabPanel>
                <TabPanel p={2}>
                  <Domestic></Domestic>
                </TabPanel>
                <TabPanel p={2}>
                  <League></League>
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


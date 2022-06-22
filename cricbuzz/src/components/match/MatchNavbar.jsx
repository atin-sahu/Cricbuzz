import { Box, Flex, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { MatchesByDayNavbar } from '../matchesByday/MatchesByDayNavbar'
import { SeriesNavbar } from '../series/SeriesNavbar'
import { TeamNavbar } from '../teams/TeamNavbar'
import { CurrMatchNavbar } from './currMatch/CurrMatchNavbar'

export const MatchNavbar = (index) => {
    const IndexValue = index.index.index;
    
  return (
    <Box w='80%' m='auto' mt={1}>
        <Tabs colorScheme='teal' defaultIndex={IndexValue}>
            <TabList bg='white'>           
                <Tab fontSize='sm'><Link to=''>Current Matches </Link></Tab>
                <Tab fontSize='sm'><Link to=''>Current & Future Series</Link></Tab>         
                <Tab fontSize='sm'><Link to=''>Matches By Day</Link></Tab>
                <Tab fontSize='sm'><Link to=''>Team</Link>s</Tab>
                <Tab fontSize='sm'><Link to=''>Series Archive  </Link></Tab>                          
            </TabList>
            <TabPanels>
                <TabPanel p={0}>
                    <CurrMatchNavbar></CurrMatchNavbar>
                </TabPanel>
                <TabPanel p={0}>
                    <SeriesNavbar></SeriesNavbar>
                </TabPanel>
                <TabPanel p={0}>
                   <MatchesByDayNavbar></MatchesByDayNavbar>
                </TabPanel>
                <TabPanel p={0}>
                   <TeamNavbar></TeamNavbar>
                </TabPanel>
                <TabPanel p={0}>
                    
                </TabPanel>
            </TabPanels>
        </Tabs> 
    </Box>
  )
}

import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { LiveNavbar } from './live/LiveNavbar'
import { RecentNavbar } from './recent/RecentNavbar'
import { UpcomingNavbar } from './upcoming/UpcomingNavbar'

export const CurrMatchNavbar = () => {
  return (
    <Box m='auto' p={4} bg={'white'}>
        <Heading size='lg'>Live Cricket Score</Heading>
        <Tabs colorScheme='teal' >
            <TabList >           
                <Tab fontSize='sm'><Link to=''>Live</Link></Tab>
                <Tab fontSize='sm'><Link to=''>Recent</Link></Tab>         
                <Tab fontSize='sm'><Link to=''>Upcoming</Link></Tab>                         
            </TabList>
            <TabPanels>
                <TabPanel p={0} mt={2}>
                    <LiveNavbar></LiveNavbar>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                    <RecentNavbar></RecentNavbar>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                   <UpcomingNavbar></UpcomingNavbar>
                </TabPanel>
            </TabPanels>
        </Tabs> 
    </Box>
  )
}

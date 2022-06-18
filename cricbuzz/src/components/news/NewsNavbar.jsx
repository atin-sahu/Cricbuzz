import { Box, Flex, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { LatestPhotos } from './LatestPhotos'
import { AllNews } from './AllNews'
import { Topics } from './Topics'
import { SpecialNews } from './SpecialNews'
import { Interview } from './Interview'
import { LiveBlog } from './LiveBlog'
import { Cricbuzz } from './Cricbuzz'
import { LatestNews } from './LatestNews'

export const NewsNavbar = () => {
  return (
    <Box w='80%' m='auto'  mt={1}>
        <Tabs colorScheme='teal'>
            <TabList bg='white'>
                <SimpleGrid columns={{base:2,md:4, lg:6,xl:10}} >
                    <Tab fontSize='sm'>All Stories</Tab>
                    <Tab fontSize='sm'>Cricbuzz Plus</Tab>
                    <Tab fontSize='sm'>News</Tab>
                    <Tab fontSize='sm'>Topics</Tab>
                    <Tab fontSize='sm'>Spotlight</Tab>
                    <Tab fontSize='sm'>Opinions</Tab>
                    <Tab fontSize='sm'>Specials</Tab>
                    <Tab fontSize='sm'>Stats</Tab>
                    <Tab fontSize='sm'>Interviews</Tab>
                    <Tab fontSize='sm'>Live Blogs</Tab>
                </SimpleGrid>
            </TabList>
            <TabPanels>
                <TabPanel p={0} mt={2}>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' p={2}>
                            <AllNews></AllNews>
                        </Box>
                        <Box flex={4} bg='white' p={2}>
                            <LatestPhotos></LatestPhotos>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' p={2}>
                            <Cricbuzz></Cricbuzz>
                        </Box>
                        <Box flex={4} bg='white' p={2}>
                            <LatestNews></LatestNews>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' p={2}>
                            <AllNews></AllNews>
                        </Box>
                        <Box flex={4} bg='white' p={2}>
                            <LatestPhotos></LatestPhotos>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' p={2}>
                           <Topics></Topics>
                        </Box>
                        <Box flex={4} bg='white' p={2}>
                            <LatestNews></LatestNews>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' p={2}>
                            <Cricbuzz></Cricbuzz>
                        </Box>
                        <Box flex={4} bg='white' p={2}>
                            <LatestPhotos></LatestPhotos>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' p={2}>
                            <Interview></Interview>
                        </Box>
                        <Box flex={4} bg='white' p={2}>
                            <LatestNews></LatestNews>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' p={2}>
                            <SpecialNews></SpecialNews>
                        </Box>
                        <Box flex={4} bg='white' p={2}>
                            <LatestPhotos></LatestPhotos>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' p={2}>
                            <LiveBlog></LiveBlog>
                        </Box>
                        <Box flex={4} bg='white' p={2}>
                            <LatestNews></LatestNews>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' p={2}>
                           <Interview></Interview>
                        </Box>
                        <Box flex={4} bg='white' p={2}>
                            <LatestPhotos></LatestPhotos>
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel p={0} mt={2}>
                    <Flex gap={1}>
                        <Box flex={8} bg='white' p={2}>
                            <LiveBlog></LiveBlog>
                        </Box>
                        <Box flex={4} bg='white' p={2}>
                            <LatestNews></LatestNews> 
                        </Box>
                    </Flex>
                </TabPanel>

            </TabPanels>
        </Tabs>
        
    </Box>
  )
}

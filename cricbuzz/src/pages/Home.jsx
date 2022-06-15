import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FeaturedMatches } from '../components/FeaturedMatches'
import { Footer } from '../components/Footer'
import { LatestNews } from '../components/LatestNews'
import { LatestUpdates } from '../components/LatestUpdates'

export const Home = () => {

  

  return (
    <Box>
      <Box width='80%' m='auto' >
        <Box p={3} bg='white' mt={1}>
          <Heading as="h2" fontSize='md' color='teal' >FEATURED MATCHES</Heading>
          <SimpleGrid columns={{base:1, md:2, lg:4}} >
            <Box>
              <FeaturedMatches></FeaturedMatches>
            </Box>
            <Box>
              <FeaturedMatches></FeaturedMatches>
            </Box>
            <Box>
              <FeaturedMatches></FeaturedMatches>
            </Box>
            <Box>
              <FeaturedMatches></FeaturedMatches>
            </Box>
          </SimpleGrid>
        </Box>
        <Flex mt={1} gap={1}>
          <Box  flex={4} bg='white'>
            <Heading as="h1" size='md' color='teal' m={2}>LATEST NEWS</Heading>
            <LatestNews></LatestNews>
            <LatestNews></LatestNews>
          </Box>
          <Box flex={8} bg='white' p={2}>
            <LatestUpdates></LatestUpdates>
            <LatestUpdates></LatestUpdates>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Footer></Footer>
      </Box>
    </Box>
  )
}

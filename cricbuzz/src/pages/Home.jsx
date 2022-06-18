import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FeaturedMatches } from '../components/FeaturedMatches'
import { AllNews } from '../components/news/AllNews'
import { LatestNews } from '../components/news/LatestNews'
import { LatestPhotos } from '../components/news/LatestPhotos'

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
              <LatestNews></LatestNews>
              <LatestPhotos></LatestPhotos>
          </Box>
          <Box flex={8} bg='white' p={2}>
            <AllNews></AllNews>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

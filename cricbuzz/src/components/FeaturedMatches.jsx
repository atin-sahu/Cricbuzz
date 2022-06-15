
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const FeaturedMatches = () => {
  return (
    <Box  display='flex' flexDirection='column' p={5} borderRight='1px solid black' >
        <Box display='flex' flexDirection='row' w='70%'>
            <Text>SL</Text>
            <Spacer></Spacer>
            <Text>200-7(50)</Text>
        </Box>
        <Box display='flex' flexDirection='row' w='70%'>
            <Text>SL</Text>
            <Spacer></Spacer>
            <Text>200-7(50)</Text>
        </Box >
     
        <Link to=''>
            <Text color='blue'>india won by 2 wickets</Text>
        </Link>
      
    </Box>
   
  )
}

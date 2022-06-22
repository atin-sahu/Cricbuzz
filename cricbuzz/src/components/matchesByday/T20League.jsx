import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const T20League = () => {
  return (
    <Box>
        <Box bgColor='rgb(214,215,219)' p={2}>
            <Text fontWeight='bold' fontSize='sm'>SUN, JUN 19 2022</Text>  
        </Box>
        <Box p={2} >
            <Flex justifyContent='space-between'>
                <Box flex={4}>
                    <Text fontWeight='bold'>South Africa tour of India, 2022</Text>
                </Box>
                <Box flex={4}>
                    <Text fontSize='md'>India vs South Africa, 5th T20I</Text>
                    <Text fontWeight='light' fontSize='sm' >M.Chinnaswamy Stadium, Bengaluru</Text>
                </Box>
                <Box flex={4}>
                    <Text fontSize='md'>7:00 PM</Text>
                    <Text fontWeight='light' fontSize='sm' >01:30 PM GMT / 07:00 PM LOCAL</Text>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}


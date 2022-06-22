import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { LatestPhotos } from '../news/LatestPhotos'

export const Women = () => {
  return (
    <Box p={5}>
        <Flex gap={2}>
            <Box flex={8} borderRight='1px solid black'>
                <SimpleGrid gap={2} columns={{base:1, lg:2}}>
                    <Box >
                        <Flex alignItems='center'>
                            <Box flex={4}  >
                                <Image rounded='lg' src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg'></Image>
                            </Box>
                            <Box flex={8}>
                                <Text p={2} fontWeight='medium' fontSize='lg'> INDIA </Text>
                            </Box>
                        </Flex> 
                    </Box>
                    <Box>
                        <Flex alignItems='center'>
                            <Box flex={4} >
                                <Image rounded='lg' src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg'></Image>
                            </Box>
                            <Box flex={8}>
                                <Text p={2} fontWeight='medium' fontSize='lg'> INDIA </Text>
                            </Box>
                        </Flex> 
                    </Box>
                </SimpleGrid>
            </Box>
            <Box flex={4}>
                <LatestPhotos></LatestPhotos>
            </Box>
        </Flex>
    </Box>
  )
}

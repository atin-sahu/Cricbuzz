import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const T20League = () => {
  return (
    <Box>
        <Box bgColor='rgb(214,215,219)' p={2}>
            <Flex gap={10}>
                <Box flex={3}>
                    <Text>Month</Text>
                </Box>
                <Box flex={9}>
                    <Text>Series Name</Text>
                </Box>
            </Flex>
        </Box>
        <Box p={2} >
            <Flex gap={10}>
                <Box flex={3}>
                    <Text fontWeight='bold'>August 2019</Text>
                </Box>
                <Box flex={9}>
                    <Text fontSize='md'>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text fontWeight='light' fontSize='sm' >Aug 14 - Aug 21</Text>
                    <Divider mt={3} mb={3} ></Divider>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}


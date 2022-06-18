import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const International = () => {
  return (
    <Box> 
        <Heading bg='rgb(236,235,235)' fontSize='2xl' p={2}>RANJI TROPHY 2021-22</Heading>
        <Box mt={2}>
            <Flex>
                <Text fontWeight='bold'>Bangladesh vs West Indies</Text>
                <Text>, 1st Test</Text>
            </Flex>
            <Text>Jun 16 - Jun 21  •  7:30 PM at North Sound, Antigua, Sir Vivian Richards Stadium</Text>
        </Box>
        <Box borderLeft='2px solid brown' bgColor='rgb(236,235,235)' mt={2} p={2} maxW='fit-content'>
            <Flex gap={3} alignItems='center'>
                <Text color='brown'> Match Facts</Text>
                <FaGreaterThan color='brown'></FaGreaterThan>
            </Flex>
        </Box>
        <Box>
            <Flex>
                <Box borderRight='1px solid black' mt={5} pl={3} pr={3}>
                    <Link to='/news'>
                        <Text color='blue'>News</Text>
                    </Link>
                </Box>
                <Box borderRight='1px solid black' mt={5} pl={3} pr={3}>
                    <Link to=''>
                        <Text color='blue'>Match Facts</Text>
                    </Link>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

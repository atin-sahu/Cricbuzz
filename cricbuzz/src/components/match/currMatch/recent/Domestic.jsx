import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Domestic = () => {
  return (
    <Box > 
        <Heading bg='rgb(236,235,235)' fontSize='2xl' p={2}>RANJI TROPHY 2021-22</Heading>
        <Box mt={2}>
            <Flex>
                <Text fontWeight='bold'>Bangladesh vs West Indies</Text>
                <Text>, 1st Test</Text>
            </Flex>
            <Text>Jun 16 - Jun 21  •  7:30 PM at North Sound, Antigua, Sir Vivian Richards Stadium</Text>
        </Box>
        <Box borderLeft='2px solid blue' bgColor='rgb(236,235,235)' mt={2} p={4} w='50%'>
            <Box>
                <Flex>
                    <Text flex={4}>BAN</Text>
                    <Text flex={8}>103</Text>
                </Flex>
                <Flex fontWeight="bold">
                    <Text flex={4} >IND</Text>
                    <Text flex={8}>95-3</Text>
                </Flex>
            </Box>
            <Text color='blue'>Day 1: Stumps - West Indies trail by 8 runs</Text>
        </Box>
        <Box>
            <Flex>
                <Box borderRight='1px solid black' mt={5} pl={3} pr={3}>
                    <Link to=''>
                        <Text color='blue'>Live Score</Text>
                    </Link>
                </Box>
                <Box borderRight='1px solid black' mt={5} pl={3} pr={3}>
                    <Link to=''>
                        <Text color='blue'>Scorecard</Text>
                    </Link>
                </Box>
                <Box borderRight='1px solid black' mt={5} pl={3} pr={3}>
                    <Link to='/news'>
                        <Text color='blue'>News</Text>
                    </Link>
                </Box>
                <Box borderRight='1px solid black' mt={5} pl={3} pr={3}>
                    <Link to=''>
                        <Text color='blue'>Full Commentary</Text>
                    </Link>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

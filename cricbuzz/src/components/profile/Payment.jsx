import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export const Payment = () => {
  return (
    <Box>
        <Box align='center' borderBottom='1px solid silver' p={3} mb={3}>
            <Heading fontSize='2xl' >Payment History</Heading>
        </Box>
    </Box>
  )
}

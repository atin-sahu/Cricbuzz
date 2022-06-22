import { Box } from '@chakra-ui/react'
import React from 'react'
import { MatchNavbar } from '../components/match/MatchNavbar'

export const Match = (index) => {
  
  return (
    <Box>
        <MatchNavbar index={index} ></MatchNavbar>
    </Box>
  )
}

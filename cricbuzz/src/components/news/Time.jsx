import { Box, Text } from '@chakra-ui/react';
import React from 'react'

export const Time = ({time}) => {
    console.log("time",time);
    let dateObj = new Date(time*1000);
    let hours = dateObj.getUTCHours.toString().padStart(2,0);
    let minutes = dateObj.getUTCMinutes.toString().padStart(2,0);
    let seconds = dateObj.getUTCSeconds.toString().padStart(2,0);
    let ans = `${hours}:${minutes}:${seconds}`;
    console.log("update time",ans);
  return (
    <Box>
        <Text>{ans}</Text>
    </Box>
  )
}

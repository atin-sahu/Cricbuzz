import { Box, Divider, Link, Text } from '@chakra-ui/react'
import React from 'react'

export const LatestNews = () => {
  return (
    <Box p={2}>
        <Link>
            <Text noOfLines={3}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi corrupti distinctio repudiandae itaque enim? Distinctio tenetur, quis quisquam, accusantium dolore earum illo pariatur, id corrupti doloribus impedit placeat nisi cumque? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sunt corrupti molestia </Text>
        </Link>
        <Divider mt={10} mb={2} ></Divider>
    </Box>
  )
}

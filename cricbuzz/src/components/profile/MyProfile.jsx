import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

export const MyProfile = () => {
  return (
    <Box>
        <Box align='center' borderBottom='1px solid silver' p={3} mb={3}>
            <Heading fontSize='2xl' >My Profile</Heading>
        </Box>
        <Box align='center' p={3}>
            <Box w='40%'  >
                <Image rounded='full' src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png'>
                </Image>
            </Box>
            <Box>
                <Text fontWeight='bold'>Mahendra Singh Dhoni</Text>
            </Box>
        </Box>
        <Box p={3} >
            <Box borderBottom='1px solid silver' p={3}>
                <Flex gap={2}>
                    <Box flex={4}>
                        <Text fontWeight='bold'>Email :</Text>
                    </Box>
                    <Box flex={8}>
                        <Text>msdhoni7@gmail.com</Text>
                    </Box>
                </Flex>
            </Box>
            <Box borderBottom='1px solid silver' p={3}>
                <Flex gap={2}>
                    <Box flex={4}>
                        <Text fontWeight='bold'>Number :</Text>
                    </Box>
                    <Box flex={8}>
                        <Text><b>+91 </b> 639 197 9797</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    </Box>
  )
}

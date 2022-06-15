import { Box, Divider, Image, SimpleGrid, Text } from '@chakra-ui/react'

export const LatestUpdates = () => {

  return (
    <Box>
        <Text color='grey'>INDIA pakistan 2022</Text>
        <SimpleGrid columns={{base:1, lg:2}}>
            <Box  p={2}>
                <Image src='https://www.cricbuzz.com/a/img/v1/420x235/i1/c236020/hardik-to-captain-in-ireland-t.jpg'>
                </Image>
            </Box>
            <Box  p={2} textOverflow='ellipsis'>
                <Text  noOfLines={2} fontWeight='bold' fontSize='lg'>i am ms dhoni i am best and cool i am ms dhoni i am best and cool i am besti am best and cool and cool</Text>
                <Text noOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicing elit. Nesciunt dicta ipsum voluptatum ullam quasi, temporibus natus officia repellat .</Text>
            </Box>
        </SimpleGrid>
        <Divider mt={5} mb={2}></Divider>
    </Box>
  )
}

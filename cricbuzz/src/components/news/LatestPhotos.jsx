import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import  axios  from "axios"
import { Link } from 'react-router-dom';

export const LatestPhotos = () => {
    const [photos,setPhotos] = useState([]);

    const getPhotos = async ()=>{
        const data = await axios({
                method: 'GET',
                url: 'https://cricbuzz-cricket.p.rapidapi.com/photos/v1/detail/5374',
                headers: {
                    'X-RapidAPI-Key': 'b1233bd737mshb48e280eeb863f7p111f8djsn735cbb71628c',
                    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
                }
              })
        .then((data)=>(data.data.photoGalleryDetails));
        console.log("data",data);
        setPhotos(data);

    }

    // useEffect(()=>{
    //     getPhotos();
    // },[])

//   return (
//     <Box>
//         <Heading size='lg' >LATEST PHOTOS</Heading>
//         {photos.map((player)=>{
//             return <Box key={player.imageId}>
//                 <Link to='' >
//                     <Flex gap={2} p={1}>
//                         <Box flex={4}>
//                             <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRdnuP6tn4h6dsKpr9ZAdwISb1vjmXjYSRw&usqp=CAU'></Image>
//                         </Box>
//                         <Box flex={8}>
//                             <Text noOfLines={2}>{player.caption}</Text>
//                         </Box>
//                     </Flex>   
//                     <Divider mt={1} mb={1}></Divider>
//                 </Link>
//             </Box>
//         })}
//     </Box>
//   )
// }

return (
    <Box>
        <Heading size='lg' >LATEST PHOTOS</Heading>
        <Box>
            <Link to='' >
                <Flex gap={2} p={1}>
                    <Box flex={4}>
                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRdnuP6tn4h6dsKpr9ZAdwISb1vjmXjYSRw&usqp=CAU'></Image>
                    </Box>
                    <Box flex={8}>
                        <Text noOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius harum quam excepturi, exercitationem modi, ipsum qui deserunt est vitae sunt labore nesciunt ut inventore consequuntur molestias commodi, debitis saepe?</Text>
                    </Box>
                </Flex>   
                <Divider mt={1} mb={1}></Divider>
            </Link>
        </Box>
    </Box>
  )
}